import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import useComponentsNpm from '../hooks/useComponentsNpm'
import ComponentCardNpm from './ComponentCardNpm'

function ComponentsListNpm({ setTotal }) {
  const router = useRouter()
  const {
    isReady,
    query: { limit = 10, ['topics[]']: _topics = [] },
  } = router
  const topics = Array.isArray(_topics) ? _topics : _topics.length ? [_topics] : []
  const [totalRepos, setTotalRepos] = useState(0)
  const [from, setFrom] = useState(0)
  const [components, setComponents] = useState([])

  const { data, isLoading, isError } = useComponentsNpm(
    isReady && {
      limit,
      topics,
      from,
    }
  )

  useEffect(() => {
    setTotal(totalRepos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalRepos])

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalRepos((prev) => {
        if (from === 0) {
          return data.total
        } else {
          return prev
        }
      })
      setComponents((prev) => {
        if (from === 0) {
          return data.objects
        } else {
          return prev.concat(data.objects)
        }
      })
    }
  }, [data, from, isError, isLoading])
  const handlerLoadMore = () => {
    setFrom((prev) => parseInt(prev) + parseInt(limit))
  }
  const componentCards = components?.map(ComponentCardNpm)

  return (
    <div>
      {from === 0 && isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <div className="my-8 grid grid-cols-5 gap-8">{componentCards}</div>
          {parseInt(from) + parseInt(limit) < parseInt(totalRepos) ? (
            <div onClick={handlerLoadMore}>LOAD MORE</div>
          ) : (
            <div>END</div>
          )}
        </>
      )}
    </div>
  )
}

export default ComponentsListNpm
