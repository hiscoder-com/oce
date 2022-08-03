import axios from 'axios'
import prisma from '../../utils/prisma'

const saveRepo = async (data) => {
  const request = {
    repo: data.repository.full_name,
    // language: data.repository.language,
    description: data.repository.description,
    // homepage: data.repository.homepage || '',
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
  }

  const repoTopicsClear = await prisma.repo.update({
    where: { repo: data.repository.full_name },
    data: {
      topics: {
        deleteMany: {},
      },
    },
  })

  const repo = await prisma.repo.upsert({
    where: { repo: data.repository.full_name },
    update: request,
    create: request,
  })

  return true
}
const saveOceData = async (data) => {
  const request = {
    repo: data.repository.full_name,
    name: data.name || null,
    // version: data.version || '',
    // date: data.date || '',
    logo: data.logo || null,
    reposFrom: {
      create:
        data?.dependencies && data?.dependencies.length > 0
          ? data?.dependencies
          : [].map((el) => ({
              repoTo: {
                connectOrCreate: {
                  create: { repo: el },
                  where: { repo: el },
                },
              },
            })),
    },
  }
  const repoDependenciesClear = await prisma.repo.update({
    where: { repo: data.name },
    data: {
      reposFrom: {
        deleteMany: {},
      },
    },
  })
  const repo = await prisma.repo.upsert({
    where: { repo: data.name },
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
      // console.log(result.data, 'new')
      await saveOceData({ ...result.data, full_name: data.repository.full_name })
    } catch (error) {
      res.status(404).json(error)
      return
    }
  }

  res.status(200).json(data)
}
