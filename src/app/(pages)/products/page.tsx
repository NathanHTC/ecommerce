import { draftMode } from 'next/headers'
import React from 'react'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import Filters from './Filters'
import classes from './index.module.scss'

const Product = async () => {
    const { isEnabled: isDraftMode } = draftMode()
    let page: Page | null = null
    let categories: Category[] | null = null;

    try {
        page = await fetchDoc<Page>({
            collection: 'pages',
            slug: 'products',
            draft: isDraftMode
        })
    } catch(error){
        console.log(error)
    }
  return (
    <div className={classes.container}>
        <Gutter>
            <Filters />
            <Blocks blocks={layout} disableTopPadding={true}/>
        </Gutter>
    </div>
  )
}

export default Product