import { useState, useRef, useEffect, useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import useScrollTrack from '../hooks/useScrollTrack'

import editor_r from '../public/editor-reverse.svg'
import file from '../public/file.svg'
import oce_infographic from '../public/about/oce_infographic.svg'
import oce_infographic_2 from '../public/about/oce_infographic_2.png'
import oce_infographic_2_mobile from '../public/about/oce_infographic_2_mobile.png'
import oce_infographic_3 from '../public/about/oce_infographic_3.png'
import oce_infographic_4 from '../public/about/oce_infographic_4.png'
import oce_infographic_5 from '../public/about/oce_infographic_5.png'

function About() {
  const [isStickyMenu, setIsStickyMenu] = useState(false)
  const [refs, setRefs] = useState({})
  const parentRefs = useRef(null)
  const sidebar = useRef(null)

  useEffect(() => {
    const _refs = {}
    Array.from(parentRefs?.current?.children).forEach((el) => {
      if (el.id) {
        _refs[el.id] = el
      }
    })
    setRefs(_refs)
  }, [])

  const scroll = useScrollTrack({ refs })

  const setFixedSidebar = useCallback(() => {
    if (!sidebar?.current) {
      return
    }
    setIsStickyMenu(window.scrollY > sidebar?.current.getBoundingClientRect().top * 2)
  }, [sidebar])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', setFixedSidebar)
    }
    return () => {
      window.removeEventListener('scroll', setFixedSidebar)
    }
  }, [setFixedSidebar])

  useEffect(() => {
    document.documentElement.classList.add('about')
    return () => document.documentElement.classList.remove('about')
  }, [])

  return (
    <div className="flex flex-col mb-16 text-center lg:gap-10 lg:text-start">
      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="text-2xl font-bold text-primary-600 scroll-m-32 md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl">
          About
        </div>
        <div className="flex self-end w-1/5 mr-5 -mb-1">
          <Image src={editor_r} alt="editor_reverse" width="76" height="76" />
        </div>
      </div>

      <div className="relative flex flex-col items-center lg:items-start lg:flex-row">
        {/* anchor-links for mobile v */}
        <div
          className="flex justify-center gap-5 sticky top-0 py-5 w-full z-10 text-sm font-bold bg-white text-text-500 lg:hidden border-b-2"
          ref={sidebar}
        >
          <a
            href="#oce"
            className={`active:text-primary-600 ${
              scroll === 'oce' ? 'text-primary-600' : ''
            }`}
          >
            About
          </a>
          <a
            href="#whitepaper"
            className={`active:text-primary-600 ${
              scroll === 'whitepaper' ? 'text-primary-600' : ''
            }`}
          >
            Whitepaper
          </a>
          <a
            href="#video"
            className={`active:text-primary-600 ${
              scroll === 'video' ? 'text-primary-600' : ''
            }`}
          >
            Video
          </a>
          <a
            href="#licensing"
            className={`active:text-primary-600 ${
              scroll === 'licensing' ? 'text-primary-600' : ''
            }`}
          >
            Licensing
          </a>
        </div>

        <div
          className="hidden w-1/5 flex-col gap-5 mt-2 text-xl font-bold text-text-500 lg:flex sticky top-10"
          ref={sidebar}
        >
          <a
            href="#oce"
            className={`active:text-primary-600 ${
              scroll === 'oce' ? 'text-primary-600' : ''
            }`}
          >
            About OCE
          </a>
          <a
            href="#whitepaper"
            className={`active:text-primary-600 ${
              scroll === 'whitepaper' ? 'text-primary-600' : ''
            }`}
          >
            OCE Whitepaper
          </a>
          <a
            href="#video"
            className={`active:text-primary-600 ${
              scroll === 'video' ? 'text-primary-600' : ''
            }`}
          >
            Video
          </a>
          <a
            href="#licensing"
            className={`active:text-primary-600 ${
              scroll === 'licensing' ? 'text-primary-600' : ''
            }`}
          >
            Licensing
          </a>
        </div>

        <div ref={parentRefs} className="w-4/5">
          <div
            id="oce"
            className="font-bold pt-5 mb-3 text-center text-primary-600 text-2xl scroll-m-14 md:text-3xl lg:scroll-m-10 lg:mt-0 lg:text-4xl xl:text-5xl"
          >
            The Open Components Ecosystem
          </div>
          <div className="text-center text-lg mb-10 text-primary-600 md:text-2xl">
            <span className="font-bold">Collaborative Innovation</span> in Bible
            Technology
          </div>
          <div className="flex justify-center">
            <Image src={oce_infographic} alt="oce_infographic" width="760" height="737" />
          </div>
          <p className="mt-5 text-lg lg:text-xl">
            <span className="font-bold text-primary-600">Open Components</span>{' '}
            decentralized technologies comprised of open source components that enable
            reuse of functionality outside of original context and expansion of
            functionality by integration of other components
          </p>

          <p className="text-xl mt-10 font-bold my-2.5 text-text-600 lg:text-2xl">
            Join a global ecosystem of developers focused on collaborative innovation in
            Bible technology.
          </p>
          <p className="text-lg text-text-600 lg:text-xl">
            Let’s build our apps without reinventing the wheel…
          </p>
          <div className="hidden lg:inline">
            <Image
              src={oce_infographic_2}
              alt="oce_infographic_2"
              width="1275"
              height="414"
            />
          </div>
          <div className="inline lg:hidden">
            <Image
              src={oce_infographic_2_mobile}
              alt="oce_infographic_2"
              width="419"
              height="629"
            />
          </div>
          <p className="text-xl mt-3 font-bold text-text-600 lg:mt-16 lg:text-2xl">
            <span className="text-primary-600">Open Components</span> thrive at the
            intersection of three design criteria: Extensible, Portable, and Open source.
          </p>
          <div className="flex flex-col items-center mt-6 lg:flex-row">
            <Image
              src={oce_infographic_3}
              alt="oce_infographic_3"
              width="213"
              height="160"
              className=""
            />
            <p className="text-lg text-text-600 lg:w-4/5 lg:text-xl">
              <span className="font-bold text-primary-600">Extensible</span> architecture
              is designed to enable expansion of functionality by incorporating code
              developed by a third party, most commonly in the form of a plugin. In this
              regard, other developers are invited to bring their code and “play in the
              sandbox” provided by the base technology.
            </p>
          </div>
          <div className="flex flex-col items-center mt-6 lg:flex-row">
            <Image
              src={oce_infographic_4}
              alt="oce_infographic_4"
              width="213"
              height="160"
              className=""
            />
            <p className="text-lg text-text-600 lg:w-4/5 lg:text-xl">
              <span className="font-bold text-primary-600">Portable</span> architecture is
              designed to go in the other direction, by providing functionality that can
              be incorporated into other technologies, commonly in the form of libraries
              or simple apps. Developers are invited to “create their own sandbox” by
              incorporating the portable components into their own apps.
            </p>
          </div>
          <div className="flex flex-col items-center mt-6 lg:flex-row lg:items-start">
            <div className="mt-6 lg:mt-0">
              <Image
                src={oce_infographic_5}
                alt="oce_infographic_5"
                width="213"
                height="160"
              />
            </div>
            <p className="pt-3 text-lg text-text-600 lg:w-4/5 lg:text-xl">
              <span className="font-bold text-primary-600">Open source</span> technology
              consists of source code that is made available under an open license (like
              MIT), such that developers can repurpose, and, improve, redistribute, and
              otherwise reuse the technology without restriction.
            </p>
          </div>
          <p
            id="whitepaper"
            className="pt-10 font-bold text-center scroll-m-10 text-primary-600 text-2xl md:text-3xl lg:scroll-m-1 lg:my-20 lg:text-4xl xl:text-5xl"
          >
            OCE Whitepaper
          </p>
          <div className="flex justify-center mt-10 mb-7 lg:my-20">
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

          <p
            id="video"
            className="pt-3 mb-10 font-bold text-center scroll-m-16 text-primary-600 text-2xl md:text-3xl lg:scroll-m-8 lg:mb-20 lg:text-4xl xl:text-5xl"
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
          <p
            id="licensing"
            className="py-10 font-bold text-center scroll-m-9 text-primary-600 text-2xl md:text-3xl lg:my-20 lg:text-4xl xl:text-5xl"
          >
            Licensing
          </p>
          <p className="text-lg text-text-600 break-words lg:text-xl">
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
            <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
              <a target="_blank" className="text-primary-500 hover:underline">
                https://creativecommons.org/licenses/by-sa/4.0/
              </a>
            </Link>
            ) or the Creative Commons Attribution 4.0 International License (
            <Link href="https://creativecommons.org/licenses/by/4.0/">
              <a target="_blank" className="text-primary-500 hover:underline">
                https://creativecommons.org/licenses/by/4.0/
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
