import DescRating from '@/components/organism/DescRating'
import Footer from '@/components/organism/Footer'
import MatkulHeader from '@/components/organism/MatkulHeader'
import Navbar from '@/components/organism/Navbar'
import React from 'react'

export default function Matkul() {
  const matkulData = {
    id: '1',
    code: 'IF2121',
    name: 'Logika Komputasional',
    category: 'Mata kuliah wajib',
    semester: '3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum urna et lorem sollicitudin faucibus. Cras viverra lobortis luctus. Donec suscipit blandit odio, non lacinia turpis ullamcorper vitae. Sed tincidunt erat vel sapien vehicula efficitur. Duis egestas orci eu laoreet sodales. Cras.',
    material: 5,
    assignment: 5,
    recommendation: 5,
  }

  return (
    <>
      <Navbar />
      <MatkulHeader {...matkulData} />
      <DescRating {...matkulData} />
      <Footer />
    </>
  )
}
