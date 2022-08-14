import Navbar from '@/components/organism/Navbar'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'

export default function Custom404() {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <Navbar />
        <PageHeader title="404" subtitle="Page tidak dapat ditemukan" />
      </div>
    </div>
  )
}
