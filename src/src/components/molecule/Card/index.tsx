import React from 'react'

export interface CardProps {
  id: string
  code: string
  name: string
  desc: string
  category: string
  semester: string
  material: number
  assignments: number
  recommendation: number
}

export default function Card(props: CardProps) {
  const {
    id,
    code,
    name,
    desc,
    category,
    semester,
    material,
    assignments,
    recommendation,
  } = props

  return (
    <div className="card-wrapper">
      <div className="card-detail">
        <h3>
          {code} - {name}
        </h3>
        <p>{desc}</p>
        <div className="tag-wrapper">
          <span className="tag">{category}</span>
          <span className="tag">{semester}</span>
        </div>
      </div>
      <div className="card-rating"></div>
    </div>
  )
}
