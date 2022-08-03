import Image from 'next/image'
import Link from 'next/link'
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
      </div>
    </div>
  )
}
