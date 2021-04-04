import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return ( <img alt={alt} src={url}/> )
      }
    }
  }
  return (
    <Layout>
      <h1>{props.data.contenfulBlogPost.title}</h1>
      <p>{props.data.contenfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contenfulBlogPost.body.json)}
    </Layout>
  )
}

export default Blog
