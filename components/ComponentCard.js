import Image from 'next/image'

function ComponentCard() {
  return (
    <div className="flex flex-col justify-between pt-8 pl-6  pb-4 bg-blue-75 h-56 max-w-sm rounded-xl">
      <div className="">
        <div className="line-clamp-1 font-bold text-2xl">timeline-poc</div>
        <div className="line-clamp-1">Component of labels</div>
      </div>
      <div className=" pr-2 text-gray-500 text-sm line-clamp-3">
        Library of components for convenient viewing of various biblical events
      </div>
      <div className="pr-6 flex justify-between">
        <div className="rounded-full h-5 w-5">
          <Image
            width="100%"
            height="100%"
            alt="logo"
            src={'/default-logo.png'}
            className="rounded-full"
          />
        </div>
        <div className="text-gray-400">v1.1</div>
      </div>
    </div>
  )
}

export default ComponentCard
