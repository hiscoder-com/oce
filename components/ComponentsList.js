import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ComponentCard(repo) {
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
        {repo.repositoryTopics.nodes
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
        src={repo.owner.avatarUrl}
        alt={repo.owner.login}
      />
      <div>
        <b>RELEASE NAME</b> {repo.latestRelease?.name || '--.--.--'}
      </div>
      <div>
        <b>RELEASE DATE</b> {repo.latestRelease?.createdAt || '--/--/--'}
      </div>
    </div>
  )
}

function ComponentsList() {
  const [totalCount, setTotalCount] = useState()
  const [components, setComponents] = useState([])

  useEffect(() => {
    fetch('/api/components')
      .then((result) => result.json())
      .then((res) => {
        setTotalCount(res.totalCount)
        setComponents(res.nodes)
      })
  }, [])

  const componentCards = components?.map(ComponentCard)

  return (
    <div>
      <div>totalCount: {totalCount}</div>
      {componentCards}
    </div>
  )
}

export default ComponentsList
