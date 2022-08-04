import Image from 'next/image'
import Link from 'next/link'

import editor_r from '../public/editor-reverse.svg'
import window from '../public/window.svg'
import search from '../public/search.svg'
import editor from '../public/editor.svg'
import search2 from '../public/search2.svg'
import editor2 from '../public/editor2.svg'

function GetStarted() {
  return (
    <div className="flex flex-col gap-14 my-16">
      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex self-start ml-60">
          <Image
            src={editor_r}
            alt="editor_rotate"
            width="76"
            height="76"
            className="rotate-180"
          />
        </div>
        <div className="flex flex-col text-center gap-5">
          <div className="text-6xl font-bold">Get started</div>
          <div className="mx-auto w-3/5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes, egestas
            turpis faucibus non turpis.
          </div>
        </div>
        <div className="flex self-end mr-60">
          <Image src={editor_r} alt="editor_reverse" width="76" height="76" />
        </div>
      </div>

      <div className="flex gap-10 py-14 px-5 pl-5 rounded-lg bg-primary-100">
        <div>
          <Image src={window} alt="window" width="200" height="200" />
        </div>
        <div className="text-2xl">
          <div className="mb-8 font-bold">
            Phase 1: Understanding the Open Components philosophy
          </div>
          <ul className="phase-card-ul">
            <li>
              To learn about{' '}
              <Link href="/about">
                <a className="underline-custom">Open Components</a>
              </Link>
            </li>
            <li>
              Check the{' '}
              <Link href="/about#whitepaper">
                <a className="underline-custom">whitepaper</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 py-14 px-5 pl-5 rounded-lg bg-primary-100">
        <div>
          <Image src={search2} alt="search2" width="200" height="200" />
        </div>
        <div className="text-2xl">
          <div className="mb-8 font-bold">Phase 2: Explore the ecosystem</div>
          <ul className="phase-card-ul">
            <li>
              To check out the{' '}
              <Link href="/components">
                <a className="underline-custom">Open Components</a>
              </Link>{' '}
              developed by the community
            </li>
            <li>
              To check out the{' '}
              <Link href="/apps">
                <a className="underline-custom">Bible applications</a>
              </Link>{' '}
              using open components
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 py-14 px-5 pl-5 rounded-lg bg-primary-100">
        <div>
          <Image src={editor2} alt="editor2" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="mb-8 font-bold">
            Phase 3: Learn the principles of iterative development
          </div>
          <ul className="phase-card-ul">
            <li>
              <Link href="/lean-expectations">
                <a className="underline-custom">
                  Lean Expectations — PoC, Prototype, MVP
                </a>
              </Link>{' '}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 py-14 px-5 pl-5 rounded-lg bg-primary-100">
        <div>
          <Image src={search} alt="search" width="200" height="200" />
        </div>
        <div className="text-2xl">
          <div className="mb-8 font-bold">
            Phase 4: Learn how to get started with an open component
          </div>
          <ul className="phase-card-ul">
            <li>
              <Link href="/react-components-library">
                <a className="underline-custom">Starting a React Component Library</a>
              </Link>
            </li>
            <li>
              Introduction to{' '}
              <Link href="https://react-styleguidist.js.org/">
                <a target="_blank" className="underline-custom">Styleguidist</a>
              </Link>
            </li>
            <li>
              Philosophy of{' '}
              <Link href="/headless-ui">
                <a className="underline-custom">Headless components</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 py-14 px-5 pl-5 rounded-lg bg-primary-100">
        <div>
          <Image src={editor} alt="editor" width="200" height="200" />
        </div>
        <div className="text-2xl">
          <div className="mb-8 font-bold">
            Phase 5: Contribute to an existing Open Component
          </div>
          <ul className="phase-card-ul">
            <li>Fork the repo of an existing component</li>
            <li>Create issues for changes planne</li>
            <li>Develop and peer review within community</li>
            <li>Join community sprint review to demo your work</li>
            <li>Publish work with appropriate tagging of components</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
