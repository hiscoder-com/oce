import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useRepo(url) {
  const { data, error } = useSWR(url && `/api/repo/${url}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useRepo
