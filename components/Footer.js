import Link from 'next/link'
import Image from 'next/image'

import Chevron from '../public/chevron-white.svg'
import Logo from '../public/logo-grey.svg'

function Footer() {
  return (
    <div className="footer">
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
        <div className="flex btn-transparent group">
          <div className="relative">
            <a className="cursor-pointer btn-transparent">Projects</a>
            <div className="dropdown -top-32">
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
          <a className="btn-transparent">Get Involved</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
