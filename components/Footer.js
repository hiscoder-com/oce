import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/logo-white.svg'

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link href="/">
          <a className="flex items-center gap-5 pl-2">
            <Image src={Logo} alt="" width="34" height="47" />
            <p className="uppercase">Open Components</p>
          </a>
        </Link>
      </div>
      <div className="text-zinc-450">2022 © unfoldingWord</div>
      <div className="flex">
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
  )
}

export default Footer
