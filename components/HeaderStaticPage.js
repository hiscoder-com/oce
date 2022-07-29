import Image from 'next/image'
import Link from 'next/link'

function HeaderStaticPage({ config }) {
  const { title, name, date } = config
  return (
    <div className=" border-b-2 border-dashed my-16  pr-10">
      <Link href="/">
        <button className="flex justify-between w-28">
          <div className="w-5 h-3">
            <Image
              className="back-svg "
              width="100%"
              height="100%"
              alt="back"
              src={'/back.svg'}
            />
          </div>
          <p className="text-gray-500 text-base font-semibold">Get started</p>
        </button>
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl ">{title ? title : ''}</h1>
        <div>
          <Image
            className="editor-r"
            width="197"
            height="197"
            alt="editor-r"
            src={'/editor-reverse.svg'}
          />
        </div>
      </div>
      <div className="flex pb-20">
        <p>{name ? name : ''}</p>
        <p className="ml-16 text-gray-500">{date ? date : ''}</p>
      </div>
    </div>
  )
}
export default HeaderStaticPage
