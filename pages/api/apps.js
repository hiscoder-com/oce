import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import { prisma } from '../../utils/prisma'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
})

export default async function handler(req, res) {
  try {
    const result = await client.query({
      query: gql`
        {
          search(
            first: 100
            after: null
            type: REPOSITORY
            query: "topic:scripture-open-apps sort:updated-desc"
          ) {
            total: repositoryCount
            repos: edges {
              repo: node {
                ... on Repository {
                  name
                  nameWithOwner
                  description
                  latestRelease {
                    publishedAt
                    tag {
                      name
                    }
                    name
                  }
                  repositoryTopics(first: 5) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                  owner {
                    ... on Organization {
                      avatarUrl
                      login
                    }
                    ... on User {
                      avatarUrl
                      login
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    const appsArr = await prisma.repo.findMany({
      take: 100,
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
      },
    })
    let apps = {}
    if (appsArr.length > 0) {
      for (let app of appsArr) {
        apps[app.repo] = app.logo
      }
    }

    res.status(200).json({ git: result.data.search, db: apps })
  } catch (error) {
    res.status(404).json(error)
  }
}
