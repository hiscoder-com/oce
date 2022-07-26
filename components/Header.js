import Link from 'next/link'
import Image from 'next/image'

import Chevron from '../public/chevron.svg'
import Logo from '../public/logo.svg'

function Header() {
  return (
    <div className="header">
      <div>
        <Link href="/">
          <a className="flex gap-2.5 pl-2">
            <Image src={Logo} alt="" width="22" height="30" />
            <p className="text-2xl">Open Components</p>
          </a>
        </Link>
      </div>
      <div className="flex">
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer">Get started</a>
            <div className="dropdown">
              <Link href="/">
                <a className="btn-gray">Tutorials</a>
              </Link>
            </div>
          </div>
          <Image
            src={Chevron}
            alt=""
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>

        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer">Learning</a>
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
            alt=""
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="cursor-pointer">Explore</a>
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
            alt=""
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
