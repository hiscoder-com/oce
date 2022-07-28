import Link from 'next/link'

import Labels from './Labels'

function ComponentCardNpm({ package: repo }) {
  return (
    <div
      key={repo.name}
      className="flex flex-col justify-between pt-8 pl-6 pb-4 bg-blue-75 h-56 max-w-sm rounded-xl"
    >
      <div>
        <Link href={`/component-npm/${repo.name}`}>
          <a className="line-clamp-1 font-bold text-xl cursor-pointer hover:underline">
            {repo.name}
          </a>
        </Link>
        <Labels
          isFull={false}
          labels={repo.keywords.filter((el) => !['bible', 'app'].includes(el))}
        />
      </div>
      <div className="pr-2 text-gray-500 text-sm line-clamp-3">{repo.description}</div>
      <div className="pr-6 flex justify-between">
        <div className="">{repo.author?.name}</div>
        <div className="text-gray-400">{repo.version || 'v-.--.--'}</div>
      </div>
    </div>
  )
}

export default ComponentCardNpm
