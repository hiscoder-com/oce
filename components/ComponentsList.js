import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import useComponents from '../hooks/useComponents'

export function ComponentCard({ repo }) {
  return (
    <div
      className="border rounded p-2 border-green-300 w-1/3 inline-block"
      key={repo.nameWithOwner}
    >
      <a className="text-xl hover:underline" href={`/component/${repo.nameWithOwner}`}>
        <b>NAME</b> {repo.name}
      </a>
      <br />
      <div>
        <b>LABLES </b>
        {repo.repositoryTopics?.nodes
          .filter((el) => !['scripture-open-components', 'app'].includes(el.topic.name))
          .map((el) => (
            <span key={el.topic.name}>{el.topic.name} </span>
          ))}
      </div>
      <div>
        <b>DESCRIPTION</b> {repo.description}
      </div>
      <b>OWNER</b>
      <Image
        width={'24px'}
        height={'24px'}
        src={repo.owner?.avatarUrl}
        alt={repo.owner?.login}
      />
      <div>
        <b>RELEASE NAME</b> {repo.latestRelease?.name || '--.--.--'}
      </div>
      <div>
        <b>RELEASE TAG</b> {repo.latestRelease?.tag.name || '--.--.--'}
      </div>
      <div>
        <b>RELEASE PUBLISHED DATE</b> {repo.latestRelease?.publishedAt || '--/--/--'}
      </div>
    </div>
  )
}

function ComponentsList() {
  const router = useRouter()
  const {
    isReady,
    query: { limit = 10, order = 'updated', direction = 'desc', topics = [] },
  } = router
  const [total, setTotal] = useState()
  const [from, setFrom] = useState(null)
  const [components, setComponents] = useState([])
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null })
  const { data, isLoading, isError } = useComponents(
    isReady && {
      limit,
      order,
      direction,
      topics: [],
      from,
    }
  )

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal(() => {
        if (from === null) {
          return data.total
        }
      })
      setComponents((prev) => {
        if (from === null) {
          return data.repos
        } else {
          return prev.concat(data.repos)
        }
      })
      setPageInfo(data.pageInfo)
    }
  }, [data, from, isError, isLoading])
  const handlerLoadMore = () => {
    setFrom(pageInfo.endCursor)
  }

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      {from === null && isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <div>Total Count: {total}</div>
          {componentCards}
          {pageInfo.hasNextPage ? (
            <div onClick={handlerLoadMore}>LOAD MORE</div>
          ) : (
            <div>END</div>
          )}
        </>
      )}
    </div>
  )
}

export default ComponentsList
