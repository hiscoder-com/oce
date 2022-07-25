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
          topic(name: "scripture-open-components") {
            repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
              nodes {
                name
                nameWithOwner
                description
                latestRelease {
                  createdAt
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
              totalCount
            }
          }
        }
      `,
    })
    res.status(200).json(result.data.topic.repositories)
  } catch (error) {
    res.status(404).json(error)
  }
}
