import { draftMode } from 'next/headers'
import React from 'react'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import CategoryCard from '../../_components/Categories/CategoryCard'
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
        categories = await fetchDocs<Category>('categories')
    } catch(error){
        console.log(error)
    }
  return (
    <div className={classes.container}>
        <Gutter>
            <Filters />
            <Blocks blocks={page.layout} disableTopPadding={true}/>
        </Gutter>
    </div>
  )
}

export default Product