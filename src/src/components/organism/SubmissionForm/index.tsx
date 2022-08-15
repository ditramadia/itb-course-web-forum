import Link from 'next/link'
import React, { useState } from 'react'
import cx from 'classnames'

export interface SubmissionFormProps {
  show: boolean
}

export default function SubmissionForm(props: SubmissionFormProps) {
  const { show } = props

  const formClass = cx({
    'submission-form-wrapper': true,
    show,
  })

  return (
    <div className={formClass}>
      <h3>
        <span>New</span> Feedback
      </h3>

      <form action="">
        <div className="form-section">
          <input
            required
            type="text"
            className="dosen-name-input"
            name="dosen"
            placeholder="Nama Dosen Pengampu"
          />
          <input
            required
            type="text"
            className="dosen-name-input"
            name="user"
            placeholder="Nama Anda"
          />
        </div>

        <div className="form-section">
          <div className="form-review">
            <label>Review materi</label>
            <div className="material-textarea" contentEditable="true"></div>
          </div>

          <div className="form-review">
            <label>Review tugas & ujian</label>
            <div className="material-textarea" contentEditable="true"></div>
          </div>

          <div className="form-review">
            <label>Saran</label>
            <div className="material-textarea" contentEditable="true"></div>
          </div>
        </div>

        <div className="form-section action">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
