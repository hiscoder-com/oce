import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="container flex justify-center mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
