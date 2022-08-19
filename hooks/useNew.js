import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useNew() {
  const { data, error } = useSWR(`/api/new`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useNew
