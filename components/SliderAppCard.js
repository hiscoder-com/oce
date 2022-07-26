import Image from 'next/image'
import Link from 'next/link'

function SliderAppCard({ app }) {
  const { title, description, link, logo } = app

  return (
    <div className="w-[520px] max-h-64 bg-blue-75 my-5 py-10 px-8 rounded-2xl">
      <div className="flex flex-row">
        <div className="w-2/3">
          <div>
            <div className="font-bold text-3xl capitalize">{title ?? 'Title of app'}</div>
            <div className="mt-2 text-lg line-clamp-3 text-gray-500">
              {description ?? 'Description of app'}
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            width="100%"
            height="100%"
            alt="logo of app"
            src={logo ?? '/logo_card_app.png'}
            className="rounded-lg"
          />
        </div>
      </div>
      <Link href={link ?? '#'}>
        <a className="underline font-bold text-lg">More</a>
      </Link>
    </div>
  )
}

export default SliderAppCard
