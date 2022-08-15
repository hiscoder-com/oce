import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
})

export default async function handler(req, res) {
  const {
    from = false,
    limit = 10,
    order = 'updated',
    direction = 'desc',
    topics = '',
    query = '',
  } = req.query
  const topicsQuery =
    req?.query['topics[]']?.length > 0
      ? req?.query['topics[]']
      : topics.length > 0
      ? [topics]
      : []
  try {
    console.log(`{
        search(
          first: ${parseInt(limit)}
          after: ${from ? '"' + from + '"' : 'null'}
          type: REPOSITORY
          query: "${query} sort:${
      order.toLowerCase() === 'interactions' ? 'interactions' : 'updated'
    }-${
      direction.toLowerCase() !== 'desc' ? 'asc' : 'desc'
    } topic:scripture-open-components ${topicsQuery.map((el) => `topic:${el}`).join(' ')}"
        ) {
          pageInfo {
            hasNextPage
            endCursor
          }
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
                  totalCount
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
`)
    const result = await client.query({
      query: gql`{
        search(
          first: ${parseInt(limit)}
          after: ${from ? '"' + from + '"' : 'null'}
          type: REPOSITORY
          query: "${query} sort:${
        order.toLowerCase() === 'interactions' ? 'interactions' : 'updated'
      }-${
        direction.toLowerCase() !== 'desc' ? 'asc' : 'desc'
      } topic:scripture-open-components ${topicsQuery
        .map((el) => `topic:${el}`)
        .join(' ')} -topic:app"
        ) {
          pageInfo {
            hasNextPage
            endCursor
          }
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
                  totalCount
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
