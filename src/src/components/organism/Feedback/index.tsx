import FeedbackCard from '@/components/molecule/FeedbackCard'
import { InferQueryOutput } from '@/utils/trpc'
import Image from 'next/image'
import React, { useState } from 'react'
import SubmissionForm from '../SubmissionForm'

interface Props extends NonNullable<InferQueryOutput<'subject.findOne'>> {
  onChange: () => void
}

export const Feedback = ({ reviews, onChange, id }: Props) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="feedback-wrapper">
      <div className="feedback-title">
        <h2>Feedback</h2>
        <Image
          onClick={() => setShowForm(!showForm)}
          className="add-icon"
          width={30}
          height={30}
          src="/icon/ic-add.svg"
          alt="add submission"
        />
      </div>

      <SubmissionForm
        show={showForm}
        subjectId={id}
        onChange={() => {
          onChange()
          setShowForm(false)
        }}
      />

      <div className="feedback-content">
        {reviews.map((review) => (
          <FeedbackCard
            review={review}
            key={`review-${review.id}`}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}

export default Feedback
