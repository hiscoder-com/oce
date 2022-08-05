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
          <figcaption className="text-gray-400">
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
        <h1 className="font-bold text-4xl leading-10">
          unfoldingWord React Component Libraries
        </h1>
        <br />
        <h2 className="font-bold text-3xl leading-10">What?</h2>
        <br />
        <blockquote className="border-black border-l-2 pl-3 text-xl leading-8">
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
        <p className="article">
          A React Component Library (RCL) is a great way to reuse code, speed up
          development and maintain a consistent UI/UX across different features and
          applications.
        </p>
        <br />
        <h2 className="font-bold text-3xl leading-10">Why?</h2>
        <br />
        <p className="article">
          You can read more about the reason behind unfoldingWord’s RCL approach here.
          However, in a nutshell, we use RCLs because our software development process
          gains code reusability, abstraction, collaboration, and versatility.
        </p>
        <br />
        <h2 className="font-bold text-3xl leading-10">How?</h2>
        <br />
        <p className="article">Next …</p>
        <br />
        <h1 className="font-bold text-4xl leading-10"> Getting started</h1>
        <br />
        <p className="article">
          Create a project directory and initialize the NPM package:
        </p>
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
        <h2 className="font-bold text-3xl leading-10">Adding core dependencies</h2>
        <br />
        <p className="article">
          Let’s run the following command to install the core dependencies:
        </p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>yarn add --dev react react-dom prop-types @material-ui/core</p>
        </pre>
        <br />
        <blockquote className="border-black border-l-2 pl-3 text-xl leading-8">
          <i className="article">
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
        <p className="article">
          Make the core dependencies <code className="bg-gray-100">peerDependencies</code>{' '}
          so that <code className="bg-gray-100">npm/yarn</code> knows about the{' '}
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
        <p className="article">
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
        <h1 className="font-bold text-4xl leading-10">
          Setting up live development with Styleguidist
        </h1>
        <br />
        <p className="article">
          We use Styleguidist as a component development environment with live reloading
          and a documentation playground to showcase our components’ APIs.
        </p>
        <br />
        <blockquote className="border-black border-l-2 pl-3 text-xl leading-8">
          <i>
            Styleguidist is an isolated React component development environment with a
            living style guide. It allows developers to focus on one component at a time,
            see all its variants and work faster with hot reload.
          </i>
        </blockquote>
        <br />
        <p className="article">Check out Styleguidis’s website to learn more:</p>
        <br />
        <Link href="https://react-styleguidist.js.org/">
          <a target="_blank">
            <div className="flex w-2/3 m-auto border-gray-100 border">
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
        <h2 className="font-bold text-3xl leading-10">
          Install Styleguidist and Webpack:
        </h2>
        <br />
        <p className="article">
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
        <h2 className="font-bold text-3xl leading-10">Setup Babel</h2>
        <br />
        <p className="article">
          We need to set up{' '}
          <Link href="https://babeljs.io/">
            <a target="_blank">
              <u>Babel</u>
            </a>
          </Link>{' '}
          in order to transpile our code and make it work well with Styleguidist.
        </p>
        <br />
        <p className="article">The entire process to set this up involves:</p>
        <br />
        <p className="ml-8 text-xl leading-8">
          1. Running these commands to install the packages:
        </p>
        <br />
        <pre className="p-5 bg-gray-100">
          yarn add --dev babel-loader @babel/core @babel/cli @babel/preset-env
          @babel/preset-react
        </pre>
        <br />
        <p className="ml-8 text-xl leading-8">
          2. Creating a config file named babel.config.json in the root of your project
          with this content:
        </p>
        <Gist id="4076a6078ed94b1655e5952e283b85c2" />
        <div className="description-gist">
          <p>babel.config.json</p>
        </div>
        <br />
        <h2 className="font-bold text-3xl leading-10">Connect Styleguidist with Babel</h2>
        <br />
        <p className="article">
          Now set up Styleguidist’s internal <code className="bg-gray-100">webpack</code>{' '}
          instance to use our <code className="bg-gray-100">Babel</code> config to load
          the components properly. Thus, create{' '}
          <code className="bg-gray-100">styleguide.config.js</code> with this content:
        </p>
        <br />
        <Gist id="2743a2f89a29e188af949366c7ffbd9b" />
        <div className="description-gist">
          <p>styleguide.config.js</p>
        </div>
        <br />
        <p className="article">We’re ready to launch the Development environment!</p>
        <br />
        <p className="article">
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
        <p className="article">
          Open <code className="bg-gray-100">http://localhost:6060</code> and you should
          see the following:
        </p>
        <div className="w-9/12 h-auto m-auto">
          <Image
            layout="responsive"
            width="692"
            height="232"
            className=""
            src={'/react-comp-library/pic3.png'}
            alt="Welcome to Styleguidist"
          />
        </div>
        <br />
        <p className="article">
          Of course, we have not created any components yet, let’s do that now…
        </p>
        <br />
        <h1 className="font-bold text-4xl leading-10">Creating Components</h1>
        <br />
        <p className="article">
          We have set up the React Component Library development environment, now let’s
          create some components.
        </p>
        <br />
        <p className="article">
          All components will be added to the{' '}
          <code className="bg-gray-100">src/components</code> directory.
        </p>
        <br />
        <p className="article">The component file structure will be as follows:</p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>src/</p>
          <p>{'  '}└── components/</p>
          <p> {'     '}└── Button</p>
          <p>{'          '}├── index.js</p>
          <p>{'          '}└── Button.js</p>
        </pre>
        <br />
        <p className="article">Let’s start with a basic button.</p>
        <br />
        <p className="article">
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/Button/index.js</code>:
        </p>
        <br />
        <div className="-mb-16">
          <Gist id="b76172911e58b33ca7d442fd43ad0433" />
        </div>
        <div className="description-gist">
          <p>index.js</p>
        </div>
        <br />
        <p className="article">
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/Button/Button.js</code>:
        </p>
        <br />
        <Gist id="2eaaf6590346a18008040f79eb77c159" />
        <div className="description-gist">
          <p>Button.js</p>
        </div>
        <br />
        <p className="article">
          Run <code className="bg-gray-100">yarn start</code> or{' '}
          <code className="bg-gray-100">npm start</code> again to restart the Styleguidist
          server.
        </p>
        <br />
        <p className="article">
          Now, open <code className="bg-gray-100">http://localhost:6060</code> again and
          it should include the Button Component in the docs as shown in the picture
          below.
        </p>
        <br />
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="692"
            height="339"
            className=""
            src={'/react-comp-library/pic4.png'}
            alt="button"
          />
        </div>
        <br />
        <p className="article">
          It doesn’t really show anything yet, but Styleguidist{' '}
          <Link href="https://react-styleguidist.js.org/docs/documenting/">
            <a target="_blank">
              <u>makes it easy to preview and describe the components</u>
            </a>
          </Link>
          .
        </p>
        <br />
        <p className="article">
          Now create a markdown file named <code className="bg-gray-100">Button.md</code>{' '}
          inside the <code className="bg-gray-100">Button</code> folder to start
          documenting the Button Component.
        </p>
        <br />
        <Gist id="bdbbf3e91622975653826ba4639cbc55" />
        <div className="description-gist">
          <p>src/components/Button/Button.md</p>
        </div>
        <br />
        <p className="article">
          We can mix Markdown with JavaScript/React code to show the examples and
          descriptions easily.
        </p>
        <br />
        <p className="article">
          Now restart the Styleguidist server by rerunning{' '}
          <code className="bg-gray-100">yarn start</code> or{' '}
          <code className="bg-gray-100">npm start</code> and refresh the page, we should
          now see:
        </p>
        <br />
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="692"
            height="414"
            className=""
            src={'/react-comp-library/pic5.png'}
            alt="button"
          />
        </div>
        <br />
        <p className="article">
          We have created our first basic component, have set up a development environment
          with live preview, and production-ready documentation at the same time.
        </p>
        <br />
        {/* <div className="flex justify-center m-auto">
          <div className="border-black border w-1 h-1 bg-black"></div>
          <div className="border-black border w-1 h-1 mx-2 bg-black"></div>
          <div className="border-black border w-1 h-1 bg-black"></div>
        </div> */}
        <br />

        <h2 className="font-bold text-3xl leading-10">
          Material-UI + unfoldingWord RCLs
        </h2>
        <br />

        <p className="article">
          At unfoldingWord we use Material-UI with our RCLs as a baseline for our UI/UX
          design.
        </p>
        <br />
        <p className="article">
          Let’s start with a basic button using the Material-UI library.
        </p>
        <br />
        <p className="article">
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/MuiButton/index.js</code>:
        </p>
        <br />
        <div className="-mb-16">
          <Gist id="f067aaa7530f8e8c8b88fb02fa7cbef9" />
        </div>
        <div className="description-gist">
          <p>index.js</p>
        </div>
        <br />
        <p className="article">
          Copy the following code to{' '}
          <code className="bg-gray-100">src/components/MuiButton/MuiButton.js</code>:
        </p>
        <br />
        <Gist id="7728cc0db4e98b39ab2abf745727fd8c" />
        <div className="description-gist">
          <p>MuiButton.js</p>
        </div>
        <br />
        <p className="article">
          Restart the Styleguidist server running{' '}
          <code className="bg-gray-100">yarn start</code> or{' '}
          <code className="bg-gray-100">npm start</code> again.
        </p>
        <br />
        <p className="article">
          Open <code className="bg-gray-100">http://localhost:6060</code> and you should
          see the <code className="bg-gray-100">MuiButton</code> Component.
        </p>
        <br />
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="692"
            height="264"
            className=""
            src={'/react-comp-library/pic6.png'}
            alt="button"
          />
        </div>
        <br />
        <p className="article">
          Finally, let’s create a markdown file either named{' '}
          <code className="bg-gray-100">MuiButton.md</code> or{' '}
          <code className="bg-gray-100">README.md</code> inside the{' '}
          <code className="bg-gray-100">MuiButton</code> folder to start documenting the
          MuiButton Component.
        </p>
        <br />
        <Gist id="6c05d855cf3a9542ee45c0393c8aac6a" />
        <br />
        <p className="article">
          Restart the Styleguidist server. You should now see the MuiButton component in
          the Styleguidist live demo.
        </p>
        <br />
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="692"
            height="350"
            className=""
            src={'/react-comp-library/pic7.png'}
            alt="button"
          />
        </div>
        <br />
        <h1 className="font-bold text-2xl">Bundling and publishing to NPM</h1>
        <br />
        <blockquote className="border-black border-l-2 pl-3 text-xl leading-8">
          <i>
            Make sure you have an NPM account beforehand, if you don’t make sure to sign
            up{' '}
            <Link href="https://www.npmjs.com/signup">
              <a target="_blank">
                <u>here</u>
              </a>
            </Link>
            .
          </i>
        </blockquote>
        <br />
        <p className="article">
          First, we have to update the entry point to the library. In order to do that, we
          have to update the <code className="bg-gray-100">main</code> field in{' '}
          <code className="bg-gray-100">package.json</code>. This points to the bundled
          file that will be generated, not to the sources.
        </p>
        <br />
        <p className="article">
          Let’s set it to <code className="bg-gray-100">dist/index.js</code>, the path to
          the bundled output.
        </p>
        <br />
        <Gist id="8dc37fff80a9be7eefcd226c02e70b69" />
        <div className="description-gist">
          <p>package.jsons</p>
        </div>
        <br />
        <p className="article">
          We’re missing one more file, which defines what is exported from the library and
          what users can import. Create a{' '}
          <code className="bg-gray-100">src/index.js</code> file with the following code:
        </p>
        <div className="-mb-14">
          <Gist id="360539bc8377dd1f3f76cb89a27a7d5f" />
        </div>
        <br />
        <p className="article">
          Also, create a <code className="bg-gray-100">src/components/index.js</code> file
          and add all current components to make sure they’re exported and made available
          to users of our RCL, here we’ll also export new components as we create them.
        </p>
        <br />
        <div className="-mb-14">
          <Gist id="48fda928b8417f3a7f9aa81609e46dd4" />
        </div>
        <br />
        <p className="article">
          <code className="bg-gray-100">src/index.js</code> and{' '}
          <code className="bg-gray-100">dist/index.js</code>, are respectively the input
          and output files for the bundler.
        </p>
        <p className="article">
          Before publishing let’s make sure we don’t publish unnecessary files to our NPM
          module, so let’s add a <code className="bg-gray-100">.npmignore</code> file to
          the root of our project.
        </p>
        <br />
        <div className="-mb-12">
          <Gist id="73643f84274c2383cad755466bd5ddd5" />
        </div>
        <div className="description-gist">
          <p>.npmignore</p>
        </div>
        <br />
        <p className="article">Now let’s bundle the code and publish it to NPM…</p>
        <br />
        <p className="article">
          The following command compiles your code from the{' '}
          <code className="bg-gray-100">src</code> directory to{' '}
          <code className="bg-gray-100">dist</code>
        </p>
        <br />
        <pre className="p-5 bg-gray-100">
          <p>./node_modules/.bin/babel src --out-dir dist</p>
        </pre>
        <br />
        <blockquote className="border-black border-l-2 pl-3">
          <i className="text-xl leading-8 article">
            You can use the npm package runner that comes with npm@5.2.0 to shorten that
            command by replacing{' '}
            <code className="bg-gray-100">./node_modules/.bin/babel</code> with{' '}
            <code className="bg-gray-100">npx babel</code> or just{' '}
            <code className="bg-gray-100">npm babel</code> should do the work.
          </i>
        </blockquote>
        <br />
        <p className="article">
          Accordingly, add the following command prepublishOnly:{' '}
          <code className="bg-gray-100">
            “rm -rf ./dist && babel ./src --out-dir ./dist -s inline”
          </code>{' '}
          to <code className="bg-gray-100">package.json</code> this makes sure to bundle
          the code before publishing it to NPM.
        </p>
        <br />
        <blockquote className="border-black border-l-2 pl-3">
          <p className="article">
            For Windows users, if there is a problem with{' '}
            <code className="bg-gray-100">rm -rf</code> then you need to add the{' '}
            <code className="bg-gray-100">rimraf</code> package and replace{' '}
            <code className="bg-gray-100">rm -rf</code> with{' '}
            <code className="bg-gray-100">rimraf</code> in the command above.
          </p>
        </blockquote>
        <br />
        <p className="article">
          Your <code className="bg-gray-100">scripts</code> field should look like this:
        </p>
        <br />
        <Gist id="e86428da530ce12fe8aca1849289a360" />
        <div className="description-gist">
          <p>package.json</p>
        </div>
        <br />
        <p className="article">
          Run <code className="bg-gray-100">yarn publish</code> or{' '}
          <code className="bg-gray-100">npm publish</code> to bundle the code and publish
          it to NPM. Of course, if you use the same name as I did the publish will fail
          because there is already a module with that name on NPM, so feel free to change
          the name of your RCL on your package.json file.
        </p>
        <br />
        <div className="w-full h-auto">
          <Image
            layout="responsive"
            width="682"
            height="354"
            className=""
            src={'/react-comp-library/pic8.png'}
            alt="button"
          />
        </div>
        <br />
        <p className="article">
          After publishing, let’s test our library, I created a React app on{' '}
          <Link href="https://codesandbox.io/">
            <a target="_blank">
              <u>codesandbox</u>
            </a>
          </Link>{' '}
          and installed our newly published RCL. Let’s check it out:
        </p>
        <br />
        <iframe
          src="https://codesandbox.io/embed/testing-sample-react-component-library-1-w0el3?fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{
            width: '100%',
            height: '500px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="Testing-sample-react-component-library-1"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <br />
        <p className="article">
          As you may remember, we included{' '}
          <code className="bg-gray-100">@material-ui/core</code> in the{' '}
          <code className="bg-gray-100">peerDependencies</code> list. Therefore, our app
          must include it as a dependency.
        </p>
        <br />
        <p className="article">
          After adding <code className="bg-gray-100">@material-ui/core</code> as a
          dependency on our app, we have both button components rendering correctly from
          our newly created RCL.
        </p>
        <br />
        <iframe
          src="https://codesandbox.io/embed/testing-sample-react-component-library-2-u4mlb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
          style={{
            width: '100%',
            height: '500px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="Testing-sample-react-component-library-2"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <br />
        <p className="article">
          Click on the “Open Sandbox” button above if you want to open the sandbox project
          I used to try out the RCL we just created.
        </p>
        <br />
        <p className="article">
          Feel free to check out the following repository if you need help:
        </p>
        <br />
        <Link href="https://github.com/mannycolon/first-react-component-library-tutorial">
          <a target="_blank">
            <div className="flex w-2/3 m-auto border-gray-100 border">
              <div className="py-5 pl-5">
                <h3 className="text-base font-bold">
                  GitHub - mannycolon/first-react-component-library-tutorial
                </h3>
                <h4 className="text-sm md:my-1 lg:my-2 2xl:my-4 text-gray-400">
                  Contribute to mannycolon/first-react-component-library-tutorial
                  development by creating an account on GitHub.
                </h4>
                <p className="text-xs md:pt-1 lg:pt-2 2xl:pt-4 text-gray-400">
                  github.com
                </p>
              </div>
              <div className="w-1/3 h-auto bg-[url('/react-comp-library/pic9.png')] bg-center"></div>
            </div>
          </a>
        </Link>
        <br />
        <p className="article">Happy coding!</p>
      </div>
    </div>
  )
}
