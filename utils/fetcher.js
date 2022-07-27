import axios from 'axios'

export const fetcher = (url, params) =>
  axios.get(url, { params }).then((result) => {
    if (result.status === 200) {
      return result.data
    } else {
      throw result
    }
  })
