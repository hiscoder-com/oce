import Image from 'next/image'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
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
  const [components, setComponents] = useState([])
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null })
  const { data, isLoading, isError } = useComponents(
    isReady && {
      limit,
      order,
      direction,
      topics: [],
      from: null,
    }
  )
  console.log({ isLoading, isError, data })
  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal(data.total)
      setComponents(data.repos)
      setPageInfo(data.pageInfo)
    }
  }, [data, isError, isLoading])
  const handlerLoadMore = () => {
    const filters = new URLSearchParams({
      limit,
      order,
      direction,
      topics,
      from: pageInfo.endCursor,
    })
    fetch(`/api/components?${filters.toString()}`)
      .then((result) => {
        console.log('result2', result)
        if (result.status === 200) {
          return result.json()
        } else {
          throw result
        }
      })
      .then((res) => {
        setComponents((prev) => prev.concat(res.repos))
        setPageInfo(res.pageInfo)
      })
      .catch((err) => console.log(err))
  }

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      {isLoading ? (
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
