import React from 'react'

export interface DescRatingProps {
  desc: string
  material: number
  assignment: number
  recommendation: number
}

export default function DescRating(props: DescRatingProps) {
  const { desc, material, assignment, recommendation } = props

  return (
    <div className="desc-rating-wrapper">
      <div className="description-container">
        <h2>Deskripsi</h2>
        <p>{desc}</p>
      </div>

      <div className="rating-container">
        <h2>Rating</h2>

        <div className="rating-detail-container">
          <div className="rating-detail-wrapper">
            <p>Materi</p>
            <div className="rating-number-wrapper">
              <div className="star"></div>
              <p>{material}</p>
            </div>
          </div>

          <div className="rating-detail-wrapper">
            <p>Tugas & Ujian</p>
            <div className="rating-number-wrapper">
              <div className="star"></div>
              <p>{assignment}</p>
            </div>
          </div>

          <div className="rating-detail-wrapper">
            <p>Rekomendasi</p>
            <div className="rating-number-wrapper">
              <div className="star"></div>
              <p>{recommendation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
