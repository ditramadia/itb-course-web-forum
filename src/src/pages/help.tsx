import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import AboutContent from '@/components/organism/AboutContent.tsx'
import Footer from '@/components/organism/Footer'
import React from 'react'

export default function Help() {
  return (
    <div className="page-container">
        <div className="page-wrapper">
          <Navbar currentPage="help" />
          <PageHeader title="Help" subtitle="" />
          <AboutContent />
        </div>
        <Footer />
      </div>
  )
}
