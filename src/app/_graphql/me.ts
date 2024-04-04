import { CART } from './cart'

export const ME_QUERY = `#graphql
query {
  meUser {
    user {
      id
      email
      name
      ${CART}
      roles
    }
    exp
  }
}`
