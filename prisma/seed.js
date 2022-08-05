const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const RepoData = [
  {
    repo: 'repo0',
    packageName: 'npm/repo0',
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo2' },
              where: { packageName: 'npm/repo2' },
            },
          },
        },
      ],
    },
  },
  {
    repo: 'repo1',
    packageName: 'npm/repo1',
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo2' },
              where: { packageName: 'npm/repo2' },
            },
          },
        },
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo7' },
              where: { packageName: 'npm/repo7' },
            },
          },
        },
      ],
    },
    topics: {
      create: [
        {
          topic: {
            connectOrCreate: {
              create: { name: 'js' },
              where: { name: 'js' },
            },
          },
        },
        {
          topic: {
            connectOrCreate: {
              create: { name: 'react' },
              where: { name: 'react' },
            },
          },
        },
        {
          topic: {
            connectOrCreate: {
              create: { name: 'next' },
              where: { name: 'next' },
            },
          },
        },
      ],
    },
  },
  {
    repo: 'repo2',
    packageName: 'npm/repo2',
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo3' },
              where: { packageName: 'npm/repo3' },
            },
          },
        },
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo5' },
              where: { packageName: 'npm/repo5' },
            },
          },
        },
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo7' },
              where: { packageName: 'npm/repo7' },
            },
          },
        },
      ],
    },
    topics: {
      create: [
        {
          topic: {
            connectOrCreate: {
              create: { name: 'js' },
              where: { name: 'js' },
            },
          },
        },
        {
          topic: {
            connectOrCreate: {
              create: { name: 'javascript' },
              where: { name: 'javascript' },
            },
          },
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const r of RepoData) {
    const repo = await prisma.repo.upsert({
      where: { repo: r.repo },
      update: r,
      create: r,
    })
    console.log(`Created repo with id: ${repo.repo}`)
  }
  console.log(`Seeding finished.`)
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
