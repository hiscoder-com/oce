import Image from 'next/image'
import Link from 'next/link'

import discord_black from '../public/discord_black.svg'
import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <footer className="bg-primary-600 mt-6">
      <div className="container flex flex-col items-center justify-between gap-6 mx-auto text-lg font-bold py-6 text-white sm:flex-row">
        <div className="flex items-center justify-around gap-9 w-full sm:justify-start">
          <Link href="/">
            <a className="flex gap-5 pl-2">
              <Image src={Logo} alt="Open Components Ecosystem" width="34" height="36" />
            </a>
          </Link>

          <div className="w-44 h-11 rounded-lg text-white bg-primary-600">
            <Link href="https://discord.com/invite/auJb4H9ezx">
              <a
                target="_blank"
                className="flex justify-center items-center w-full h-full gap-2 text-base rounded-lg bg-primary-100 text-black hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23"
              >
                <Image src={discord_black} alt="discord_black" width="24" height="23" />
                <p>Join Discord</p>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/about">
              <a className="btn-transparent">About</a>
            </Link>
            <Link href="/components">
              <a className="btn-transparent">Explore</a>
            </Link>
            <Link href="/get-started">
              <a className="btn-transparent">Get started</a>
            </Link>
            <Link href="/faq">
              <a className="btn-transparent hidden">FAQ</a>
            </Link>
          </div>
        </div>

        <div className="text-text-200 mr-2 text-center text-sm whitespace-nowrap md:text-lg">
          {new Date().getFullYear()} © unfoldingWord
        </div>
      </div>
    </footer>
  )
}

export default Footer
