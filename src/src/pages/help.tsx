import React from 'react'

import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import HelpContent from '@/components/organism/HelpContent'
import Footer from '@/components/organism/Footer'
import FaqContent from '@/components/organism/FaqContent'

export default function Help() {
  return (
    <>
    <div className="page-container">
        <div className="page-wrapper">
          <Navbar currentPage="help" />
          <PageHeader title="Help" subtitle="Bagaimana cara mencari mata kuliah?" />
          <HelpContent />
          <PageHeader title="FAQ" subtitle="Masih bingung?" />
          <FaqContent/>
        </div>
        
        <Footer />
      </div>
      </>
  )
}
