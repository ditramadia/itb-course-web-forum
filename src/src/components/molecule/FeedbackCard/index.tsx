import { trpc } from '@/utils/trpc'
import { Review } from '@prisma/client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { StarSolid } from '@/components/molecule/Icons/StarSolid'

export interface FeedbackCardProps {
  review: Review
  onChange: () => void
}

export default function FeedbackCard({ review, onChange }: FeedbackCardProps) {
  const [voted, setVoted] = useState<boolean>(false)
  const voteMutation = trpc.useMutation(['review.incrementVote'])

  const onVote = () => {
    if (!voted) {
      voteMutation.mutate({ id: review.id })
      setVoted(true)
      onChange()
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
        <p className="rating">
          <StarSolid /> {review.rateMaterial === null ? 0 : review.rateMaterial}
        </p>
        <p className="para">{review.description}</p>
      </div>

      <div className="card-assignment">
        <p className="title">Review tugas & ujian</p>
        <p className="rating">
          <StarSolid />{' '}
          {review.rateAssignment === null ? 0 : review.rateAssignment}
        </p>
        <p className="para">{review.challenge}</p>
      </div>

      <div className="card-recommendation">
        <p className="title">Saran</p>
        <p className="rating">
          <StarSolid />{' '}
          {review.rateRecommendation === null ? 0 : review.rateRecommendation}
        </p>
        <p className="para">{review.advice}</p>
      </div>

      <div className="card-footer">
        <div className="like-wrapper">
          <div className="like" onClick={onVote}>
            <Image
              src="/icon/ic-like-stroke.svg"
              width={26}
              height={26}
              alt="like"
            />
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
