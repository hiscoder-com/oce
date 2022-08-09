import axios from 'axios'
import { prisma } from '../../utils/prisma'

const saveRepo = async (data) => {
  const request = {
    repo: data.full_name,
    // language: data.language,
    description: data.description,
    // homepage: data.homepage || '',
    topics: {
      create: data.topics.map((el) => ({
        topic: {
          connectOrCreate: {
            where: { name: el },
            create: { name: el },
          },
        },
      })),
    },
  }

  await prisma.repo.upsert({
    where: { repo: data.full_name },
    update: {
      repo: data.full_name,
      topics: {
        deleteMany: {},
      },
    },
    create: {
      repo: data.full_name,
    },
  })

  await prisma.repo.upsert({
    where: { repo: data.full_name },
    update: request,
    create: request,
  })

  return true
}

const saveOceData = async (data) => {
  const request = {
    repo: data.full_name,
    packageName: data.name || null,
    release: data.version || '',
    releaseDate: data.date || '',
    logo: data.logo || null,
    depends: {
      create: (data?.dependencies && data?.dependencies.length > 0
        ? data?.dependencies
        : []
      ).map((el) => ({
        depend: {
          connectOrCreate: {
            create: { packageName: el },
            where: { packageName: el },
          },
        },
      })),
    },
  }
  await prisma.repo.upsert({
    where: { repo: data.full_name },
    create: {
      repo: data.full_name,
    },
    update: {
      repo: data.full_name,
      depends: {
        deleteMany: {},
      },
    },
  })
  await prisma.repo.upsert({
    where: { repo: data.full_name },
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
  let data = { description, full_name, topics, homepage, language }

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
      await saveOceData({ ...result.data, full_name: data.full_name })
    } catch (error) {
      res.status(404).json(error)
      return
    }
  }

  res.status(200).json(data)
}
