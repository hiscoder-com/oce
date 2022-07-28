import { useRouter } from 'next/router'
import ComponentGraph from '../../components/ComponentGraph'

function ComponentGraphPage() {
  const {
    isReady,
    query: { address },
  } = useRouter()
  return <>{isReady ? <ComponentGraph address={address.join('/')} /> : <>Loading</>}</>
}

export default ComponentGraphPage
