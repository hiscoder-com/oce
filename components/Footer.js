import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <footer className="bg-black mt-6">
      <div className="footer container mx-auto px-2">
        <Link href="/">
          <a className="flex items-center gap-5 pl-2">
            <Image src={Logo} alt="Open Components Ecosystem" width="34" height="47" />
            Open Components
          </a>
        </Link>
        <div className="text-text-200">2022 © unfoldingWord</div>
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
    </footer>
  )
}

export default Footer
