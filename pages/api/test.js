import prisma from '../../utils/prisma'

export default async function handle(req, res) {
  const { title, content, authorEmail } = req.body
  switch (req.method) {
    case 'GET':
      const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
      })
      res.json(posts)
      return true

    case 'POST':
      const result = await prisma.post.create({
        data: {
          title: title,
          content: content,
          author: { connect: { email: authorEmail } },
        },
      })
      res.json(result)
      return true

    default:
      res.status(404).end('Error')
      return false
  }
}
