import React from 'react'

export interface FeedbackCardProps {
  dosen: string
  materialReview: string
  assignmentReview: string
  recommendationReview: string
  like: number
  user: string
}

export default function FeedbackCard(props: FeedbackCardProps) {
  const {
    dosen,
    materialReview,
    assignmentReview,
    recommendationReview,
    like,
    user,
  } = props

  return (
    <div className="feedback-card">
      <div className="card-header">
        <p className="header-footer">Dosen pengampu</p>
        <p className="header-footer">{dosen}</p>
      </div>

      <div className="card-material">
        <p className="title">Review materi</p>
        <p className="para">{materialReview}</p>
      </div>

      <div className="card-assignment">
        <p className="title">Review tugas & ujian</p>
        <p className="para">{assignmentReview}</p>
      </div>

      <div className="card-recommendation">
        <p className="title">Saran</p>
        <p className="para">{recommendationReview}</p>
      </div>

      <div className="card-footer">
        <div className="like-wrapper">
          <div className="like"></div>
          <p className="header-footer">{like}</p>
        </div>

        <div className="header-footer">
          <p>{user}</p>
        </div>
      </div>
    </div>
  )
}
