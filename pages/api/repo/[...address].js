import { prisma } from '../../../utils/prisma'

export default async function handle(req, res) {
  let { address } = req.query
  address = address.join('/')
  if (!address) {
    res.status(404).end('Error')
    return false
  }
  switch (req.method) {
    case 'GET':
      const r = await prisma.repo.findUnique({
        where: { repo: address },
        select: {
          repo: true,
          packageName: true,
          logo: true,
          description: true,
          ownerAvatar: true,
          release: true,
          releaseDate: true,
          license: true,
          topics: true,
          depends: true,
        },
      })

      if (!r?.repo) {
        res.status(200).json({ r: {}, dFrom: [], dTo: [] })
        return true
      }

      r.topics = r.topics.map((el) => el.topicId)
      r.depends = r.depends.map((el) => el.dependId)
      const dFrom = await prisma.repo.findMany({
        where: {
          packageName: { in: r.depends },
        },
        select: {
          packageName: true,
          repo: true,
          logo: true,
          description: true,
          ownerAvatar: true,
          release: true,
          releaseDate: true,
          license: true,
          topics: { select: { topicId: true } },
        },
      })
      if (!r.packageName) {
        res.status(200).json({ r, dFrom, dTo: [] })
        return true
      }
      const dTo = await prisma.repo.findMany({
        where: {
          depends: {
            some: {
              depend: {
                packageName: r.packageName,
              },
            },
          },
        },
        select: {
          packageName: true,
          repo: true,
          logo: true,
          description: true,
          ownerAvatar: true,
          release: true,
          releaseDate: true,
          license: true,
          topics: { select: { topicId: true } },
        },
      })

      res.status(200).json({ r, dFrom, dTo })
      return true

    default:
      res.status(404).end('Error')
      return false
  }
}
