import Link from 'next/link'
import React from 'react'
import cx from 'classnames'

export interface ItemProps {
  destination: string
  href: string
  active?: boolean
}

export default function Item(props: ItemProps) {
  const { destination, href, active } = props

  const itemClass = cx({
    item: true,
    active,
  })

  return (
    <Link href={href}>
      <div className={itemClass}>
        <a>{destination}</a>
      </div>
    </Link>
  )
}
