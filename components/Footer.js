import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <div className="bg-black mt-6">
      <div className="footer container mx-auto px-2">
        <div>
          <Link href="/">
            <a className="flex gap-2.5 pl-2">
              <Image src={Logo} alt="" width="22" height="30" />
              <p className="text-2xl">Open Components</p>
            </a>
          </Link>
        </div>
        <div className="">2022 © unfoldingWord</div>
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
