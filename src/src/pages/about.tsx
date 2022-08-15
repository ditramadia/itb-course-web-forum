import React from 'react'
import Head from 'next/head'

import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import AboutContent from '@/components/organism/AboutContent'

export default function About() {
  return (
    <>
      <Head>
        <title>CariKelas | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <div className="page-wrapper">
          <Navbar currentPage="about" />
          <PageHeader title="About" subtitle="Apa itu CariKelas?" />
          <AboutContent />
        </div>
        <Footer />
      </div>
    </>
  )
}
