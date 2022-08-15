import DescRating from '@/components/organism/DescRating'
import Feedback from '@/components/organism/Feedback'
import Footer from '@/components/organism/Footer'
import MatkulHeader from '@/components/organism/MatkulHeader'
import Navbar from '@/components/organism/Navbar'
import { trpc } from '@/utils/trpc'
import { useRouter } from 'next/router'
import React from 'react'
import Custom404 from '../404'
import Head from 'next/head'

export default function Matkul() {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, refetch } = trpc.useQuery([
    'subject.findOne',
    { id: parseInt(id as string) },
  ])

  if (!data && !isLoading) {
    return <Custom404 />
  }

  return (
    <>
      <Head>
        <title>CariKelas | {data?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <div className="page-wrapper">
          <Navbar />
          {!isLoading && data && (
            <>
              <MatkulHeader {...data} />
              <DescRating {...data} />
              <Feedback {...data} onChange={() => refetch()} />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
