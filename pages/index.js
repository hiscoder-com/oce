import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import ComponentCard from '../components/ComponentCard'
import AppCard from '../components/AppCard'
import { apps, components } from '../utils/helper'

import editor_black from '../public/editor_black.svg'
import ascent from '../public/ascent.svg'
import right from '../public/right.svg'
import discord from '../public/discord.svg'
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

      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-9 pt-16 pb-8 px-9 justify-between w-1/3 bg-primary-100 rounded-lg hover:bg-secondary-400 group">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={ascent} alt="ascent" width="303" height="185" />
            </div>

            <div className="flex flex-col gap-5">
              <div
                onClick={() => {
                  router.push(`/`)
                }}
                className="flex flex-row gap-10 items-center text-primary-600 group-hover:text-black"
              >
                <Link href="/get-started">
                  <a className="text-2xl font-bold underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:decoration-black">
                    Get started
                  </a>
                </Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-2 cursor-pointer"
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
                </div>
              </div>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Get started with the Open Component Ecosystem. The community conversation
                is ongoing on Discord, but here you can find out more about how to begin
                developing open components or getting your work added to the ecosystem.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              router.push(`https://discord.com/invite/auJb4H9ezx`)
            }}
            className="w-44 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black"
          >
            <div className="flex justify-center items-center w-full h-full gap-2 rounded-lg hover:bg-primary-700 active:shadow-xl active:shadow-primary-700/23">
              <div className="flex justify-center">
                <Image src={discord} alt="discord" width="24" height="23" />
              </div>
              <div>Join Discord</div>
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-primary-100 group rounded-lg hover:bg-secondary-400">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={introduction} alt="introduction" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div
                onClick={() => {
                  router.push(`/`)
                }}
                className="flex flex-row gap-10 items-center text-primary-600 group-hover:text-black"
              >
                <Link href="/about">
                  <a className="text-2xl font-bold underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:decoration-black">
                    Introduction
                  </a>
                </Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-2 cursor-pointer"
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
                </div>
              </div>
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
            className="w-44 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black"
          >
            <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-primary-700 active:shadow-xl active:shadow-primary-700/23">
              Learn more
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-primary-100 rounded-lg hover:bg-secondary-400 group">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={explore} alt="explore" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div
                onClick={() => {
                  router.push(`/`)
                }}
                className="inline-flex gap-10 items-center text-primary-600 group-hover:text-black"
              >
                <Link href="/components">
                  <a className="text-2xl font-bold underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:decoration-black">
                    Explore
                  </a>
                </Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-2 cursor-pointer"
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
                </div>
              </div>
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
            <div className="my-1 md:my-2 xl:my-8 grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-2 2xl:grid-cols-5 2xl:gap-8">
              {components.map((el) => ComponentCard({ repo: el }))}
            </div>
            <div
              onClick={() => {
                router.push(`/`)
              }}
              className="flex justify-center items-center gap-2.5 w-56 h-56 font-bold cursor-pointer"
            >
              <div className="text-base underline decoration-primary-600 decoration-2 underline-offset-4 text-primary-600">
                More
              </div>
              <div>
                <Image src={right} alt="right arrow" width="13" height="8" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-base uppercase text-text-500">Applications</div>
          <div className="flex gap-8 justify-between">
            <div className="my-1 md:my-2 xl:my-8 grid grid-cols-1 gap-1 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-5">
              {apps?.slice(0, 2)?.map((el) => AppCard({ repo: el }))}
            </div>
            <div
              onClick={() => {
                router.push(`/`)
              }}
              className="flex justify-center items-center gap-2.5 w-56 h-56 font-bold cursor-pointer"
            >
              <div className="text-base underline decoration-primary-600 decoration-2 underline-offset-4 text-primary-600">
                More
              </div>
              <div>
                <Image src={right} alt="right arrow" width="13" height="8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-28">
        <div className="flex flex-col justify-center gap-5">
          <div
            onClick={() => {
              router.push(`/https://discord.com/invite/auJb4H9ezx`)
            }}
            className="flex gap-11 text-primary-600"
          >
            <div className="text-5xl font-bold">
              Join our community on{' '}
              <span className="underline decoration-4 underline-offset-4 cursor-pointer">
                Discord
              </span>
            </div>
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
