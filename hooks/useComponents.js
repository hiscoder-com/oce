import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

function useComponents(params) {
  const { data, error } = useSWR(params ? [`/api/components`, params] : null, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useComponents
