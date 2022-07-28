import useSWR from 'swr'

import { fetcher } from '../utils/fetcher'

function useComponentsNpm(params) {
  const { data, error } = useSWR(params ? [`/api/components-npm`, params] : null, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useComponentsNpm
