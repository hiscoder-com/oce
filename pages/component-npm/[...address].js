import { useRouter } from 'next/router'
import ComponentNpm from '../../components/ComponentNpm'

function ComponentNpmPage() {
  const {
    isReady,
    query: { address },
  } = useRouter()
  return <>{isReady ? <ComponentNpm address={address.join('/')} /> : <>Loading</>}</>
}

export default ComponentNpmPage
