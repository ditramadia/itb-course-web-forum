import React from 'react'

import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import AboutContent from '@/components/organism/AboutContent'

export default function About() {
  return (
    <>
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
