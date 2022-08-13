import { InferQueryOutput } from '@/utils/trpc'
import { SubjectType } from '@prisma/client'
import React from 'react'

export default function MatkulHeader({
  code,
  name,
  type,
  semester,
}: NonNullable<InferQueryOutput<'subject.findOne'>>) {
  return (
    <div className="matkul-header-wrapper">
      <h1>
        {code} - {name}
      </h1>
      <div className="header-detail">
        {type && (
          <p>
            {type === SubjectType.COMPULSORY
              ? 'Mata Kuliah Wajib'
              : 'Mata Kuliah Pilihan'}
          </p>
        )}
        {semester && <p>Semester {semester}</p>}
      </div>
    </div>
  )
}
