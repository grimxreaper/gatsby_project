const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    
    createNodeField({ //to add the new field onto the node
        node, //the node we're trying to create the new field on
        name: 'slug',
        value: slug 
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions 
    const blogTemplate = path.resolve('./src/templates/blog.js')

    //1. get path to template
    //2. get markdown data
    //3. create new pages
}