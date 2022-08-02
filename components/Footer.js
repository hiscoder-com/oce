import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import Logo from '../public/logo-white.svg'
import discord_black from '../public/discord_black.svg'

function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-primary-600 mt-6">
      <div className="footer container mx-auto px-2">
        <div className="flex items-center gap-9">
          <Link href="/">
            <a className="flex gap-5 pl-2">
              <Image src={Logo} alt="Open Components Ecosystem" width="34" height="36" />
            </a>
          </Link>

          <button
            onClick={() => {
              router.push(`https://discord.com/invite/auJb4H9ezx`)
            }}
            className="w-44 h-11 rounded-lg text-white bg-primary-600"
          >
            <div className="flex justify-center items-center w-full h-full gap-2 rounded-lg bg-primary-100 text-black hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23">
              <div className="flex justify-center">
                <Image
                  src={discord_black}
                  alt="discord_black"
                  width="24"
                  height="23"
                  className=""
                />
              </div>
              <div>Join Discord</div>
            </div>
          </button>

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
            <Link href="/">
              <a className="btn-transparent">FAQ</a>
            </Link>
          </div>
        </div>

        <div className="cursor-default text-text-200">2022 © unfoldingWord</div>
      </div>
    </footer>
  )
}

export default Footer
