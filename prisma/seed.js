const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const RepoData = [
  {
    repo: 'repo0',
  },
  {
    repo: 'repo1',
    name: 'Repo1',
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
    reposFrom: {
      create: [
        {
          repoTo: {
            connectOrCreate: {
              create: { repo: 'repo2' },
              where: { repo: 'repo2' },
            },
          },
        },
      ],
    },
  },
  {
    repo: 'repo2',
    name: 'Repo2',
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
    reposFrom: {
      create: [
        {
          repoTo: {
            connectOrCreate: {
              create: { repo: 'repo1' },
              where: { repo: 'repo1' },
            },
          },
        },
        {
          repoTo: {
            connectOrCreate: {
              create: { repo: 'repo5' },
              where: { repo: 'repo5' },
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
