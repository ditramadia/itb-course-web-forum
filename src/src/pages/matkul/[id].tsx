import DescRating from '@/components/organism/DescRating'
import Feedback from '@/components/organism/Feedback'
import Footer from '@/components/organism/Footer'
import MatkulHeader from '@/components/organism/MatkulHeader'
import Navbar from '@/components/organism/Navbar'
import { trpc } from '@/utils/trpc'
import { useRouter } from 'next/router'
import React from 'react'
import DefaultErrorPage from 'next/error'

export default function Matkul() {
  const router = useRouter()
  const { id } = router.query

  const { data } = trpc.useQuery([
    'subject.findOne',
    { id: parseInt(id as string) },
  ])

  if (!data) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <div className="page-container">
      <div className="page-wrapper">
        <Navbar />
        <MatkulHeader {...data} />
        <DescRating {...data} />
        <Feedback {...data} />
      </div>
      <Footer />
    </div>
  )
}
