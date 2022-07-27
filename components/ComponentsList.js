import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ComponentCard({ repo }) {
  console.log(repo)
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
  const [total, setTotal] = useState()
  const [components, setComponents] = useState([])
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null })

  useEffect(() => {
    fetch('/api/components')
      .then((result) => result.json())
      .then((res) => {
        setTotal(res.total)
        setComponents(res.repos)
        setPageInfo(res.pageInfo)
      })
      .catch((err) => console.log(err))
  }, [])
  const handlerLoadMore = () => {
    fetch(`/api/components?from=${pageInfo.endCursor}`)
      .then((result) => result.json())
      .then((res) => {
        setComponents((prev) => prev.concat(res.repos))
        setPageInfo(res.pageInfo)
      })
      .catch((err) => console.log(err))
  }

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      <div>Total Count: {total}</div>
      {componentCards}
      {pageInfo.hasNextPage ? (
        <div onClick={handlerLoadMore}>LOAD MORE</div>
      ) : (
        <div>END</div>
      )}
    </div>
  )
}

export default ComponentsList
