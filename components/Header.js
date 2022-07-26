import Link from 'next/link'
import Image from 'next/image'

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
        <Link href="/">
          <a className="btn-yellow">Learning</a>
        </Link>
        <Link href="/">
          <a className="btn-yellow">Explore</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
