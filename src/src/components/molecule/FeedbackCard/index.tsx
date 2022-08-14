import { Review } from '@prisma/client'
import React from 'react'

export interface FeedbackCardProps {
  review: Review
}

export default function FeedbackCard({ review }: FeedbackCardProps) {
  return (
    <div className="feedback-card">
      <div className="card-header">
        <p className="header-footer">Dosen pengampu</p>
        <p className="header-footer">
          {review.lecturer ? review.lecturer : ''}
        </p>
      </div>

      <div className="card-material">
        <p className="title">Review materi</p>
        <p className="para">{review.description}</p>
      </div>

      <div className="card-assignment">
        <p className="title">Review tugas & ujian</p>
        <p className="para">{review.challenge}</p>
      </div>

      <div className="card-recommendation">
        <p className="title">Saran</p>
        <p className="para">{review.advice}</p>
      </div>

      <div className="card-footer">
        <div className="like-wrapper">
          <div className="like"></div>
          <p className="header-footer">{review.voteCount}</p>
        </div>

        <div className="header-footer">
          <p>{review.reviewer}</p>
        </div>
      </div>
    </div>
  )
}
