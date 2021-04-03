const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  //this graphql is not the same as the graphql
  //we've been importing, this is a function itself that we pass a string graphql query to
  //this graphql function actually returns a promise, and we'll be using async to handle it

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  //we can now do something with the response, we want to iterate over all
  //those posts and run the createPage function for each of them

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
