import Link from 'next/link'
import React from 'react'

export interface CardProps {
  id: string
  code: string
  name: string
  desc: string
  category: string
  semester: string
  material: number
  assignments: number
  recommendation: number
}

export default function MatkulCard(props: CardProps) {
  const {
    id,
    code,
    name,
    desc,
    category,
    semester,
    material,
    assignments,
    recommendation,
  } = props

  return (
    <Link href="/matkul">
      <div className="card-wrapper">
        <div className="card-detail">
          <h3>
            {code} - {name}
          </h3>
          <p>{desc}</p>
          <div className="tag-wrapper">
            <span className="tag">{category}</span>
            <span className="tag">Semester {semester}</span>
          </div>
        </div>

        <div className="card-rating">
          <div className="rating-wrapper">
            <p>Materi</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">{material}</p>
            </div>
          </div>

          <div className="rating-wrapper">
            <p>Tugas & Ujian</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">{assignments}</p>
            </div>
          </div>

          <div className="rating-wrapper">
            <p>Rekomendasi</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">{recommendation}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
