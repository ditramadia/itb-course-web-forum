import React from 'react'
import cx from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'
import { trpc } from '@/utils/trpc'

export interface SubmissionFormProps {
  show: boolean
  subjectId: number
  onChange: () => void
}

interface FormData {
  lecturer?: string
  reviewer?: string
  description: string
  challenge?: string
  advice?: string
  rateMaterial?: number
  rateAssignment?: number
  rateRecommendation?: number
}

export default function SubmissionForm({
  show,
  subjectId,
  onChange,
}: SubmissionFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const formClass = cx({
    'submission-form-wrapper': true,
    show,
  })

  const reviewMutation = trpc.useMutation(['review.insertOne'])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reviewMutation.mutate({
      ...data,
      subjectId,
    })
    reset()
    onChange()
  }

  return (
    <div className={formClass}>
      <h3>
        <span>New</span> Feedback
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <input
            {...register('lecturer')}
            type="text"
            className="dosen-name-input"
            placeholder="Nama Dosen Pengampu"
          />
          <input
            {...register('reviewer')}
            type="text"
            className="dosen-name-input"
            placeholder="Nama Anda"
          />
        </div>

        <div className="form-section">
          <div className="form-review">
            <label>Review materi</label>
            <textarea
              className="material-textarea"
              {...register('description', { required: true })}
            ></textarea>
          </div>

          <div className="form-review">
            <label>Review tugas & ujian</label>
            <textarea
              className="material-textarea"
              {...register('challenge')}
            ></textarea>
          </div>

          <div className="form-review">
            <label>Saran</label>
            <textarea
              className="material-textarea"
              {...register('advice')}
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <input
            {...register('rateMaterial', {
              min: 1,
              max: 5,
              valueAsNumber: true,
            })}
            type="number"
            className="dosen-name-input"
            placeholder="Rating materi"
            min={1}
            max={5}
          />
          <input
            {...register('rateAssignment', {
              min: 1,
              max: 5,
              valueAsNumber: true,
            })}
            type="number"
            className="dosen-name-input"
            placeholder="Rating tugas dan ujian"
            min={1}
            max={5}
          />
          <input
            {...register('rateRecommendation', {
              min: 1,
              max: 5,
              valueAsNumber: true,
            })}
            type="number"
            className="dosen-name-input"
            placeholder="Rating rekomendasi"
            min={1}
            max={5}
          />
        </div>

        <div className="form-section action">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
