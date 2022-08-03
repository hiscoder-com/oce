import Image from 'next/image'
import Link from 'next/link'

import editor_r from '../public/editor-reverse.svg'
import window from '../public/window.svg'
import search from '../public/search.svg'
import editor from '../public/editor.svg'
import search2 from '../public/search2.svg'
import editor2 from '../public/editor2.svg'

function About() {
  return (
    <div className="flex flex-col gap-14 my-16">
      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex self-start ml-60">
          <Image
            src={editor_r}
            alt="editor_rotate"
            width="76"
            height="76"
            className="rotate-180"
          />
        </div>
        <div className="flex flex-col text-center gap-5">
          <div className="text-6xl font-bold text-primary-600">About</div>
          <div className="mx-auto w-3/5 text-xl text-text-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes, egestas
            turpis faucibus non turpis.
          </div>
        </div>
        <div className="flex self-end mr-60">
          <Image src={editor_r} alt="editor_reverse" width="76" height="76" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-5 w-1/5 text-2xl font-bold text-text-500 active:text-primary-600">
          <div>About OCE</div>
          <div>OCE Whitepaper</div>
          <div>Video</div>
          <div>Licensing</div>
        </div>
        <div className="w-4/5">main</div>
      </div>
    </div>
  )
}

export default About
