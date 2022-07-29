import Image from 'next/image'

import ComponentCard from '../components/ComponentCard'

import editor_black from '../public/editor_black.svg'
import ascent from '../public/ascent.svg'
import right from '../public/right.svg'
import right_black from '../public/right_black.svg'
import discord from '../public/discord.svg'
import introduction from '../public/introduction.svg'
import explore from '../public/explore.svg'
import discord_hero from '../public/discord_hero.svg'

export default function Home() {
  return (
    <div className="flex flex-col gap-24 my-16 cursor-default">
      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex flex-row self-end mr-96">
          <Image src={editor_black} alt="" width="90" height="90" />
        </div>
        <div className="mb-8 w-3/5 text-center text-6xl font-bold text-[#2F5C6E]">
          Open Components are Reusable Building Blocks for Bible Technology
        </div>
        <div className="text-xl mb-28 text-[#2F5C6E]">
          <span className="font-bold">Collaborative Innovation</span> in Bible Technology{' '}
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col pt-16 pb-8 px-9 gap-5 w-1/3 bg-blue-75 rounded-lg">
          <div>
            <Image src={ascent} alt="" width="303" height="185" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-10 items-center">
              <div className="text-2xl font-semibold text-[#2F5C6E] underline decoration-[#2F5C6E] decoration-2 underline-offset-4">
                Get started
              </div>
              <div>
                <Image src={right} alt="" width="20" height="13" />
              </div>
            </div>
            <div className="text-base text-justify text-[#4F4F4F]">
              Get started with the Open Component Ecosystem. The community conversation is
              ongoing on Discord, but here you can find out more about how to begin
              developing open components or getting your work added to the ecosystem.
            </div>
          </div>

          <div className="flex justify-center gap-2 items-center w-44 h-11 rounded-lg text-white bg-[#2F5C6E]">
            <div className="flex justify-center">
              <Image src={discord} alt="" width="24" height="23" />
            </div>
            <div>Join Discord</div>
          </div>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-yellow-350 rounded-lg">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={introduction} alt="" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-black underline decoration-2 underline-offset-4">
                  Introduction
                </div>
                <div>
                  <Image src={right_black} alt="" width="20" height="13" />
                </div>
              </div>
              <div className="text-base text-justify text-black">
                Find out what the Open Component Ecosystem (OCE) is all about. To learn
                about the concept behind the OCE, you can check out our{' '}
                <span className="font-bold underline decoration-2 underline-offset-4">
                  whitepaper
                </span>{' '}
                here.
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 items-center w-44 h-11 rounded-lg text-white bg-black">
            Learn more
          </div>
        </div>

        <div className="flex flex-col pt-16 pb-8 px-9 justify-between gap-5 w-1/3 bg-blue-75 rounded-lg">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={explore} alt="" width="303" height="185" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 items-center">
                <div className="text-2xl font-semibold text-[#2F5C6E] underline decoration-[#2F5C6E] decoration-2 underline-offset-4">
                  Explore
                </div>
                <div>
                  <Image src={right} alt="" width="20" height="13" />
                </div>
              </div>
              <div className="text-base text-justify text-[#2F5C6E]">
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
            <div className="w-56 h-56">
              <ComponentCard />
            </div>
            <div className="w-56 h-56">
              <ComponentCard />
            </div>
            <div className="w-56 h-56">
              <ComponentCard />
            </div>
            <div className="w-56 h-56">
              <ComponentCard />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-56 h-56">
              <div className="text-base underline decoration-[#2F5C6E] decoration-2 underline-offset-4 text-[#2F5C6E]">
                More
              </div>
              <div>
                <Image src={right} alt="" width="13" height="8" />
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
              <div className="text-base underline decoration-[#2F5C6E] decoration-2 underline-offset-4 text-[#2F5C6E]">
                More
              </div>
              <div>
                <Image src={right} alt="" width="13" height="8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-52">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-[#2F5C6E]">
            Join our community on{' '}
            <span className="underline decoration-4 underline-offset-4">Discord</span>
          </div>
          <div className="text-xl text-zinc-450">
            Use #scripture-open-components to showcase your work in the community
          </div>
        </div>
        <div>
          <Image src={discord_hero} alt="" width="234" height="227" />
        </div>
      </div>
    </div>
  )
}
