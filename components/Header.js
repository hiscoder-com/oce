import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Close from '../public/close.svg'
import Chevron from '../public/chevron.svg'
import Logo from '../public/logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const condition = `flex flex-col cursor-pointer text-text-600 md:hidden absolute left-0 top-0 right-0 bottom-0 ${
    isOpen ? '' : 'hidden'
  }`

  return (
    <header className="header container mx-auto px-6 md:px-2">
      <div className="flex items-center justify-between w-full md:w-fit md:gap-5">
        <Image
          src={Logo}
          alt="Open Components Ecosystem"
          width="30"
          height="43"
          className="md:w-8 md:h-12"
        />
        <Link href="/">
          <a className="flex items-center gap-5">
            <p className="text-primary-600 text-xl md:text-2xl">Open Components</p>
          </a>
        </Link>
        <svg
          onClick={() => setIsOpen((prev) => !prev)}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="#1D1D1D"
          />
        </svg>
      </div>
      <div className="cursor-pointer text-text-600 hidden md:flex">
        <Link href="/about">
          <a className="btn-gray">About</a>
        </Link>
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a>Explore</a>
            <div className="dropdown">
              <Link href="/apps">
                <a className="btn-gray">Apps</a>
              </Link>
              <Link href="/components">
                <a className="btn-gray">Components</a>
              </Link>
            </div>
          </div>
          <Image
            src={Chevron}
            alt="show more"
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
        <Link href="/get-started">
          <a className="btn-gray">Get started</a>
        </Link>
        <Link href="/faq" className="">
          <a className="btn-gray hidden">FAQ</a>
        </Link>
      </div>

      {/* mobile nav */}
      <div className={condition}>
        <div className="fixed top-0 left-0 w-full h-full text-lg bg-white">
          <Link href="/about">
            <a className="btn-gray">About</a>
          </Link>
          <div className="flex gap-2 btn group">
            <div className="relative">
              <a>Explore</a>
              <div className="dropdown">
                <Link href="/apps">
                  <a className="btn-gray">Apps</a>
                </Link>
                <Link href="/components">
                  <a className="btn-gray">Components</a>
                </Link>
              </div>
            </div>
            <Image
              src={Chevron}
              alt="show more"
              width="6"
              height="4"
              className="group-hover:rotate-180"
            />
          </div>
          <Link href="/get-started">
            <a className="btn-gray">Get started</a>
          </Link>
          <Link href="/faq" className="">
            <a className="btn-gray hidden">FAQ</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
