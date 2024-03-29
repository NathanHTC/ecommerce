'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'

const FooterComponent = () => {
  const pathname = usePathname();
  return (
    <footer className={
      noHeaderFooterUrls.includes(pathname) ? classes.hide : " "}
    >
      <Gutter>
        <ul className={classes.inclusions}>

        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent