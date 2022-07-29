import Image from 'next/image'

function Contributors({ contributors }) {
  return (
    <div className="flex flex-col gap-1.5 text-zinc-450">
      <div className="flex">
        <p>Contributors: {contributors.length}</p>
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
                  width="48"
                  height="48"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Contributors
