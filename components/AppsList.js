import { useEffect, useState } from 'react'

import AppCard from './AppCard'
import useApps from '../hooks/useApps'

function AppsList({ setTotal }) {
  const [apps, setApps] = useState([])
  const { data, isLoading, isError } = useApps()

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal(data.total)
      setApps(data.repos)
    }
  }, [data, isError, isLoading, setTotal])

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <div className="my-1 md:my-2 xl:my-8 grid grid-cols-1 gap-1 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-5">
            {apps?.map(AppCard)}
          </div>
        </>
      )}
    </div>
  )
}

export default AppsList
