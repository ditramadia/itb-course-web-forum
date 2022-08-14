import FeedbackCard from '@/components/molecule/FeedbackCard'
import { InferQueryOutput } from '@/utils/trpc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Feedback = ({
  reviews,
}: NonNullable<InferQueryOutput<'subject.findOne'>>) => {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-title">
        <h2>Feedback</h2>
        <Link href="/matkul/form">
          <Image
            className="add-icon"
            width={30}
            height={30}
            src="/icon/ic-add.svg"
            alt="add submission"
          />
        </Link>
      </div>

      <div className="feedback-content">
        {reviews.map((review) => (
          <FeedbackCard review={review} key={`review-${review.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Feedback
