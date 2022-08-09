import { useCallback, useEffect, useState } from 'react'

function useScrollTrack({ refs, top, specific }) {
  const [scroll, setScroll] = useState({})
  const onScroll = useCallback(() => {
    let result = null
    for (const key in refs) {
      const value = refs[key].getBoundingClientRect().top
      if (value < (specific[key] ?? top)) {
        result = key
      }
    }
    setScroll(result)
  }, [refs, specific, top])

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  return scroll
}

export default useScrollTrack
