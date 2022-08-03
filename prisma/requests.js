const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const r = await prisma.repo.findUnique({
    where: {
      repo: 'repo2',
    },
    select: {
      repo: true,
      packageName: true,
      logo: true,
      topics: true,
      depends: true,
    },
  })

  if (!r?.repo) {
    console.log({})
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
    },
  })
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
    },
  })
  console.log({ r, dFrom, dTo })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
