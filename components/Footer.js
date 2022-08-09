import Image from 'next/image'
import Link from 'next/link'

import discord_black from '../public/discord_black.svg'
import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <footer className="bg-primary-600 mt-6">
      <div className="footer">
        <div className="flex flex-wrap items-center justify-center gap-9 w-full sm:justify-start md:flex-nowrap">
          <Link href="/">
            <a className="flex">
              <Image src={Logo} alt="Open Components Ecosystem" width="34" height="36" />
            </a>
          </Link>

          <div className="w-44 h-11 rounded-lg text-white bg-primary-600">
            <Link href="https://discord.com/invite/auJb4H9ezx">
              <a
                target="_blank"
                className="flex justify-center items-center w-full h-full gap-2 text-base rounded-lg bg-primary-100 text-primary-600 hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23"
              >
                <Image src={discord_black} alt="discord_black" width="24" height="23" />
                <p>Join Discord</p>
              </a>
            </Link>
          </div>
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
