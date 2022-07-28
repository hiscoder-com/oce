import Image from 'next/image'

function ComponentApp({ apps }) {
  return (
    <div className="flex flex-col gap-10">
      {apps &&
        apps.map((el, key) => {
          return (
            <div key={key} className="flex h-24 gap-8">
              <Image
                src={el.avatar_url}
                alt="logo"
                width="99"
                height="99"
                className="rounded-lg w-1/5"
              />
              <div className="flex flex-col gap-4 w-4/5 text-ellipsis overflow-hidden">
                <p className="underline text-2xl font-bold decoration-2 underline-offset-4">
                  {el.name}
                </p>
                <p className="text-justify text-zinc-450">{el.description}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ComponentApp
