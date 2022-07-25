import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Logo from '../public/logo.svg'
import Chevron from '../public/chevron.svg'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="flex items-center justify-between py-7 cursor-default">
      <div className="flex gap-2.5">
        <Image src={Logo} alt="" width="22" height="30" className="" />
        <p className="text-2xl">Open Components</p>
      </div>
      <div className="flex text-lg">
        <Link href="/">
          <a className="px-3 py-2 rounded-md hover:bg-[#FDD835] active:bg-yellow-400">
            About
          </a>
        </Link>
        <div className="flex gap-2 px-3 py-2 rounded-md active:bg-yellow-400 hover:bg-[#FDD835]">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative">
            <a className="">Projects</a>
            <div
              className={`absolute bg-slate-100 mt-2 p-3 flex flex-col shadow-md rounded-md ${
                isDropdownOpen ? '' : 'hidden'
              }`}
            >
              <Link href="/">
                <a className="px-3 py-2 rounded-md hover:bg-[#FDD835] active:bg-yellow-400">
                  Apps
                </a>
              </Link>
              <Link href="/">
                <a className="px-3 py-2 rounded-md hover:bg-[#FDD835] active:bg-yellow-400">
                  Components
                </a>
              </Link>
            </div>
          </button>
          <Image
            src={Chevron}
            alt=""
            width="6"
            height="4"
            className={`${isDropdownOpen && 'rotate-180'}`}
          />
        </div>
        <Link href="/">
          <a className="px-3 py-2 rounded-md hover:bg-[#FDD835] active:bg-yellow-400">
            Get Involved
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
