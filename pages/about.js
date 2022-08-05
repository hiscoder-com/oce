import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import editor_r from '../public/editor-reverse.svg'
import file from '../public/file.svg'
import oce_infographic from '../public/oce_infographic.svg'
import oce_infographic_2 from '../public/oce_infographic_2.png'
import oce_infographic_3 from '../public/oce_infographic_3.png'
import oce_infographic_4 from '../public/oce_infographic_4.png'
import oce_infographic_5 from '../public/oce_infographic_5.png'

function About() {
  const [fix, setFix] = useState(false)
  const setFixedSidebar = () => {
    setFix(window.scrollY >= 500)
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', setFixedSidebar)
  }

  return (
    <div className="flex flex-col gap-10 mb-16">
      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div id="oce" className="text-6xl font-bold text-primary-600 scroll-m-32">
          About
        </div>
        <div className="flex self-end mr-60">
          <Image src={editor_r} alt="editor_reverse" width="76" height="76" />
        </div>
      </div>

      <div className="relative flex flex-row">
        <div
          className={`w-1/5 flex flex-col gap-5 text-2xl font-bold text-text-500 ${
            fix && 'fixed top-14'
          }`}
        >
          <a href="#oce" className="active:text-primary-600">
            About OCE
          </a>
          <a href="#whitepaper" className="active:text-primary-600">
            OCE Whitepaper
          </a>
          <a href="#video" className="active:text-primary-600">
            Video
          </a>
          <a href="#licensing" className="active:text-primary-600">
            Licensing
          </a>
        </div>

        <div className={`w-4/5 ${fix && 'ml-[304px]'}`}>
          <div className="text-5xl font-bold text-center ">
            The Open Components Ecosystem
          </div>
          <div className="mt-5 mb-8 text-xl font-bold text-center">
            Collaborative Innovation in Bible Technology
          </div>
          <div className="flex justify-center">
            <Image src={oce_infographic} alt="oce_infographic" width="760" height="737" />
          </div>
          <p className="mt-5 text-xl">
            <span className="font-bold text-primary-600">Open Components</span>{' '}
            decentralized technologies comprised of open source components that enable
            reuse of functionality outside of original context and expansion of
            functionality by integration of other components
          </p>
          <p id="whitepaper" className="my-20 text-5xl font-bold text-center scroll-m-14">
            OCE Whitepaper
          </p>

          <div className="flex justify-center my-20">
            <Link href="https://opencomponents.io/The%20Open%20Components%20Ecosystem%20-%20draft%204.pdf">
              <a
                target="_blank"
                className="flex justify-center rounded-lg gap-2.5 py-2 w-80 bg-text-600 text-white scroll-m-14 hover:bg-text-800 active:shadow-xl active:shadow-primary-700/23"
              >
                <Image src={file} alt="file" width="13" height="16" />
                <p>Read Whitepaper</p>
              </a>
            </Link>
          </div>
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
            <p className="text-xl w-4/5">
              <span className="font-bold text-primary-600">Extensible</span> architecture
              is designed to enable expansion of functionality by incorporating code
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
            <p className="text-xl w-4/5">
              <span className="font-bold text-primary-600">Portable</span> architecture is
              designed to go in the other direction, by providing functionality that can
              be incorporated into other technologies, commonly in the form of libraries
              or simple apps. Developers are invited to “create their own sandbox” by
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
            <p className="text-xl w-4/5 pt-3">
              <span className="font-bold text-primary-600">Open source</span> technology
              consists of source code that is made available under an open license (like
              MIT), such that developers can repurpose, and, improve, redistribute, and
              otherwise reuse the technology without restriction.
            </p>
          </div>
          <p
            id="video"
            className="mt-10 mb-20 text-5xl font-bold text-center scroll-m-14"
          >
            Video
          </p>

          <div className="aspect-w-16 aspect-h-9 my-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GUE7vIGmugk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p id="licensing" className="my-20 text-5xl font-bold text-center scroll-m-14">
            Licensing
          </p>

          <p className="text-xl">
            All Software code (to include source code) produced by the community shall be
            released under the MIT License (
            <Link href="https://opensource.org/licenses/MIT">
              <a target="_blank" className="text-primary-500 hover:underline">
                https://opensource.org/licenses/MIT
              </a>
            </Link>
            ).
            <br />
            <br />
            Any other work produced by the community shall be licensed under the Creative
            Commons Attribution-ShareAlike 4.0 International License (
            <Link href="http://creativecommons.org/licenses/by-sa/4.0/">
              <a target="_blank" className="text-primary-500 hover:underline">
                http://creativecommons.org/licenses/by-sa/4.0/
              </a>
            </Link>
            ) or the Creative Commons Attribution 4.0 International License (
            <Link href="http://creativecommons.org/licenses/by/4.0/">
              <a target="_blank" className="text-primary-500 hover:underline">
                http://creativecommons.org/licenses/by/4.0/
              </a>
            </Link>
            ).
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
