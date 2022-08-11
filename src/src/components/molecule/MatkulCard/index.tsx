import { InferQueryOutput } from '@/utils/trpc'
import { Subject, SubjectType } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default function MatkulCard({
  id,
  code,
  name,
  description,
  credits,
  type,
  semester,
  majorId,
  rateSummary,
}: InferQueryOutput<'subject.search'>[number]) {
  return (
    <Link href={`/matkul/${id}`}>
      <div className="card-wrapper">
        <div className="card-detail">
          <h3>
            {code} - {name}
          </h3>
          <p>{description}</p>
          <div className="tag-wrapper">
            {type && (
              <span className="tag">
                {type === SubjectType.COMPULSORY
                  ? 'Matkul Wajib'
                  : 'Matkul Pilihan'}
              </span>
            )}
            {semester && <span className="tag">Semester {semester}</span>}
          </div>
        </div>

        <div className="card-rating">
          <div className="rating-wrapper">
            <p>Materi</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">
                {rateSummary.material.count === 0
                  ? '-'
                  : `${(
                      rateSummary.material.sum / rateSummary.material.count
                    ).toFixed(2)} (${rateSummary.material.count})`}
              </p>
            </div>
          </div>

          <div className="rating-wrapper">
            <p>Tugas & Ujian</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">
                {rateSummary.assignment.count === 0
                  ? '-'
                  : `${(
                      rateSummary.assignment.sum / rateSummary.assignment.count
                    ).toFixed(2)} (${rateSummary.assignment.count})`}
              </p>
            </div>
          </div>

          <div className="rating-wrapper">
            <p>Rekomendasi</p>
            <div className="rate-wrapper">
              <div className="dummy-star"></div>
              <p className="number">
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
    </Link>
  )
}
