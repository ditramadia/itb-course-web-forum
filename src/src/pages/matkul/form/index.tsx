import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import SubmissionForm from '@/components/organism/SubmissionForm'
import React from 'react'

export default function Form() {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <Navbar />
        <SubmissionForm />
      </div>
      <Footer />
    </div>
  )
}
