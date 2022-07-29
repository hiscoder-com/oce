import Link from 'next/link'
import Image from 'next/image'

import Contributors from './Contributors'

function SidePanel({ license, homepage, repository, owner, release }) {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="text-xs text-zinc-450">License</div>
      <div className="flex items-center h-8 mb-4 pl-3 rounded bg-blue-75 text-base font-semibold">
        {license}
      </div>
      <div className="text-xs text-zinc-450">Homepage</div>

      <div className="flex items-center justify-between h-8 mb-4 px-3 rounded bg-blue-75 text-base font-semibold">
        <Link href={homepage || repository}>
          <a target="_blank">
            <div className="link-in-sidePanel line-clamp-1 hover:underline">
              {homepage || repository}
            </div>
          </a>
        </Link>
        <Link href={homepage || repository}>
          <a target="_blank">
            <div className="link-svg h-5 w-5">
              <Image
                className="link-svg"
                width="100%"
                height="100%"
                alt="goTo"
                src={'/goTo.svg'}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="text-xs text-zinc-450">Repository</div>
      <div className="flex items-center justify-between h-8 mb-4 px-3 rounded bg-blue-75 text-base font-semibold">
        <Link href={repository ?? ''}>
          <a target="_blank">
            <div className="link-in-sidePanel line-clamp-1 hover:underline">
              {repository}
            </div>
          </a>
        </Link>
        <Link href={repository ?? ''}>
          <a target="_blank">
            <div className="h-5 w-5">
              <Image
                className="link-svg"
                width="100%"
                height="100%"
                alt="goTo"
                src={'/goTo.svg'}
              />
            </div>
          </a>
        </Link>
      </div>
      {release && (
        <div className="flex justify-between">
          <div className="w-[45%]">
            <div className="text-xs text-zinc-450">Release</div>
            <div className="flex items-center h-8 mb-4 pl-3 rounded bg-blue-75 text-base font-semibold">
              {release?.publishedAt
                ? new Date(release?.publishedAt).toLocaleDateString('en-US')
                : ''}
            </div>
          </div>
          <div className="w-[45%]">
            <div className="text-xs text-zinc-450">Version</div>
            <div className="flex items-center h-8 mb-4 pl-3 rounded bg-blue-75 text-base font-semibold">
              {release?.tagName}
            </div>
          </div>
        </div>
      )}
      <div className="text-xs text-zinc-450">Owner</div>
      <div className="flex items-center h-8 mb-4 pl-3 rounded bg-blue-75 text-base font-semibold">
        <div className="h-5 w-5">
          <Image
            width="100%"
            height="100%"
            alt={owner?.name ?? 'owner'}
            src={owner?.url}
            className="link-svg"
          />
        </div>
        <div className="pl-3">{owner?.name}</div>
      </div>
      <Contributors />
    </div>
  )
}

export default SidePanel
