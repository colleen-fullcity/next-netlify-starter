import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Dennis Miller Furniture" />
        <p className="description">
    This is a payment page. We will parse parameters passed to this page, and pre-load form fields.  Form submission will call either ACH or CC depending on what we are pushing.
  
        </p>
    here's another line.
      </main>

      <Footer />
    </div>
  )
}
