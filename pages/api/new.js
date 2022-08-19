import { prisma } from '../../utils/prisma'

export default async function handle(req, res) {
  const apps = await prisma.repo.findMany({
    take: 2,
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      topics: {
        some: {
          topic: {
            name: 'scripture-open-apps',
          },
        },
      },
    },
    select: {
      repo: true,
      logo: true,
      description: true,
    },
  })

  const components = await prisma.repo.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      topics: {
        some: {
          topic: {
            name: 'scripture-open-components',
          },
        },
      },
    },
    select: {
      packageName: true,
      repo: true,
      description: true,
      ownerAvatar: true,
      release: true,
      createdAt: true,
      topics: { select: { topicId: true } },
    },
  })

  res.status(200).json({ apps, components })
  return true
}
