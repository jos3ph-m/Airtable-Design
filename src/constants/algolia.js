const airtableQuery = `
{
  allAirtable(filter: {table: {eq: "Projects"}}) {
    nodes {
      id
      data {
        date
        name
        type
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`

const queries = [
  {
    query: '',
    transformer: '',
  },
]

module.exports = queries
