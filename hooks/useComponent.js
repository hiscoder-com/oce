import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useComponent(url) {
  const { data, error } = useSWR(url && `https://api.github.com/repos/${url}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useComponent
