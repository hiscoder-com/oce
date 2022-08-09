import { useCallback, useEffect, useState } from 'react'

function useScrollTrack({ refs }) {
  const [refName, setRefName] = useState({})
  const onScroll = useCallback(() => {
    let _refName = null
    for (const key in refs) {
      const value = refs[key].getBoundingClientRect().top
      if (value < refs[key].offsetHeight * 2) {
        _refName = key
      }
    }
    setRefName(_refName)
  }, [refs])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  return refName
}

export default useScrollTrack
