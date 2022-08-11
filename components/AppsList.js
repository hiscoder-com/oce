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
        <div></div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-1 md:grid-cols-2 md:my-10 xl:grid-cols-3">
            {apps?.map(AppCard)}
          </div>
        </>
      )}
    </div>
  )
}

export default AppsList
