import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useReleases(url) {
  const { data, error } = useSWR(
    url && `https://api.github.com/repos/${url.join('/')}/releases`,
    fetcher
  )

  return {
    data: data?.[0],
    isLoading: !error && !data,
    isError: error,
  }
}

export default useReleases
