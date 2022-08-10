import React from 'react'

export interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader(props: PageHeaderProps) {
  const { title, subtitle } = props

  return (
    <div className="page-header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}
