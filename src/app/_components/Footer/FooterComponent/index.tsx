'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import Image from 'next/image'

const FooterComponent = () => {
  const pathname = usePathname();
  return (
    <footer className={
      noHeaderFooterUrls.includes(pathname) ? classes.hide : " "}
    >
      <Gutter>
        {/* inclusion is the item included in payment */}
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image 
                src={inclusion.icon}
                alt='icon'
              />
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent