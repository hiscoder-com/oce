import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
})

export default async function handler(req, res) {
  const { address } = req.query
  try {
    const result = await client.query({
      query: gql`
        {
          repository(name: "${address[1]}", owner: "${address[0]}") {
            name
            description
            pushedAt
            url
            homepageUrl
            language: primaryLanguage {
              name
            }
            licenseInfo {
              name
            }
            repositoryTopics(first: 15) {
              nodes {
                topic {
                  name
                }
              }
            }
            latestRelease {
              tagName
              publishedAt
            }
            owner {
              login
              avatarUrl
            }
          }
        }
      `,
    })
    res.status(200).json(result.data.repository)
  } catch (error) {
    res.status(404).json(error)
  }
}
