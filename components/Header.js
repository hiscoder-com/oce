import Link from 'next/link'
import Image from 'next/image'

import Chevron from '../public/chevron.svg'
import Logo from '../public/logo.svg'

function Header() {
  return (
    <div className="header container mx-auto px-2">
      <div>
        <Link href="/">
          <a className="flex items-center gap-5">
            <Image src={Logo} alt="logo" width="34" height="47" />
            <p className="uppercase">Open Components</p>
          </a>
        </Link>
      </div>
      <div className="flex">
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer hover:text-gray-600">About</a>
            <div className="dropdown">
              <Link href="/">
                <a className="btn-gray">White Paper</a>
              </Link>
              <Link href="/">
                <a className="btn-gray">Infographic</a>
              </Link>
            </div>
          </div>
          <Image
            src={Chevron}
            alt="chevron"
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer hover:text-gray-600">Explore</a>
            <div className="dropdown">
              <Link href="/">
                <a className="btn-gray">Apps</a>
              </Link>
              <Link href="/">
                <a className="btn-gray">Components</a>
              </Link>
            </div>
          </div>
          <Image
            src={Chevron}
            alt="chevron"
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
        <Link href="/">
          <a className="btn-gray">Get started</a>
        </Link>
        <Link href="/">
          <a className="btn-gray">FAQ</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
