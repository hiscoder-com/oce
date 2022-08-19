import { useRouter } from 'next/router'

import Component from '../../components/Component'

function ComponentPage() {
  const {
    isReady,
    query: { address },
  } = useRouter()
  return <>{isReady ? <Component address={address.join('/')} /> : <>Loading...</>}</>
}

export default ComponentPage
