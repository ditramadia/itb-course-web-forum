import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '@/components/organism/Header'
import Navbar from '@/components/organism/Navbar'
import Search from '@/components/organism/Search'
import Result from '@/components/organism/Result'
import Footer from '@/components/organism/Footer'
import { useState } from 'react'
import { InferQueryOutput } from '@/utils/trpc'

const Home: NextPage = () => {
  const [searchResult, setSearchResult] = useState<
    InferQueryOutput<'subject.search'> | undefined
  >(undefined)

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
      <div className="page-container">
        <div className="page-wrapper">
          <Navbar />
          <Header />
          <Search onSearch={setSearchResult} />
          <Result data={searchResult} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
