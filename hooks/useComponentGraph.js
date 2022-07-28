import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useComponentGraph(url) {
  const { data, error } = useSWR(url && `/api/component/${url}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useComponentGraph
