import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Chevron from '../public/chevron.svg'
import Logo from '../public/logo.svg'

function Header() {
  const router = useRouter()

  return (
    <header className="header container mx-auto px-2">
      <div>
        <Link href="/">
          <a className="flex items-center gap-5">
            <Image src={Logo} alt="Open Components Ecosystem" width="34" height="47" />
            <p className="text-primary-600 text-2xl">Open Components</p>
          </a>
        </Link>
      </div>
      <div className="flex cursor-pointer btn-gray text-text-600">
        <div className="flex gap-2 btn group">
          <div
            onClick={() => {
              router.push(`/about`)
            }}
            className="relative"
          >
            <a>About</a>
          </div>
        </div>
        <div className="flex gap-2 btn group">
          <div className="relative">
            <a className="btn-gray">Explore</a>
            <div className="dropdown">
              <Link href="/apps">
                <a className="btn-gray">Apps</a>
              </Link>
              <Link href="/components">
                <a className="btn-gray">Components</a>
              </Link>
            </div>
          </div>
          <Image
            src={Chevron}
            alt="show more"
            width="6"
            height="4"
            className="group-hover:rotate-180"
          />
        </div>
        <Link href="/get-started">
          <a className="btn-gray">Get started</a>
        </Link>
        <Link href="/faq">
          <a className="btn-gray">FAQ</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
