import AppImage from './AppImage'

function ComponentApp({ apps }) {
  return (
    <div className="flex flex-col gap-10">
      {apps &&
        apps.map((el, key) => {
          return (
            <div key={key} className="flex items-start gap-8">
              <AppImage
                src={el.avatar_url}
                alt={el.name}
                className="rounded-lg overflow-hidden w-16 sm:w-24 md:w-32 xl:w-44 flex-shrink-0 flex-grow-0 basis-auto aspect-square"
              />
              <div className="flex flex-col gap-4">
                <p className="underline text-2xl font-bold decoration-2 underline-offset-4">
                  {el.name}
                </p>
                <p className="text-justify text-text-500">{el.description}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ComponentApp
