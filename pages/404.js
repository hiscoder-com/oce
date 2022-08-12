import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found container">
      <div className="max-w-full h-screen flex items-center justify-center">
        <div className="text-7xl border-r-2 border-black pr-4">404</div>
        <div className="ml-4 text-2xl">
          <p>Ooops...</p>
          <p>That page cannot be found :(</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
