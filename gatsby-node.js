const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       const {
  //         fixed: { src },
  //         title,
  //       } = node.data.target

  //       return <img src={src} alt={title} />
  //     },
  //   },
  // }

  //we can now do something with the response, we want to iterate over all
  //those posts and run the createPage function for each of them

  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      },
    })
  })
}
