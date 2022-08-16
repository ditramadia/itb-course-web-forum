import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import HelpContent from '@/components/organism/HelpContent'
import Footer from '@/components/organism/Footer'
import FaqContent from '@/components/organism/FaqContent'
import React from 'react'
import Head from 'next/head'

export default function Help() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>CariKelas | Help</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="page-container">
          <div className="page-wrapper">
            <Navbar currentPage="help" />
            <PageHeader title="Help" subtitle="Cara menggunakan CariKelas" />
            <HelpContent />
            <PageHeader title="FAQ" subtitle="Masih bingung?" />
            <FaqContent />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
