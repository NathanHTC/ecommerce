import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import MobileNav from '../MobileNav';
import { HeaderNav } from '../Nav';

import classes from './index.module.scss';

const HeaderComponent = ({ header }: { header: Header}) => {
  return (
    <nav className={[classes.header]}>
        <Gutter>
            <Link href="/">
                <Image src="/logo-black.svg" alt="logo" width={170} height={50}/>
            </Link>

            <HeaderNav header={header}/>
            <MobileNav header={header} />
        </Gutter>
    </nav>
  )
}

export default HeaderComponent
