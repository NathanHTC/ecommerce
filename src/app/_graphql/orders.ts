import { PRODUCT } from './products'

export const ORDERS = `#graphql
  query Orders {
    Orders(limit: 300) {
      docs {
        id
      }
    }
  }
`

export const ORDER = `#graphql
  query Order($id: String ) {
    Orders(where: { id: { equals: $id}}) {
      docs {
        id
        orderedBy
        items {
          product ${PRODUCT}
          title
          priceJSON
        }
      }
    }
  }
`
