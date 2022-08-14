const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const RepoData = [
  {
    repo: 'texttree/bsa',
    packageName: '',
    topics: {
      create: [
        {
          topic: {
            connectOrCreate: {
              create: { name: 'scripture-open-components' },
              where: { name: 'scripture-open-components' },
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
      ],
    },
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: '@texttree/projector-mode-rcl' },
              where: { packageName: '@texttree/projector-mode-rcl' },
            },
          },
        },
      ],
    },
  },
  {
    repo: 'texttree/projector-mode-rcl',
    packageName: '@texttree/projector-mode-rcl',
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'npm/repo2' },
              where: { packageName: 'npm/repo2' },
            },
            connectOrCreate: {
              create: { packageName: 'scripture-resources-rcl' },
              where: { packageName: 'scripture-resources-rcl' },
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
      ],
    },
  },
  {
    repo: 'unfoldingword/scripture-resources-rcl',
    packageName: 'scripture-resources-rcl',
    depends: {
      create: [
        {
          depend: {
            connectOrCreate: {
              create: { packageName: 'gitea-react-toolkit' },
              where: { packageName: 'gitea-react-toolkit' },
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
