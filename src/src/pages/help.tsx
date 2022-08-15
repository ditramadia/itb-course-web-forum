import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import AboutContent from '@/components/organism/AboutContent.tsx'
import Footer from '@/components/organism/Footer'
import React from 'react'
import Head from 'next/head'

export default function Help() {
  return (
    <>
      <Head>
        <title>CariKelas | Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <div className="page-wrapper">
          <Navbar currentPage="help" />
          <PageHeader title="Help" subtitle="" />
          <AboutContent />
        </div>
        <Footer />
      </div>
    </>
  )
}
