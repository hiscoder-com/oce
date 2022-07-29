import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Open Components Ecosystem</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={'/components'}>
        <a className="hover:underline m-5">From GitHub</a>
      </Link>
      <Link href={'/components-npm'}>
        <a className="hover:underline m-5">From NPM</a>
      </Link>
    </div>
  )
}
