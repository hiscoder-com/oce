import Image from 'next/image'
import { useRouter } from 'next/router'

import useContributors from '../hooks/useContributors'

function Contributors() {
  const {
    query: { address },
    isReady,
  } = useRouter()
  const { data: contributors } = useContributors(isReady && address)
  return (
    <div className="flex flex-col gap-1.5 text-zinc-450">
      <div className="flex">
        <p className="text-xs text-zinc-450">Contributors: {contributors?.length}</p>
      </div>
      <div className="">
        {contributors &&
          contributors.map((el, key) => {
            return (
              <div key={key} className="contributor-avatar">
                <Image
                  src={el.avatar_url}
                  alt={el.login}
                  title={el.login}
                  width="42"
                  height="42"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Contributors
