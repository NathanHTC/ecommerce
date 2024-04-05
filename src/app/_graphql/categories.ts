export const PRODUCT_CATEGORIES = `#graphql
categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `#graphql
  query Categories {
    Categories(limit:300){
      docs {
        id
        title
        media {
          alt
          width
          height
          url
        }
      }
    }
  }
`