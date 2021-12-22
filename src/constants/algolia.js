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

function pageToAlgoliaRecord({ id, data: { name, type, date, image } }) {
  return {
    objectID: id,
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
