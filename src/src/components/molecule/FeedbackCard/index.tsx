import { trpc } from '@/utils/trpc'
import { Review } from '@prisma/client'
import React, { useCallback, useState } from 'react'
import { ArrowUp } from '../Icons/ArrowUp'

export interface FeedbackCardProps {
  review: Review
}

export default function FeedbackCard({
  review: sourceReview,
}: FeedbackCardProps) {
  const [voted, setVoted] = useState<boolean>(false)
  const [review, setReview] = useState<Review>(sourceReview)
  const voteMutation = trpc.useMutation(['review.incrementVote'])

  const onVote = () => {
    if (!voted) {
      voteMutation.mutate({ id: review.id })
      setReview((prev) => {
        return {
          ...prev,
          voteCount: prev.voteCount + 1,
        }
      })
      setVoted(true)
    }
  }

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
          <div className="like" onClick={onVote}>
            <ArrowUp />
          </div>
          <p className="header-footer">{review.voteCount}</p>
        </div>

        <div className="header-footer">
          <p>{review.reviewer}</p>
        </div>
      </div>
    </div>
  )
}
