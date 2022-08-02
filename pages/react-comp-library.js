import Image from 'next/image'
import Link from 'next/link'
import HeaderStaticPage from '../components/HeaderStaticPage'

export default function ReactCompLibrary() {
  const HeaderConfig = {
    title: 'Starting a React Component Library at unfoldingWord',
    name: 'Manny Colon',
    date: 'Jul 31, 2020·6 min read',
  }
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <HeaderStaticPage config={HeaderConfig} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40">
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            className=""
            src={'/reactCompLibrary/pic1.jpg'}
            alt=""
          />
          <figcaption className=" text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@iurte?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Iker Urteaga</u>
              </a>
            </Link>{' '}
            on{' '}
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Unsplash</u>
              </a>
            </Link>
          </figcaption>
        </figure>
        <br />
        <h1 className="font-bold text-2xl">unfoldingWord React Component Libraries</h1>
        <br />
        <h2 className="font-bold text-xl">What?</h2>
        <blockquote className="border-black border-l-2 pl-3">
          <p>
            As <div className="">Christopher Klapp</div> describes in unfoldingWord
            Component Libraries, A Component Library is a collection of functionally
            related Components.
          </p>
        </blockquote>
      </div>
    </div>
  )
}
