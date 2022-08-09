import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import Chevron from '../public/chevron.svg'
import Logo from '../public/logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeNavbar = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className="header">
      <div className="flex items-center justify-between w-full md:w-fit md:gap-5">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="Open Components Ecosystem"
              width="30"
              height="43"
              className="md:w-8 md:h-12"
            />
          </a>
        </Link>
        <Link href="/">
          <a className="flex items-center gap-5">
            <p className="text-primary-600 text-2xl">Open Components</p>
          </a>
        </Link>
        <svg
          onClick={closeNavbar}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer md:hidden"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="#1D1D1D"
          />
        </svg>
      </div>
      <div className="text-text-600 hidden md:flex">
        <Link href="/about">
          <a className="btn-gray">About</a>
        </Link>
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer">Explore</a>
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
      <div
        className={`fixed px-6 top-0 left-0 right-0 bottom-0 pt-6 text-2xl bg-white text-text-600 z-50 sm:px-7 md:hidden ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <Link href="/">
              <a className="flex">
                <Image
                  src={Logo}
                  alt="Open Components Ecosystem"
                  width="30"
                  height="43"
                  className="md:w-8 md:h-12"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center gap-5">
                <p onClick={closeNavbar} className="text-primary-600 text-2xl">
                  Open Components
                </p>
              </a>
            </Link>
            <svg
              onClick={closeNavbar}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div onClick={closeNavbar} className="flex flex-col gap-5">
          <Link href="/about">
            <a className="btn-gray">About</a>
          </Link>
          <a
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="btn cursor-pointer"
          >
            Explore
          </a>
          <Link href="/apps">
            <a className="pl-8 whitespace-nowrap rounded-md text-text-500 hover:text-text-600 active:text-text-500">
              Apps
            </a>
          </Link>
          <Link href="/components">
            <a className="pl-8 whitespace-nowrap rounded-md text-text-500 hover:text-text-600 active:text-text-500">
              Components
            </a>
          </Link>
          <Link href="/get-started">
            <a className="btn-gray">Get started</a>
          </Link>
          <Link href="/faq">
            <a className="btn-gray hidden">FAQ</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
