import { useRouter } from 'next/router'
import App from '../../components/App'

function AppPage() {
  const {
    isReady,
    query: { address },
  } = useRouter()
  return <>{isReady ? <App address={address.join('/')} /> : <>Loading</>}</>
}

export default AppPage
