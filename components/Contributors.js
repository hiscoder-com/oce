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
    <div className="flex flex-col gap-1.5 text-text-500">
      <p className="text-xs text-text-500">Contributors: {contributors?.length}</p>
      <div>
        {contributors &&
          contributors.map((el, key) => {
            return (
              <a
                target="_blank"
                href={`https://github.com/${el.login}`}
                key={key}
                className="overflow-hidden border inline-flex m-0.5 rounded-lg"
                rel="noreferrer"
              >
                <Image
                  src={el.avatar_url}
                  alt={el.login}
                  title={el.login}
                  width="42"
                  height="42"
                />
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default Contributors
