import MatkulCard from '@/components/molecule/MatkulCard'
import { InferQueryOutput } from '@/utils/trpc'
import React from 'react'

interface Props {
  data: InferQueryOutput<'subject.search'> | undefined
}

export default function Result({ data }: Props) {
  if (data === undefined) {
    return <div className="result-container"></div>
  } else if (data.length === 0) {
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
      <p className="title">Hasil Pencarian ({data.length} hasil)</p>
      <div className="result-wrapper">
        {data.map((subject) => (
          <MatkulCard {...subject} key={`result-${subject.id}`} />
        ))}
      </div>
    </div>
  )
}
