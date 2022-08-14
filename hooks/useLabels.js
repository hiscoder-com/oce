import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useLabels() {
  const { data, error } = useSWR(`/api/labels`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useLabels
