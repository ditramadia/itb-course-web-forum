import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '@/components/organism/Header'
import Navbar from '@/components/organism/Navbar'
import Search from '@/components/organism/Search'
import Result from '@/components/organism/Result'
import Footer from '@/components/organism/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CariKelas | Home</title>
        <meta
          name="description"
          content="CariKelas pusat informasi mengenai mata kuliah ITB"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <Search />
      <Result />
      <Footer />
    </>
  )
}

export default Home
