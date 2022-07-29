import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Labels from './Labels'

const ImageFallback = (props) => {
  const { src, fallbackSrc, alt = '', ...rest } = props
  const [imgSrc, setImgSrc] = useState(false)
  const [oldSrc, setOldSrc] = useState(src)
  if (oldSrc !== src) {
    setImgSrc(false)
    setOldSrc(src)
  }
  return (
    <>
      {!imgSrc ? (
        <Image
          alt={alt}
          {...rest}
          width={'512px'}
          height={'512px'}
          src={imgSrc ? fallbackSrc : src}
          onError={() => {
            setImgSrc(true)
          }}
        />
      ) : (
        <div className="relative rounded-md overflow-hidden">
          <svg viewBox="0 0 168 168" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="100%"
              height="100%"
              fill={['#27AE60', '#03A9F4', '#023047'][alt.length % 3]}
            />
            <text x="20" y="138" className="text-9xl text-white font-bold">
              {alt.toUpperCase()[0]}
            </text>
          </svg>
        </div>
      )}
    </>
  )
}

function AppCard({ repo }) {
  return (
    <div
      key={repo.nameWithOwner}
      className="flex flex-row justify-between py-8 px-6 bg-blue-75 h-full sm:h-56 rounded-xl"
    >
      <div className="flex-grow w-2/3">
        <Link className="mb-6" href={`/app/${repo.nameWithOwner}`}>
          <a className="line-clamp-1 uppercase font-bold text-xl cursor-pointer hover:underline">
            {repo.name}
          </a>
        </Link>
        <Labels
          labels={repo.repositoryTopics?.nodes
            .filter((el) => !['scripture-open-components', 'app'].includes(el.topic.name))
            .map((el) => el.topic.name)}
        />
        <div className="pr-2 my-4 text-gray-500 text-sm line-clamp-3">
          {repo.description}
        </div>
      </div>
      <div className="w-1/3 relative">
        <ImageFallback
          alt={repo.name}
          className="rounded-md overflow-hidden max-w-fit"
          src={`https://raw.githubusercontent.com/${repo?.nameWithOwner}/master/images/logo.jpg`}
        />
      </div>
    </div>
  )
}

export default AppCard
