import Image from 'next/image'
import Link from 'next/link'

import Gist from 'react-gist'

import HeaderStaticPage from '../components/HeaderStaticPage'

export default function ReactCompLibrary() {
  const HeaderConfig = {
    title: 'Starting a React Component Library at unfoldingWord',
    name: 'Manny Colon',
    date: 'Jul 31, 2020·6 min read',
  }
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <HeaderStaticPage config={HeaderConfig} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40">
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            className=""
            src={'/react-comp-library/pic1.jpg'}
            alt=""
          />
          <figcaption className=" text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@iurte?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Iker Urteaga</u>
              </a>
            </Link>{' '}
            on{' '}
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Unsplash</u>
              </a>
            </Link>
          </figcaption>
        </figure>
        <br />
        <h1 className="font-bold text-2xl">unfoldingWord React Component Libraries</h1>
        <br />
        <h2 className="font-bold text-xl">What?</h2>
        <blockquote className="border-black border-l-2 pl-3">
          <i>
            As{' '}
            <Link href="https://medium.com/@klappy">
              <a target="_blank">
                <span className="inline text-emerald-700">Christopher Klapp</span>
              </a>
            </Link>{' '}
            describes in{' '}
            <Link href="https://forum.door43.org/t/component-libraries/396">
              <a target="_blank">
                <u>unfoldingWord Component Libraries</u>
              </a>
            </Link>
            , A Component Library is a collection of functionally related Components.
          </i>
        </blockquote>
        <br />
        <p>
          A React Component Library (RCL) is a great way to reuse code, speed up
          development and maintain a consistent UI/UX across different features and
          applications.
        </p>
        <br />
        <h2 className="font-bold text-xl">Why?</h2>
        <br />
        <p>
          You can read more about the reason behind unfoldingWord’s RCL approach here.
          However, in a nutshell, we use RCLs because our software development process
          gains code reusability, abstraction, collaboration, and versatility.
        </p>
        <br />
        <h2 className="font-bold text-xl">How?</h2>
        <br />
        <p>Next …</p>
        <br />
        <h1 className="font-bold text-2xl"> Getting started</h1>
        <p>Create a project directory and initialize the NPM package:</p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>
            mkdir sample-react-component-library
            <br />
            cd sample-react-component-library
            <br />
            yarn init -y
          </p>
          <p className="my-4">or</p>
          <p>npm init -y</p>
        </pre>
        <br />
        <h2 className="font-bold text-xl">Adding core dependencies</h2>
        <br />
        <p>Let’s run the following command to install the core dependencies:</p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>yarn add --dev react react-dom prop-types @material-ui/core</p>
        </pre>
        <br />
        <blockquote className="border-black border-l-2 pl-3">
          <i>
            As a side note, I use <code className="bg-gray-100">yarn</code> on this
            project but feel free to use <code className="bg-gray-100">npm</code> if you
            prefer. However, if you want to use yarn like me and don’t have it installed
            on your machine, feel free to check out the following link on how to install
            yarn.
          </i>
        </blockquote>
        <br />
        <Link href="https://yarnpkg.com/getting-started/install">
          <a target="_blank">
            <div className="w-2/3 p-5 m-auto border-gray-100 border">
              <h3 className="text-base font-bold">2 - Installation</h3>
              <h4 className="text-sm my-2 text-gray-400">
                We’ve been compiling helpful advice when porting over from Yarn 1 on the
                following Migration Guide. Give it a look and…
              </h4>
              <p className="text-xs text-gray-400">yarnpkg.com</p>
            </div>
          </a>
        </Link>
        <br />
        <p>
          Make the core dependencies <code className="bg-gray-100">peerDependencies</code>{' '}
          so that <code className="bg-gray-100">npm/yarn</code> knows about the
          <Link href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json">
            <a target="_blank">
              <u>compatibility of our dependencies</u>
            </a>
          </Link>
          . This will help prevent them from being included in the final bundled published
          to NPM. Bundling <code className="bg-gray-100">React</code> into your library is
          a bad idea, you certainly don’t want a bloated RCL (React Component Library).
          The more lightweight you can keep it the better.
        </p>
        <br />
        <p>
          Now, manually add <code className="bg-gray-100">peerDependenciesusing</code> the{' '}
          <Link href="https://semver.org/">
            <a target="_blank">
              <u>major versions</u>
            </a>
          </Link>{' '}
          of the libraries.
        </p>
        <br />
        <Gist id="ff86b4d2a7cc07e03d7acd5754d97edd" />
        <div className="description-gist">
          <p>package.json</p>
        </div>
        <br />
        <h1 className="font-bold text-2xl">
          Setting up live development with Styleguidist
        </h1>
        <br />
        <p>
          We use Styleguidist as a component development environment with live reloading
          and a documentation playground to showcase our components’ APIs.
        </p>
        <br />
        <blockquote className="border-black border-l-2 pl-3">
          <i>
            Styleguidist is an isolated React component development environment with a
            living style guide. It allows developers to focus on one component at a time,
            see all its variants and work faster with hot reload.
          </i>
        </blockquote>
        <br />
        <p>Check out Styleguidis’s website to learn more:</p>
        <br />
        <Link href="https://react-styleguidist.js.org/">
          <a target="_blank">
            <div className="flex w-2/3  m-auto border-gray-100 border">
              <div className="py-5 pl-5">
                <h3 className="text-base font-bold">
                  React Styleguidist: Isolated React component development environment
                  with a living style guide
                </h3>
                <h4 className="text-sm md:my-1 lg:my-2 2xl:my-4 text-gray-400">
                  Isolated React component development environment with a living style
                  guide
                </h4>
                <p className="text-xs md:pt-1 lg:pt-2 2xl:pt-4 text-gray-400">
                  Isolated React component development environment with a living style
                  guidereact-styleguidist.js.org
                </p>
              </div>
              <div className="w-1/3 h-auto">
                <Image
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src={'/react-comp-library/pic2.jpg'}
                  alt=""
                />
              </div>
            </div>
          </a>
        </Link>
        <br />
        <h2 className="font-bold text-xl">Install Styleguidist and Webpack:</h2>
        <br />
        <p>
          For more information on how to set up{' '}
          <Link href="https://react-styleguidist.js.org/docs/getting-started/">
            <a target="_blank">
              <u>Styleguidist see the Styleguidist Getting started section</u>
            </a>
          </Link>
          .
        </p>
        <br />
        <pre className="p-5 bg-gray-100">yarn add --dev react-styleguidist webpack</pre>

        <br />
        <h2 className="font-bold text-xl">Setup Babel</h2>
        <br />
        <p>
          We need to set up{' '}
          <Link href="https://babeljs.io/">
            <a target="_blank">
              <u>Babel</u>
            </a>
          </Link>{' '}
          in order to transpile our code and make it work well with Styleguidist.
        </p>
        <br />
        <p>The entire process to set this up involves:</p>
        <br />
        <p className="ml-8">1. Running these commands to install the packages:</p>
        <br />
        <pre className="p-5 bg-gray-100">
          yarn add --dev babel-loader @babel/core @babel/cli @babel/preset-env
          @babel/preset-react
        </pre>
        <br />
        <p className="ml-8">
          2. Creating a config file named babel.config.json in the root of your project
          with this content:
        </p>
        <Gist id="4076a6078ed94b1655e5952e283b85c2" />
        <div className="description-gist">
          <p>babel.config.json</p>
        </div>
        <br />
        <h2 className="font-bold text-xl">Connect Styleguidist with Babel</h2>
        <br />
        <p>
          Now set up Styleguidist’s internal <code className="bg-gray-100">webpack</code>{' '}
          instance to use our <code className="bg-gray-100">Babel</code> config to load
          the components properly. Thus, create{' '}
          <code className="bg-gray-100">styleguide.config.js</code> with this content:
        </p>
        <Gist id="2743a2f89a29e188af949366c7ffbd9b" />
        <div className="description-gist">
          <p>styleguide.config.js</p>
        </div>
        <br />
        <p>We’re ready to launch the Development environment!</p>
        <br />
        <p>
          Add the following command{' '}
          <code className="bg-gray-100">”start”: “styleguidist server”</code> to your{' '}
          <code className="bg-gray-100">package.json</code> and run{' '}
          <code className="bg-gray-100">yarn start</code>.
        </p>
        <br />
        <Gist id="41808260858bad3d3d6849bfa72984e2" />
        <div className="description-gist">
          <p>package.json</p>
        </div>
        <br />
        <p>
          Open <code className="bg-gray-100">http://localhost:6060</code> and you should
          see the following:
        </p>
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="692"
            height="232"
            className=""
            src={'/react-comp-library/pic3.png'}
            alt=""
          />
        </div>
        <br />
        <p>Of course, we have not created any components yet, let’s do that now…</p>
        <br />
        <h1 className="font-bold text-2xl">Creating Components</h1>
        <br />
        <p>
          We have set up the React Component Library development environment, now let’s
          create some components.
        </p>
        <br />
        <p>
          All components will be added to the{' '}
          <code className="bg-gray-100">src/components</code> directory.
        </p>
        <br />
        <p>The component file structure will be as follows:</p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>src/</p>
          <p>{'  '}└── components/</p>
          <p> {'     '}└── Button</p>
          <p>{'          '}├── index.js</p>
          <p>{'          '}└── Button.js</p>
        </pre>
        <br />
        <p>Let’s start with a basic button.</p>
        <br />
        <p>
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/Button/index.js</code>:
        </p>
        <br />
        <Gist id="b76172911e58b33ca7d442fd43ad0433" />
        <div className="description-gist">
          <p>index.js</p>
        </div>
        <br />
        <p>
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/Button/Button.js</code>:
        </p>
        <br />
        <Gist id="2eaaf6590346a18008040f79eb77c159" />
        <div className="description-gist">
          <p>Button.js</p>
        </div>
      </div>
    </div>
  )
}
