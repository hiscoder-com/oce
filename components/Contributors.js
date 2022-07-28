import Image from 'next/image'

import { contributors } from '../utils/helper'

function Contributors() {
  return (
    <div className="flex flex-col gap-1.5 text-zinc-450">
      <div className="flex">
        <p className="text-xs text-zinc-450">Contributors: {contributors.length}</p>
      </div>
      <div className="flex gap-1">
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
