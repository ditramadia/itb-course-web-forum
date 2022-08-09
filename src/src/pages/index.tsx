import Navbar from '@/components/organism/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'

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
    </>
  )
}

export default Home