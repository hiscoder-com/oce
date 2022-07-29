import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <div className="bg-black mt-6">
      <div className="footer container mx-auto px-2">
        <div>
          <Link href="/">
            <a className="items-center gap-5 pl-2">
              <Image src={Logo} alt="Open Components Ecosystem" width="34" height="47" />
              <p>Open Components</p>
            </a>
          </Link>
        </div>
        <div className="text-zinc-450">2022 © unfoldingWord</div>
        <div className="flex ">
          <Link href="/">
            <a className="btn-transparent">About</a>
          </Link>
          <Link href="/">
            <a className="btn-transparent">Explore</a>
          </Link>
          <Link href="/">
            <a className="btn-transparent">Get started</a>
          </Link>
          <Link href="/">
            <a className="btn-transparent">FAQ</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
