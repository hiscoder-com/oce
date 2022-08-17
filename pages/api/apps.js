import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

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
    res.status(200).json(result.data.search)
  } catch (error) {
    res.status(404).json(error)
  }
}
