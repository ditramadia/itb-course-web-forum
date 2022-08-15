import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>CariKelas | Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <div className="page-wrapper">
          <Navbar />
          <PageHeader title="404" subtitle="Page tidak dapat ditemukan" />
        </div>
      </div>
    </>
  )
}
