import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useApps() {
  const { data, error } = useSWR(`/api/apps`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useApps
