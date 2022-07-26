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
        <Link href="/">
          <a className="btn-yellow">Get started</a>
        </Link>
        <div className="flex gap-2 btn-yellow group">
          <div className="relative">
            <a className="cursor-pointer">Learning</a>
            <div className="dropdown">
              <Link href="/">
                <a className="btn-yellow">Apps</a>
              </Link>
              <Link href="/">
                <a className="btn-yellow">Components</a>
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
        <Link href="/">
          <a className="btn-yellow">Get Involved</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
