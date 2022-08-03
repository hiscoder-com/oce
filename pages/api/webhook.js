import axios from 'axios'
import prisma from '../../utils/prisma'

const saveRepo = async (data) => {
  const request = {
    repo: data.repository.full_name,
    description: data.repository.description,
    topics: {
      create: data.repository.topics.map((el) => ({
        topic: {
          connectOrCreate: {
            create: { name: el },
            where: { name: el },
          },
        },
      })),
    },
    reposFrom: {
      create: data.oce.dependencies.map((el) => ({
        repoTo: {
          connectOrCreate: {
            create: { repo: el },
            where: { repo: el },
          },
        },
      })),
    },
  }
  const repo = await prisma.repo.upsert({
    where: { repo: data.repository.full_name },
    update: request,
    create: request,
  })
  return true
}

export default async function handler(req, res) {
  const {
    body: {
      ref,
      commits,
      repository: { description, full_name, topics, homepage, language, master_branch },
    },
  } = req

  const isChange = (file) => {
    return commits.some((el) => {
      return (
        el.added.includes(file) || el.modified.includes(file) || el.removed.includes(file)
      )
    })
  }
  let data = {
    repository: { description, full_name, topics, homepage, language },
  }

  if (!commits || !commits?.length > 0 || master_branch !== ref.split('/')[2]) {
    await saveRepo(data)
    return res.status(200).json('ok')
  }

  if (isChange('oce.json')) {
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${full_name}/${master_branch}/oce.json`
      )

      data['oce'] = result.data
      await saveRepo(data)
    } catch (error) {
      res.status(404).json(error)
      return
    }
  }

  res.status(200).json(data)
}
