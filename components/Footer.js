import Image from 'next/image'
import Link from 'next/link'

import discord_black from '../public/discord_black.svg'
import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <footer className="bg-primary-600 mt-6">
      <div className="container flex flex-col items-center justify-between gap-6 mx-auto text-lg font-bold py-6 text-white md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-9 w-full sm:justify-start md:flex-nowrap">
          <Link href="/">
            <a className="flex">
              <Image src={Logo} alt="Open Components Ecosystem" width="34" height="36" />
            </a>
          </Link>

          <Link href="https://discord.com/invite/auJb4H9ezx">
            <a
              target="_blank"
              className="inline-flex whitespace-nowrap py-2.5 px-6 gap-2 text-base rounded-lg bg-primary-100 text-primary-600 hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23 md:px-4 md:gap-1 lg:px-6 lg:gap-2"
            >
              <Image src={discord_black} alt="discord_black" width="24" height="23" />
              Join Discord
            </a>
          </Link>
          <div>
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
