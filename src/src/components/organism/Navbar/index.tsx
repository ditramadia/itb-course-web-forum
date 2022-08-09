import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import cx from 'classnames'

import Item from './Item'

export default function Navbar() {
  const [active, setActive] = useState(false)
  const classHamburger = cx({
    hamburger: true,
    active,
  })
  const classMobileMenu = cx({
    'nav-mobile-items-wrapper': true,
    active,
  })

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <Link href="/">
            <div className="logo-container">
              <div id="logo"></div>
            </div>
          </Link>
          <div className="items-wrapper">
            <Item destination="help" href="/help" />
            <Item destination="about" href="/about" />
          </div>

          {/* Mobile */}
          <div className={classHamburger} onClick={() => setActive(!active)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={classMobileMenu}>
        <Item destination="help" href="/help" />
        <Item destination="about" href="/about" />
      </div>
    </nav>
  )
}
