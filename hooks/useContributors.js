import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useContributors(url) {
  const { data, error } = useSWR(
    url && `https://api.github.com/repos/${url.join('/')}/contributors`,
    fetcher
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useContributors
