import Link from 'next/link'
import AppImage from './AppImage'

function ComponentApp({ apps }) {
  return (
    <>
      {apps?.length ? (
        <div className="flex flex-col gap-10">
          {apps.map((el, key) => {
            return (
              <div
                key={key}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-8 mb-3"
              >
                <div className="relative w-44 md:w-32 flex-shrink-0 flex-grow-0 basis-auto aspect-square">
                  <AppImage
                    src={
                      el.logo ??
                      `https://raw.githubusercontent.com/${el?.nameWithOwner}/master/images/logo.jpg`
                    }
                    alt={el.name}
                    className="rounded-lg overflow-hidden"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                  <Link href={`/app/${el.nameWithOwner}`}>
                    <a className="underline text-2xl text-primary-600 font-bold decoration-2 underline-offset-4 uppercase">
                      {el.name}
                    </a>
                  </Link>
                  <p className="text-justify text-text-500">{el.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p className="text-text-500">
          No Apps
          <br />
          <br />
          If you are the owner of the component or app and want more information to be
          displayed here, read the{' '}
          <a
            className="underline text-primary-600"
            href="https://github.com/texttree/oce/wiki/English-Version#how-to-add-a-component-or-app"
            target="_blank"
            rel="noreferrer"
          >
            instructions at the link
          </a>
        </p>
      )}
    </>
  )
}

export default ComponentApp
