import Link from 'next/link'
import React from 'react'

export interface ItemProps {
  destination: string
  href: string
}

export default function Item(props: ItemProps) {
  const { destination, href } = props

  return (
    <Link href={href}>
      <div className="item">
        <a>{destination}</a>
      </div>
    </Link>
  )
}
