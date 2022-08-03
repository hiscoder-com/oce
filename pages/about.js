import Image from 'next/image'

import editor_r from '../public/editor-reverse.svg'
import oce_infographic from '../public/the_open_components_ecosystem_infographic.png'
import oce_infographic_2 from '../public/the_open_components_ecosystem_infographic_2.png'
import oce_infographic_3 from '../public/the_open_components_ecosystem_infographic_3.png'
import oce_infographic_4 from '../public/the_open_components_ecosystem_infographic_4.png'
import oce_infographic_5 from '../public/the_open_components_ecosystem_infographic_5.png'

function About() {
  return (
    <div className="flex flex-col gap-20 my-16">
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

      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-5 w-1/5 text-2xl font-bold text-text-500 active:text-primary-600">
          <div className="text-black">About OCE</div>
          <div>OCE Whitepaper</div>
          <div>Video</div>
          <div>Licensing</div>
        </div>

        <div className="w-4/5">
          <div className="text-5xl font-bold">The Open Components Ecosystem</div>
          <div className="mt-5 mb-16 text-xl font-bold">
            Collaborative Innovation in Bible Technology
          </div>
          <div className="flex justify-center bg-text-250">
            <Image src={oce_infographic} alt="oce_infographic" width="483" height="415" />
          </div>
          <p className="mt-5 mb-16 text-xl w-4/5 font-bold">
            <span className="text-primary-600">Open Components</span> decentralized
            technologies comprised of open source components that enable reuse of
            functionality outside of original context and expansion of functionality by
            integration of other components
          </p>
          <p className="text-2xl font-bold mb-2.5">
            Join a global ecosystem of developers focused on collaborative innovation in
            Bible technology.
          </p>
          <p className="text-xl">Let’s build our apps without reinventing the wheel…</p>
          <Image
            src={oce_infographic_2}
            alt="oce_infographic_2"
            width="1275"
            height="414"
          />
          <p className="mt-16 text-2xl font-bold">
            <span className="text-primary-600">Open Components</span> thrive at the
            intersection of three design criteria: Extensible, Portable, and Open source.
          </p>
          <div className="flex items-center mt-6">
            <Image
              src={oce_infographic_3}
              alt="oce_infographic_3"
              width="213"
              height="160"
              className="w-1/5"
            />
            <p className="text-xl font-bold w-4/5">
              <span className="text-primary-600">Extensible</span> architecture is
              designed to enable expansion of functionality by incorporating code
              developed by a third party, most commonly in the form of a plugin. In this
              regard, other developers are invited to bring their code and “play in the
              sandbox” provided by the base technology.
            </p>
          </div>
          <div className="flex items-center mt-6">
            <Image
              src={oce_infographic_4}
              alt="oce_infographic_4"
              width="213"
              height="160"
              className="w-1/5"
            />
            <p className="text-xl font-bold w-4/5">
              <span className="text-primary-600">Portable</span> architecture is designed
              to go in the other direction, by providing functionality that can be
              incorporated into other technologies, commonly in the form of libraries or
              simple apps. Developers are invited to “create their own sandbox” by
              incorporating the portable components into their own apps.
            </p>
          </div>
          <div className="flex mt-6">
            <Image
              src={oce_infographic_5}
              alt="oce_infographic_5"
              width="213"
              height="160"
              className="w-1/5"
            />
            <p className="text-xl font-bold w-4/5 pt-3">
              <span className="text-primary-600">Open source</span> technology consists of
              source code that is made available under an open license (like MIT), such
              that developers can repurpose, and, improve, redistribute, and otherwise
              reuse the technology without restriction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
