import React from 'react'

import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import AboutContent from '@/components/organism/AboutContent.tsx'

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />
      <PageHeader title="About" subtitle="Apa itu CariKelas?" />
      <AboutContent />
      <Footer />
    </>
  )
}
