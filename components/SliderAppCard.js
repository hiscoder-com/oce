import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SliderAppCard({ config }) {
  const { title, description, link, logo } = config

  return (
    <div className="w-[520px] max-h-64 bg-[#F7F9FA] my-5 py-10 px-8 rounded-3x">
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
            width="144px"
            height="144px"
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
