import Image from 'next/image'
function SidePanel() {
  return (
    <div className="flex flex-col justify-between  w-96   ">
      <div className="text-xs  text-zinc-450 ">Licence</div>
      <div className=" flex items-center h-8 mb-4 pl-2.5 rounded bg-blue-75 text-base font-semibold">
        MIT License
      </div>
      <div className="text-xs  text-zinc-450">Homepage</div>
      <div className="flex items-center justify-between h-8 mb-4 px-3  rounded bg-blue-75 text-base font-semibold">
        <div>tt-timeline-poc.netlify.app</div>
        <div className="h-5 w-5">
          <Image
            width="100%"
            height="100%"
            alt="goTo"
            src={'/goTo.svg'}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-xs  text-zinc-450">Repository</div>
      <div className="flex items-center justify-between h-8 mb-4 px-3  rounded bg-blue-75 text-base font-semibold">
        <div>https://github.com/texttree/timeline-poc</div>
        <div className="h-5 w-5">
          <Image
            width="100%"
            height="100%"
            alt="goTo"
            src={'/goTo.svg'}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-44">
          <div className="text-xs  text-zinc-450">Realece</div>
          <div className="flex items-center h-8 mb-4 pl-2.5  rounded bg-blue-75 text-base font-semibold">
            21.07.2022
          </div>
        </div>
        <div className="w-44">
          <div className="text-xs  text-zinc-450">Version</div>
          <div className="flex items-center h-8 mb-4 pl-2.5  rounded bg-blue-75 text-base font-semibold">
            3.4.1
          </div>
        </div>
      </div>
      <div className="text-xs  text-zinc-450">Owner</div>
      <div className="flex items-center h-8 mb-4 pl-2.5  rounded bg-blue-75 text-base font-semibold">
        <div className="h-5 w-5">
          <Image
            width="100%"
            height="100%"
            alt="owner"
            src={'/logo_card_app.png'}
            className="rounded-full"
          />
        </div>
        <div className="pl-2.5">https://github.com/texttree/timeline-poc</div>
      </div>
      <div className="text-xs  text-zinc-450">Contributors:</div>
    </div>
  )
}

export default SidePanel
