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

function pageToAlgoliaRecord() {}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
