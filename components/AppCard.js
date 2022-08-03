import Link from 'next/link'

import AppImage from './AppImage'

function AppCard({ repo }) {
  return (
    <div
      key={repo.nameWithOwner}
      className="flex flex-row justify-between py-8 px-6 bg-primary-100 h-full sm:h-56 rounded-xl"
    >
      <div className="flex-grow w-2/3">
        <Link className="mb-8" href={`/app/${repo.nameWithOwner}`}>
          <a className="line-clamp-1 uppercase font-bold text-xl cursor-pointer hover:underline">
            {repo.name}
          </a>
        </Link>
        <div className="pr-2 my-4 text-gray-500 text-sm line-clamp-3">
          {repo.description}
        </div>
      </div>
      <div className="w-1/3 relative">
        <AppImage
          alt={repo.name}
          className="rounded-md overflow-hidden"
          src={`https://raw.githubusercontent.com/${repo?.nameWithOwner}/master/images/logo.jpg`}
        />
      </div>
    </div>
  )
}

export default AppCard
