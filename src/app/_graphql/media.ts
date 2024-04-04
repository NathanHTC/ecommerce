export const MEDIA_FIELDS = `#graphql
mimeType
filename
width
height
alt
caption
`

export const MEDIA = `#graphql
media {
  ${MEDIA_FIELDS}
}`
