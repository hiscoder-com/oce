import Image from 'next/image'
import Link from 'next/link'
import HeaderStaticPage from '../components/HeaderStaticPage'

export default function LeanExpectations() {
  const HeaderConfig = {
    title: 'Lean Expectations — PoC, Prototype, MVP',
    name: 'Chris Klapp',
    date: 'Sep 8, 2018 · 17 min read',
  }
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <HeaderStaticPage config={HeaderConfig} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40 article">
        <br />
        <p className="article">
          For new software to have intrinsic value, it typically introduces innovative
          approaches to solving a problem. This can come in many forms but is usually
          improvements on functionality, usability or performance. Sometimes it is
          addressing new use cases by greeting new market segments that are not currently
          being addressed by existing software. Whether introducing new approaches or
          exposure to new markets, there are assumptions made that need to be tested.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic1.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@templecerulean?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Temple Cerulean</u>
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
        <p className="article">
          If we fail to put our assumptions to the test, we risk investing heavily in
          building a flawed solution or worse, a solution to the wrong problem. Whether or
          not these new approaches have fully tested assumptions prior to starting
          development, much learning should be done along the way.
        </p>
        <br />
        <blockquote className="px-12">
          <p className="text-3xl text-gray-400">
            “Life’s too short to build something that nobody wants. “ — Ash Maurya,
            Spark59
          </p>
        </blockquote>

        <br />
        <p className="article">
          We live in a rapidly changing world and software can be out of date by the time
          it is released. Users are smart and rarely wait for us to solve their problems
          for them. They adopt other tools or devise clever work arounds to fill the void
          we are attempting to address. The original assumptions that the software was
          based upon will continue to evolve while our software is being developed.
        </p>
        <br />
        <p className="article">
          It is important to be purposeful in the iterative learning process since it can
          take time to deliver software and the use cases we set out to solve are ever
          changing. Adopting the tools of{' '}
          <Link href="https://en.wikipedia.org/wiki/Lean_software_development">
            <a target="_blank">
              <u>Lean Software Development</u>
            </a>
          </Link>{' '}
          is ideal as it focuses on the following principles: eliminate waste, amplify
          learning, decide as late as possible, deliver as fast as possible, empower the
          team, and build integrity in. Transitioning from the traditional{' '}
          <Link href="https://en.wikipedia.org/wiki/Waterfall_model">
            <a target="_blank">
              <u>Waterfall</u>
            </a>
          </Link>{' '}
          to the more modern{' '}
          <Link href="https://en.wikipedia.org/wiki/Agile_software_development">
            <a target="_blank">
              <u>Agile methodology</u>
            </a>
          </Link>{' '}
          is a great place to start as it fosters many of the lean principles.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic2.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@rawpixel/collections">
              <a target="_blank">
                <u>rawpixel</u>
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
        <p className="article">
          Now that we are a part of a Scrum team using Agile methods we can iteratively
          improve our development practices by introducing more principles of Lean
          Software Development. We set the stage for being able to keep up with the rate
          of change of our users and are ready to develop new software. It doesn’t take
          long to make it appear functional. We worked out the kinks in the workflow and
          it demoes so well. We built it directly along the happy path. No matter how much
          time we invest, it can appear perfect until users start to, well, use it. That’s
          when the frustration begins. We fix the bugs, adapt the workflow, and once again
          present it as a working product. The cycle repeats continuously and
          discouragement can begin to set in. Some of this is inevitable. We cannot
          produce error free code. If we did we probably took too long to do it.
        </p>
        <br />
        <p className="article">
          It only seems logical that more programming flaws and design holes exist earlier
          in the product’s development. This leads to the initial impression of the
          application to be marred very quickly. So how do we set expectations early in
          the development to prevent frustration and discouragement?
        </p>
        <br />
        <p className="article">
          There are quite a few misconceptions along the way that can be cleared up by
          setting proper expectations, especially early in the software’s lifecycle. While
          we may be able to convince our stakeholders of the value of adopting lean
          principles, the expectation remains that the software produced will be
          immediately usable and address the use cases the first time.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic3.jpg'}
            alt=""
          />
          <figcaption className="text-gray-400">
            The scope of learning and changes should decrease as the product matures
            increasing stability. This is similar to a coin spinning down a funnel. Each
            reduction in scope allows for a faster iteration.
          </figcaption>
        </figure>
        <br />
        <h1 className="font-bold text-4xl">A Solution</h1>
        <br />
        <p className="article">
          Software development priorities can evolve as the project matures. One important
          concept to explore is the inverse relationship between the scope of learning and
          stability. This sounds like a far stretch but has a simple and logical
          explanation. True freedom to learn and apply what is learned requires freedom to
          introduce change. Significant changes undermine stability. Stability is gained
          by limiting the scope of change in the learning process. We want to always
          encourage a fast rate of learning but reduce the scope of changes incurred as
          the product matures.
        </p>
        <br />
        <p className="article">
          To strike a balance of this natural tension, we follow the second principle of
          Lean Software Development,
          <Link href="https://en.wikipedia.org/wiki/Lean_software_development#Amplify_learning">
            <a target="_blank">
              <u>amplify learning</u>
            </a>
          </Link>
          . Shorten your learning cycles by frequently involving user input and user
          testing. This can introduce change in a more predictable manner and over time
          offer a sense of increased stability to the users. When there is much to be
          learned, prepare to introduce drastic changes. As the learning from the users
          results in smaller changes, a more stable product naturally emerges.
        </p>
        <br />
        <p className="article">
          One of the ways to help set proper expectations while learning to meet user’s
          needs in a timely manner can be implemented in an iterative cycle of Proof of
          Concept (PoC), Prototype, and Minimum Viable Product (MVP). While we may already
          be familiar with the terms it is helpful to understand and communicate the value
          of each so that we keep ourselves and others from being frustrated along the
          way. This provides a framework of terminology that can help shape the
          conversations about our progress and how much change should be expected.
        </p>
        <br />
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic4.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “Proof of Concepts are like using the scientific method in software
            development. You have to design your experiment before you begin testing your
            hypothesis.” — photo credit{' '}
            <Link href="https://unsplash.com/@chuttersnap?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>chuttersnap</u>
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
        <h1 className="font-bold text-4xl">Proof of Concept</h1>
        <br />
        <p className="article">
          A Proof of Concept (PoC) is basically a stand-alone project that covers a very
          small scope and is quickly developed or hacked together so that it can test
          assumptions. Using the scientific method, you devise experiments to test your
          hypothesis. This can be accomplished in a multitude of ways such as stand alone
          codebases, web pages, user workflow diagrams, or even spreadsheets with macros.
          I’ve seen great functional ones built on FileMaker Pro that also served as a
          Prototype. There are even applications made for this phase. Regardless of which
          tool you use, you should always know up front what you want to learn and how to
          measure success or failure. This ultimately guides whether or not to continue
          investing in this approach or try something new.
        </p>
        <br />
        <p className="article">
          There are two goals during the testing of the PoC, to test assumptions and to
          share the vision. Either you fail quickly and learn from it or you learn that
          you proved the concept and are now ready to share the vision. Both outcomes are
          a step forward as stated in the book The Lean Startup, “you will always succeed
          — in seeing what happens.” Adapting your approach based on your failed
          experiments during this early phase can prevent years invested in a project that
          was based on incorrect assumptions. If you do end up with a successful PoC, it
          is evident when you are no longer spending much of your time convincing others.
          Let the PoC speak for itself and others will confirm it. This makes raising the
          funding much easier for both the PoC and subsequent development.
        </p>
        <br />
        <p className="article">
          It is important to not expect a PoC to be used long term by users for more than
          testing due to little effort placed in software architecture and user
          management. A major question that can be answered is if a new standalone product
          is needed or if it should it be included as a new feature inside another
          application to extend the definition of the respective MVP. This is more
          difficult to answer if it was built in the codebase of another project and quite
          complex to extract if that is what is necessary. PoCs can also sit on the shelf
          for a couple months or even a couple years before the timing is right to invest
          further.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic5.png'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “Mockups of a user interface” — photo credit{' '}
            <Link href="https://unsplash.com/@firmbee?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>William Iven</u>
              </a>
            </Link>{' '}
            on
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Unsplash</u>
              </a>
            </Link>
          </figcaption>
        </figure>
        <br />
        <p className="article">
          PoCs are ideal for new projects and major features. New features can include
          user interface design and workflows. You can test this by creating mockups of
          the interface and get user feedback. This is commonly skipped and much
          development time is wasted in integrating untested user interfaces. While
          professional designers have specialized tools for this, it can be done in
          presentation software like Apple’s Keynote. Every hour of a designer’s time can
          save a day of a developer’s time, and days spent here can save weeks.
          Diversifying the team to include this role or even contracting this out can help
          scale the effectiveness of the team.
        </p>
        <br />
        <p className="article">
          There are times where the concept does not have to be proven. This can be the
          case with small incremental feature improvements or small features. Creating a
          PoC outside of an existing project for these can be counter productive. Even
          when this is the case be careful not to invest too much time without user
          testing these new features or improvements.
        </p>
        <br />
        <p className="article">
          The key in developing a PoC is to use the tools you know and focus on the
          easiest way to get it done quickly. This is common in hackathons. Resist the
          urge to optimize performance or test too many assumptions concurrently or your
          PoC will take way too long. You can always circle back and combine other
          successful PoCs into a new one. Try to keep the scope small enough of each to
          complete in a couple of weeks using 1–2 people. This doesn’t have to be done by
          a developer. Many times non developers are quite effective at creating PoCs. The
          prerequisites are motivation and passion to solve the problem. This can also
          allow developers to stay focused on their other projects.
        </p>
        <br />
        <p className="article">
          The PoC typically has the smallest scope and has limited usability but is
          crucial in testing assumptions with minimal investment. Be prepared to start
          over a few times and introduce a lot of change because there is the most to be
          learned here. This phase is immensely helpful in sharing the vision while
          obtaining funding.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic6.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “Electronic prototyping” — photo credit{' '}
            <Link href="https://unsplash.com/@nicolasthomas?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Nicolas Thomas</u>
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
        <h1 className="font-bold text-4xl">Prototype</h1>
        <br />
        <p className="article">
          A Prototype can be thought of as the step between a PoC and MVP. Once the
          concept has been proven in a limited scope, you can take a little more time
          proving whether or not the concept works in a more integrated implementation.
          Unless the prototype was specifically user experience related, this usually
          focuses on functionality rather than design or even usability.
        </p>
        <br />
        <p className="article">
          The Prototype is typically not a refactor of the PoC but a rewrite because of
          the shortcuts taken previously and applying what was learned. This should be
          more thoroughly user tested to further understand the bottlenecks of things such
          as software architecture and user management. This typically has a lot of bugs
          that have yet to be addressed and labeled as Alpha or Beta. While using{' '}
          <Link href="https://en.wikipedia.org/wiki/Software_versioning#Degree_of_compatibility">
            <a target="_blank">
              <u>Semantic Versioning</u>
            </a>
          </Link>
          , it can be signified as a release less than 1.0.
        </p>
        <br />
        <p className="article">
          There are use cases such as internal software, that is not customer facing, that
          can get away with using prototypes in production. In these cases, the software
          is built to complement the services offered by the company or organization
          rather than built for the customer’s direct consumption. Updates come as
          inspiration hits and frequently after firefighting sessions. Releases aren’t
          usually planned and appear erratic. A common sign of using prototypes in
          production can be internal staff being frustrated by bugs and downtime that
          prevent them from delivering their services.
        </p>
        <br />
        <p className="article">
          Prototypes are ideal for taking the next step of a PoC. While the concept has
          already been proven there may be uncertainty as to how it is integrated and
          architected. This provides a safer environment for peer feedback which lead to
          clearer separation of concerns, refactoring large portions of the code and
          architecture improvements to address performance bottlenecks. Avoid
          pre-optimization as most of the time it would be nullified by design changes.
          The Prototype minimizes the impact of the above as there should be fewer
          dependencies compared to directly developing the MVP by skipping the Prototype
          phase.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic7.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “close-up photo of motherboard” by{' '}
            <Link href="https://unsplash.com/@nenadg?utm_source=medium&utm_medium=referral">
              <a target="_balnk">
                <u>Nenad Grujic</u>
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
        <p className="article">
          There are times when the separation of concerns are already clearly known and
          the architecture is predetermined. This can be the case when implementing an
          existing feature from another software project. In this case, a Prototype can
          feel like a waste of time. However, it is easier to promote a Prototype than it
          is to iteratively refactor and improve the code if this phase is skipped. It is
          also easier to exceed expectations this way. Introducing a refactor when this
          phase is skipped is much harder to sell to the development team and
          stakeholders.
        </p>
        <br />
        <p className="article">
          If the PoC took a couple of weeks, the Prototype would typically take a couple
          of months of 1–3 developers. A complex Prototype can take much longer. The time
          is more proportional to complexity than it is to the number of developers. In
          fact many times this is fastest by the “lone wolf” developer but lacks the
          advantages of peer feedback.
        </p>
        <br />
        <p className="article">
          Adding more developers rarely speeds up the development process as it
          complicates team dynamics and the complexity of code. The{' '}
          <Link href="https://en.wikipedia.org/wiki/Ringelmann_effect">
            <a target="_blank">
              <u>Ringelmann Effect</u>
            </a>
          </Link>{' '}
          applies here. It states that a smaller team can be more productive than a larger
          one. As the code is properly modularized it makes it easier for more team
          members and even multiple teams to contribute without slowing the process down
          as much because they are working on separate but integrated projects. This is
          discussed in a bit more depth in the MVP section.
        </p>
        <br />
        <p className="article">
          Much insight is gained during testing of the Prototype as to what the separation
          of concerns are and what architecture should be used in the MVP. Showcasing the
          progress made and learning of the Prototype helps set expectations for the MVP.
          Be prepared for a lot of changes here which help minimize wasted development
          time if refactoring code integrated in the MVP.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic8.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “The MVP Camera. No bells, no whistles, just the basics. It is nearly as
            instant as our modern digital cameras.” — credit{' '}
            <Link href="https://unsplash.com/@hermez777?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Hermes Rivera</u>
              </a>
            </Link>{' '}
            on{' '}
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                {' '}
                <u>Unsplash</u>
              </a>
            </Link>
          </figcaption>
        </figure>
        <br />
        <h1 className="font-bold text-2xl">Minimum Viable Product</h1>
        <br />
        <p className="article">
          The Minimum Viable Product (MVP) is typically the minimal functionality required
          to meet the root needs of the user. Many times this sacrifices the non-essential
          but desired features. While the name infers being stripped down to the bare
          essentials, it includes much more than the previous phases. The development team
          should not make the decisions of the included functions and features in
          isolation. Stakeholders were important before but are invaluable in this phase.
          Much more planning is required developing the MVP.
        </p>
        <br />
        <p className="article">
          Clearly designed software architecture and user interfaces are crucial in this
          phase. Don’t stop learning at the Prototype phase. Continue to let users test
          your designs and interfaces along the way.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic9.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “If we knew that arial photography was the destiny of drones, we might have
            built out from the existing camera and tried to make it fly. Instead drones
            technology was matured in its own path until they found their shared destiny.”
            — credit{' '}
            <Link href="https://unsplash.com/@dose?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Dose Media</u>
              </a>
            </Link>
            on{' '}
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Unsplash</u>
              </a>
            </Link>{' '}
          </figcaption>
        </figure>
        <br />
        <p className="article">
          Once the MVP is released with the minimal feature set, new major features can
          then be added using the natural progression of the PoC, Prototype, then MVP.
          Starting with the PoC to test that the feature will meet the needs. Ideally this
          is done externally at least as a module to ensure a clean separation of
          concerns. If it is too integrated, you run the risk of blurring lines and
          undermining the approach. Next, rewrite the feature in a more integrated way, as
          the Prototype, but not necessarily in its final form to be released. The
          Prototype integration can help decide whether it’s most appropriate home is
          included in the original product, needs to spin off on its own, or requires a
          whole new platform to be developed. Finally, integrating the feature into the
          original product is expanding the definition of the product’s minimum
          viable-ness.
        </p>
        <br />
        <p className="article">
          This MVP phase can have an indefinite timeframe due to its iterative nature but
          expect as much as a year for a stable release using a small team of about 2–4
          developers. This is most dependent on the scope of the software more than the
          number of developers. According to{' '}
          <Link href="https://en.wikipedia.org/wiki/Brooks%27s_law">
            <a target="_blank">
              <u>Brook’s Law</u>
            </a>
          </Link>{' '}
          introduced in{' '}
          <Link href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month">
            <a target="_blank">
              <u>The Mythical Man-Month</u>
            </a>
          </Link>
          , throwing more developers at the problem does not always speed up the process
          and has increasingly diminishing returns. With{' '}
          <Link href="https://en.wikipedia.org/wiki/Modular_programming">
            <a target="_blank">
              <u>Modular Programming</u>
            </a>
          </Link>
          , where the codebase is organized by functionality as modules, more team members
          can be added. Multiple teams can work in tandem on separate modules which can
          improve timelines but requires ample communication and planning, in turn
          increasing the inherent complexity of team dynamics. Clear examples of this are
          with front-end user interface and back-end business and data logic. User
          interface design as well as software architecture design can also be further
          abstracted to speed up implementation.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic10.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            “Drone photography did not start as someone setting out to build flying
            cameras but the integration of two fully developed technologies.” — photo
            credit
            <Link href="https://unsplash.com/@mitchnielsen?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Mitch Nielsen</u>
              </a>
            </Link>
            on{' '}
            <Link href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Unsplash</u>
              </a>
            </Link>{' '}
          </figcaption>
        </figure>
        <br />
        <p className="article">
          While much of the same iterative learning can be made by starting with the MVP,
          opportunities can be missed by skipping the PoC and Prototype phases. PoCs
          encourage teams to be more receptive to raw feedback. Sensitivity to criticism
          tends to be directly proportionate to the amount of effort invested. Prototypes
          play a similar role but the critics tend to be peer developers. There is
          something liberating about sharing a prototype with a team for input in place of
          defending your approach. Directly building features that miss the mark in the
          MVP come at a higher price including emotions. If the goal is reducing the
          investment of the learning cycle, PoCs and Prototypes have value.
        </p>
        <br />
        <p className="article">
          The MVP should naturally have a higher priority of stability over learning in
          comparison to the PoC and Prototype phases. Try not to let that be an excuse for
          failing to learn.
        </p>
        <br />
        <h1 className="font-bold text-4xl">Life after MVP</h1>
        <br />
        <p className="article">
          There are quite a few online articles that discuss other approaches that include
          phases after MVP. After creating dozens of PoC’s and Prototypes through the
          years, half a dozen have made it to the MVP phase and brought to market in one
          form or another including patent applications on a few and one awarded. The MVP
          phase is usually where I hand the project to a full Scrum team and either
          fulfill the role of Product Owner or slide over to being a stakeholder when we
          find the right person to fulfill the Product Owner role.
        </p>
        <br />
        <blockquote className="px-12">
          <p className="text-3xl text-gray-400">
            “The reason to build a new team to pursue an idea is that you believe you can
            accelerate through the Build-Measure-Learn feedback loop faster than anyone
            else can.” <em>— The Lean Startup</em>
          </p>
        </blockquote>
        <br />
        <p className="article">
          Depending on your definition of what is considered minimally viable, you can
          keep adding features to meet the purpose of the application. Most software has a
          limited shelf life of only a couple years before the competition over takes it
          or a new version includes new features that can be integrated through this
          lifecycle. To stay relevant, it seems strategic to reassess the entire product
          by then. The lifecycle of new features can help the team know when it is time
          for that rebirth. If each iteration is developed in modules, code can be reused
          so that not all of the pieces have to be rewritten.
        </p>
        <br />
        {/* три точки */}
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic11.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@new_data_services?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>NEW DATA SERVICES</u>
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
        <h1 className="font-bold text-4xl">Example Application Lifecycle</h1>
        <br />
        <p className="article">
          One of the applications that has used the PoC, Prototype, MVP development
          lifecycle in multiple phases is translationCore (tC). While there were other
          applications in the domain to fulfill similar roles to check Bible translations,
          this one had new innovative approaches that addressed new use cases and even new
          customer segments. We decided that this phased approach would help us test our
          assumptions and help manage expectations around it.
        </p>
        <br />
        <p className="article">
          First, a simple PoC was developed in a matter of weeks. It was a stand-alone web
          page, quickly hacked together by a single developer. It was used to test the
          assumptions and explore limits. The PoC and its findings were used to test
          assumptions, cast a vision, raise funding and build a future user base. Once we
          achieved enough buy-in and learned from user testing, we moved on to the
          Prototype.
        </p>
        <br />
        <p className="article">
          At first it seemed logical to integrate it into the existing application we had
          that was already on the market, translationStudio. This application used many of
          the same resources and had some common functionality. However, we knew that the
          existing application was designed with a complete different set of assumptions.
          It had already been heavily modified through the years and would need a major
          refactor or likely a rewrite to handle this new functionality. We further
          identified that there might even be a different user base and risked making the
          original product less effective for the existing users.
        </p>
        <br />
        <p className="article">
          We decided to build a new platform. Since the prototype needed to be more stable
          and robust than the PoC, nearly half a year was spent on it. With our testing
          and learning from the Prototype, we started rewriting the app piece by piece
          working towards our MVP. Due to the modularity of the Prototype, we were able to
          do so in iterative phases allowing some portions of legacy prototype code to
          stay around until it no longer served its purpose and was important enough for
          us to clean up. We learned a lot along the way, balancing what we defined as a
          minimum feature set and implementing an iteratively cleaner separation of
          concerns to minimize technical debt in the long term.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic12.jpg'}
            alt=""
          />
          <figcaption className="mt-1 text-gray-400">
            Photo by{' '}
            <Link href="https://unsplash.com/@dreamevile?utm_source=medium&utm_medium=referral">
              <a target="_blank">
                <u>Raphael Koh</u>
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
        <h1 className="font-bold text-4xl">Lifecycle of Modules</h1>
        <br />
        <p className="article">
          While the main tC application was being built, we created modules that we called
          tools that run inside the application with their own development lifecycle of
          PoC, Prototype, MVP. Their code is managed in separate repositories allowing for
          a manageable way to replace each tool’s Prototype with its MVP.
        </p>
        <br />
        <p className="article">
          Features of one of the tools, WordMAP, also has its own lifecycle as well. Two
          years ago, it was a PoC that helped cast a vision for automated alignment with
          minimal requirements. It worked offline and in a browser. We used it to test
          assumptions and cast a vision. It sat idle for nearly two years before it was
          rewritten in a more planned manner as a Prototype. While it is a stand-alone
          module, it is able to be integrated into tC and it’s tools. The external nature
          of the module allows it to have its own lifecycle and not have to be directly
          tied to the fate of any other project and be used in other modules and
          applications. It is undergoing testing and we plan to have features of WordMAP
          with their own PoC and Prototypes.
        </p>
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/leanExpectations/pic13.jpg'}
            alt=""
          />
        </figure>
        <br />
        <br />
        <h1 className="font-bold text-4xl">Summary</h1>
        <br />
        <p className="article">
          Hopefully in reading this far you understand the value of pacing your software
          development into phases such as Proof of Concept, Prototype and Minimum Viable
          Product and have an idea on how to set the proper expectations of each phase.
          PoCs are great for building excitement by trying something new without being
          held back by existing limits. They are hacked together by design and typically
          not meant for users but to test assumptions. Prototypes are great for improving
          on the PoC by learning from the mistakes made and seeing how the software fits
          into the greater workflow it will serve. Minimum Viable Products are great for
          building usable software without unnecessary features that will slow the time to
          market.
        </p>
        <br />
        <p className="article">
          This lifecycle is scalable and when coupled with modular design decouples the
          pieces of a monolithic application into bite-size pieces. This fosters best
          practices and makes it easier to contract out work on portions of the
          application. This also encourages external collaboration on software from
          partner organizations and the open source community.
        </p>
        <br />
        <blockquote className="px-12">
          <p className="text-3xl text-gray-400">
            “Remember, planning is a tool that only works in the presence of a long and
            stable operating history. And yet, do any of us feel that the world around us
            is getting more and more stable every day? Changing such a mind-set is hard
            but critical to startup success.”
          </p>
          <em className="text-3xl text-gray-400">—The Lean Startup</em>
        </blockquote>
        <br />
        <p className="article">
          There is{' '}
          <Link href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month#No_silver_bullet">
            <a target="_blak">
              <u>no silver bullet</u>
            </a>
          </Link>{' '}
          in software development. However, iterative learning is still paramount even if
          enough field research has been done to study the use cases. Since the world is
          continuing to change at a growingly rapid pace, research may be out of sync by
          the time the software application is built. Think of this approach as a part of
          field research. Test assumptions made in the PoC and Prototype during the
          research phase, that way there is less of a disconnect between the research and
          the development efforts. Continue testing during the MVP phase to ensure the
          user needs are adequately met.
        </p>
        <br />
        <p className="mb-24 text-xl leading-8">
          Have you had a difficult time setting expectations for your software? Share
          these ideas and concepts with your team to see if it is a good fit for your
          current or future projects. How might applying the concepts shared help you turn
          frustration into satisfaction? Let me know in the comments how you have applied
          this in the past or any stories of success and failures.
        </p>
      </div>
    </div>
  )
}
