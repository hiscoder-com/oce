import Image from 'next/image'

import editor_r from '../public/editor-reverse.svg'
import window from '../public/window.svg'
import search from '../public/search.svg'
import editor from '../public/editor.svg'
import search2 from '../public/search2.svg'
import editor2 from '../public/editor2.svg'

function getStarted() {
  return (
    <div className="flex flex-col gap-14 my-16">
      <div className="flex flex-col items-center border-b-2">
        <div className="flex self-start ml-60">
          <Image
            src={editor_r}
            alt="logo"
            width="76"
            height="76"
            className="rotate-180 "
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
          <Image src={editor_r} alt="logo" width="76" height="76" />
        </div>
      </div>

      <div className="phase-card">
        <div>
          <Image src={window} alt="logo" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="phase-card-title">
            Phase 1: Understanding the Open Components philosophy
          </div>
          <ul className="phase-card-ul">
            <li>
              To learn about <span className="underline-custom">Open Components</span>
            </li>
            <li>
              Check the <span className="underline-custom">whitepaper</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="phase-card">
        <div>
          <Image src={search2} alt="logo" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="phase-card-title">Phase 2: Explore the ecosystem</div>
          <ul className="phase-card-ul">
            <li>
              To check out the <span className="underline-custom">Open Components</span>{' '}
              developed by the community
            </li>
            <li>
              To check out the{' '}
              <span className="underline-custom">Bible applications</span> using open
              components
            </li>
          </ul>
        </div>
      </div>

      <div className="phase-card">
        <div>
          <Image src={editor2} alt="logo" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="phase-card-title">
            Phase 3: Learn the principles of iterative development
          </div>
          <ul className="phase-card-ul">
            <li>
              <span className="underline-custom">
                Lean Expectations — PoC, Prototype, MVP
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="phase-card">
        <div>
          <Image src={search} alt="logo" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="phase-card-title">
            Phase 4: Learn how to get started with an open component
          </div>
          <ul className="phase-card-ul">
            <li>
              <span className="underline-custom">Starting a React Component Library</span>
            </li>
            <li>
              Introduction to <span className="underline-custom">Styleguidist</span>
            </li>
            <li>
              Philosophy of <span className="underline-custom">Headless components</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="phase-card">
        <div>
          <Image src={editor} alt="logo" width="200" height="200" />
        </div>
        <div className="flex flex-col gap-8 text-2xl">
          <div className="phase-card-title">
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

export default getStarted
