import { useEffect, useState } from 'react'

import AppCard from './AppCard'
import useApps from '../hooks/useApps'

function AppsList({ setTotal }) {
  const [apps, setApps] = useState([])
  const [logos, setLogos] = useState({})
  const { data, isLoading, isError } = useApps()

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotal(data.git.total)
      setApps(data.git.repos)
      setLogos(data.db)
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
            {apps?.map((el) =>
              AppCard({ repo: { ...el.repo, logo: logos?.[el.repo.nameWithOwner] } })
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default AppsList
