import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import editor_black from '../public/editor_black.svg'
import ascent from '../public/ascent.svg'
import right from '../public/right.svg'
import discord from '../public/discord.svg'
import introduction from '../public/introduction.svg'
import explore from '../public/explore.svg'
import discord_hero from '../public/discord_hero.svg'
import discord_arrow from '../public/discord_arrow.svg'

export default function Home() {
  return (
    <div className="flex flex-col gap-24 my-16 cursor-default">
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
          <span className="font-bold">Collaborative Innovation</span> in Bible Technology{' '}
        </div>
      </div>

      <div className="flex flex-row gap-5 h-[617px]">
        <div className="flex flex-col pt-16 pb-8 px-9 justify-between w-1/3 bg-blue-75 rounded-lg hover:bg-yellow-350 group">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={ascent} alt="ascent" width="303" height="185" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Get started
                </div>
                <div>
                  <Image src={right} alt="right arrow" width="20" height="13" />
                </div>
              </div>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Get started with the Open Component Ecosystem. The community conversation
                is ongoing on Discord, but here you can find out more about how to begin
                developing open components or getting your work added to the ecosystem.
              </div>
            </div>
          </div>

          <button className="w-44 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black">
            <div className="flex justify-center items-center gap-2 w-full h-full rounded-lg hover:bg-primary-600 active:bg-primary-700">
              <div className="flex justify-center">
                <Image
                  src={discord}
                  alt="discord"
                  width="24"
                  height="23"
                  className="group-hover:fill-black"
                />
              </div>
              <div>Join Discord</div>
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-blue-75 group rounded-lg hover:bg-yellow-350">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={introduction} alt="introduction" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Introduction
                </div>
                <div>
                  <Image
                    src={right}
                    alt="right arrow"
                    width="20"
                    height="13"
                    className="group-hover:fill-black"
                  />
                </div>
              </div>
              <div className="text-base text-justify text-text-600 group-hover:text-black">
                Find out what the Open Component Ecosystem (OCE) is all about. To learn
                about the concept behind the OCE, you can check out our{' '}
                <span className="font-bold underline decoration-2 underline-offset-4">
                  whitepaper
                </span>{' '}
                here.
              </div>
            </div>
          </div>

          <button className="w-44 h-11 rounded-lg text-white bg-primary-600 group-hover:bg-black">
            <div className="flex justify-center items-center w-full h-full rounded-lg hover:bg-primary-600 active:bg-primary-700">
              Learn more
            </div>
          </button>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-blue-75 rounded-lg hover:bg-yellow-350 group">
          <div className="flex flex-col gap-14">
            <div>
              <Image src={explore} alt="explore" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 group-hover:text-black group-hover:decoration-black">
                  Explore
                </div>
                <div>
                  <Image
                    src={right}
                    alt="right arrow"
                    width="20"
                    height="13"
                    className="group-hover:fill-black"
                  />
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
          <div className="text-base font-semibold uppercase text-zinc-450">
            Components
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center items-center gap-2.5 w-56 h-56">
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
          <div className="text-base font-semibold uppercase text-zinc-450">
            Applications
          </div>
          <div className="flex gap-8">
            <div>tcCreate</div>
            <div>Autographa</div>
            <div className="flex gap-2.5">
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
          <div className="flex gap-11">
            <div className="text-5xl font-bold text-primary-600">
              Join our community on{' '}
              <Link href="https://discord.com/invite/auJb4H9ezx">
                <a className="underline decoration-4 underline-offset-4">Discord</a>
              </Link>
            </div>
            <Image src={discord_arrow} alt="discord_arrow" width="44" height="29" />
          </div>

          <div>
            <div className="w-2/3 text-xl text-zinc-450">
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
