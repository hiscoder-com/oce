import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import useComponents from '../hooks/useComponents'
import ComponentCard from './ComponentCard'

function ComponentsList({ setTotal }) {
  const router = useRouter()
  const {
    isReady,
    query: { limit = 10, order = 'updated', direction = 'desc', topics = [] },
  } = router
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
      setTotal((prev) => {
        if (from === null) {
          return data.total
        } else {
          return prev
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
  }, [data, from, isError, isLoading, setTotal])

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
          <div className="my-1 md:my-2 xl:my-8 grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-8">
            {componentCards}
          </div>
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
