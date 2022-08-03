import Head from 'next/head'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import ComponentCard from '../components/ComponentCard'
import AppCard from '../components/AppCard'
import { apps, components } from '../utils/helper'

import editor_black from '../public/editor_black.svg'
import ascent from '../public/ascent.svg'
import introduction from '../public/introduction.svg'
import explore from '../public/explore.svg'
import discord_hero from '../public/discord_hero.svg'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-24 my-16">
      <Head>
        <title>Open Components Ecosystem</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex flex-row self-end mr-96">
          <Image src={editor_black} alt="editor_black" width="90" height="90" />
        </div>
        <div className="mb-8 w-3/5 text-center text-6xl font-bold text-primary-600">
          Open Components are Reusable Building Blocks for Bible Technology
        </div>
        <div className="text-xl mb-28 text-primary-600">
          <span className="font-bold">Collaborative Innovation</span> in Bible Technology
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-20 pt-16 pb-8 px-9 justify-between bg-primary-100 rounded-lg hover:bg-secondary-400 group lg:w-1/3">
          <div className="flex flex-col gap-20">
            <div>
              <Image src={ascent} alt="ascent" width="303" height="185" />
            </div>

            <div className="flex flex-col gap-5">
              <Link href="/get-started">
                <a className="flex gap-10 items-center text-2xl font-bold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 max-w-max group-hover:decoration-black group-hover:text-black">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Get started with the Open Component Ecosystem. The community conversation
                is ongoing on Discord, but here you can find out more about how to begin
                developing open components or getting your work added to the ecosystem.
              </div>
            </div>
          </div>
          <div className="w-44 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black">
            <Link href="https://discord.com/invite/auJb4H9ezx">
              <a
                target="_blank"
                className="flex justify-center items-center w-44 h-11 gap-2 rounded-lg hover:bg-primary-700 active:shadow-xl active:shadow-primary-700/23"
              >
                <div className="flex justify-center text-white">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Discord</title>
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </div>
                <div>Join Discord</div>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-20 bg-primary-100 group rounded-lg hover:bg-secondary-400 lg:w-1/3">
          <div className="flex flex-col gap-20">
            <div>
              <Image src={introduction} alt="introduction" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <Link href="/about">
                <a className="flex gap-10 items-center max-w-max text-2xl font-bold underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Introduction
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Find out what the Open Component Ecosystem (OCE) is all about. To learn
                about the concept behind the OCE, you can check out our{' '}
                <Link href="/about">
                  <a className="font-bold underline decoration-2 underline-offset-4">
                    whitepaper
                  </a>
                </Link>{' '}
                here.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              router.push(`/about`)
            }}
            className="w-36 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black"
          >
            <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-primary-700 active:shadow-xl active:shadow-primary-700/23">
              Learn more
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-20 bg-primary-100 rounded-lg hover:bg-secondary-400 group lg:w-1/3">
          <div className="flex flex-col gap-20">
            <div>
              <Image src={explore} alt="explore" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <Link href="/components">
                <a className="flex items-center gap-10 max-w-max text-2xl font-bold text-primary-600 underline decoration-2 underline-offset-4 decoration-primary-600 group-hover:text-black group-hover:decoration-black">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Discover the various components that are already available in the
                ecosystem and the related apps using them.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-base uppercase text-text-500">Components</div>
          <div className="flex gap-8">
            <div className="my-1 md:my-2 xl:my-8 grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-2 2xl:w-9/12 2xl:gap-8">
              {components.map((el) => ComponentCard({ repo: el }))}
            </div>
            <Link href="/">
              <a className="flex items-center gap-2.5 mx-auto font-bold text-base underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-4">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-base uppercase text-text-500">Applications</div>
          <div className="flex gap-8 justify-between">
            <div className="my-1 md:my-2 xl:my-8 grid grid-cols-1 gap-1 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-3 xl:w-9/12 xl:gap-5">
              {apps?.slice(0, 2)?.map((el) => AppCard({ repo: el }))}
            </div>
            <Link href="/">
              <a className="flex items-center gap-2.5 mx-auto font-bold text-base text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-5">
          <div className="text-primary-600">
            <Link href="https://discord.com/invite/auJb4H9ezx">
              <a target="_blank" className="flex gap-11 text-5xl font-bold">
                <p>
                  Join our community on{' '}
                  <span className="underline decoration-4 underline-offset-4 cursor-pointer">
                    Discord
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-11 mt-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div>
            <div className="w-2/3 text-xl text-text-500">
              Use #scripture-open-components to showcase your work in the community
            </div>
          </div>
        </div>
        <div>
          <Image src={discord_hero} alt="discord_hero" width="234" height="227" />
        </div>
      </div>
    </div>
  )
}
