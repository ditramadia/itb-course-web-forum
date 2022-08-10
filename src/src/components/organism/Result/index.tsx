import MatkulCard from '@/components/molecule/MatkulCard'
import React from 'react'

export default function Result() {
  const matkulData = [
    {
      id: '1',
      code: 'IF2110',
      name: 'Algoritma dan Struktur Data',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex enim, luctus vehicula ex et, aliquet laoreet elit. Vivamus a.',
      category: 'Matkul Wajib',
      semester: '3',
      material: 5,
      assignments: 5,
      recommendation: 5,
    },
    {
      id: '2',
      code: 'IF2121',
      name: 'Logika Komputasional',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex enim, luctus vehicula ex et, aliquet laoreet elit. Vivamus a.',
      category: 'Matkul Wajib',
      semester: '3',
      material: 4,
      assignments: 4,
      recommendation: 3,
    },
  ]

  if (matkulData.length === 0) {
    return (
      <div className="result-container">
        <p className="title">Hasil Pencarian</p>
        <div className="result-wrapper">
          <p id="empty-message">Tidak ada data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="result-container">
      <p className="title">Hasil Pencarian</p>
      <div className="result-wrapper">
        {matkulData.map((matkul) => (
          <MatkulCard {...matkul} />
        ))}
      </div>
    </div>
  )
}
