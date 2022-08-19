import axios from 'axios'
import { prisma } from '../../utils/prisma'

// При инициализации хука получить все данные

const saveRepo = async (data) => {
  const request = {
    repo: data.full_name,
    description: data.description,
    ownerAvatar: data.avatar_url,
    license: data.licenseName,
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

const isChange = (file, commits) => {
  return commits.some((el) => {
    return (
      el.added.includes(file) || el.modified.includes(file) || el.removed.includes(file)
    )
  })
}

export default async function handler(req, res) {
  const {
    body: {
      ref,
      commits,
      repository: {
        description,
        full_name,
        topics,
        homepage,
        language,
        default_branch,
        owner: { avatar_url },
        license,
      },
    },
  } = req

  let data = {
    description,
    full_name,
    topics,
    homepage,
    language,
    avatar_url,
    licenseName: license?.name,
  }

  if (req.body.zen) {
    await saveRepo(data)
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${full_name}/${default_branch}/oce.json`
      )
      await saveOceData({ ...result.data, full_name: data.full_name })
      return res
        .status(200)
        .json({ data, oce: { ...result.data, full_name: data.full_name } })
      return
    } catch (error) {
      res.status(404).json(error)
      return
    }
  }

  if (!commits || !commits?.length > 0 || default_branch !== ref.split('/')[2]) {
    await saveRepo(data)
    return res.status(200).json(data)
  }

  if (isChange('oce.json', commits)) {
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${full_name}/${default_branch}/oce.json`
      )
      await saveOceData({ ...result.data, full_name: data.full_name })
      res.status(200).json({ ...result.data, full_name: data.full_name })
      return
    } catch (error) {
      res.status(404).json(error)
      return
    }
  }
}
