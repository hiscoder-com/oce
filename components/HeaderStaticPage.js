import Image from 'next/image'

function HeaderStaticPage({ config }) {
  const { title, name, date } = config
  console.log(config.title)
  return (
    <div className="container">
      <button className="flex  justify-between w-28">
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
      <div className="flex justify-between items-center">
        <h1 className="text-5xl">{title ? title : ''}</h1>
        <div className="">
          <Image
            className="editor-r "
            width="197"
            height="197"
            alt="editor-r"
            src={'/editor-reverse.svg'}
          />
        </div>
      </div>
      <div className="flex">
        <p>{name ? name : ''}</p>
        <p>{date ? date : ''}</p>
      </div>
    </div>
  )
}
export default HeaderStaticPage
