import { StarOutline } from '@/components/molecule/Icons/StarOutline'
import { StarSolid } from '@/components/molecule/Icons/StarSolid'
import { InferQueryOutput } from '@/utils/trpc'
import React from 'react'

export default function DescRating({
  description,
  rateSummary,
}: NonNullable<InferQueryOutput<'subject.findOne'>>) {
  return (
    <div className="desc-rating-wrapper">
      <div className="description-container">
        <h2>Deskripsi</h2>
        <p>{description}</p>
      </div>

      <div className="rating-container">
        <h2>Rating</h2>

        <div className="rating-detail-container">
          <div className="rating-detail-wrapper">
            <p>Materi</p>
            <div className="rating-number-wrapper">
              <div className="star">
                {rateSummary.material.count === 0 ? (
                  <StarOutline />
                ) : (
                  <StarSolid />
                )}
              </div>
              <p>
                {rateSummary.material.count === 0
                  ? '-'
                  : `${(
                      rateSummary.material.sum / rateSummary.material.count
                    ).toFixed(2)} (${rateSummary.material.count})`}
              </p>
            </div>
          </div>

          <div className="rating-detail-wrapper">
            <p>Tugas & Ujian</p>
            <div className="rating-number-wrapper">
              <div className="star">
                {rateSummary.assignment.count === 0 ? (
                  <StarOutline />
                ) : (
                  <StarSolid />
                )}
              </div>
              <p>
                {rateSummary.assignment.count === 0
                  ? '-'
                  : `${(
                      rateSummary.assignment.sum / rateSummary.assignment.count
                    ).toFixed(2)} (${rateSummary.assignment.count})`}
              </p>
            </div>
          </div>

          <div className="rating-detail-wrapper">
            <p>Rekomendasi</p>
            <div className="rating-number-wrapper">
              <div className="star">
                {rateSummary.recommendation.count === 0 ? (
                  <StarOutline />
                ) : (
                  <StarSolid />
                )}
              </div>
              <p>
                {rateSummary.recommendation.count === 0
                  ? '-'
                  : `${(
                      rateSummary.recommendation.sum /
                      rateSummary.recommendation.count
                    ).toFixed(2)} (${rateSummary.recommendation.count})`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
