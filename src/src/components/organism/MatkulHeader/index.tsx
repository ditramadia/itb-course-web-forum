import React from 'react'

export interface MatkulHeaderProps {
  id: string
  code: string
  name: string
  category: string
  semester: string
}

export default function MatkulHeader(props: MatkulHeaderProps) {
  const { id, code, name, category, semester } = props

  return (
    <div className="matkul-header-wrapper">
      <h1>
        {code} - {name}
      </h1>
      <div className="header-detail">
        <p>{category}</p>
        <p>Semester {semester}</p>
      </div>
    </div>
  )
}
