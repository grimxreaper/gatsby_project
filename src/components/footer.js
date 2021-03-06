import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}> 
      <p>Created by {data.site.siteMetadata.author}, © 2021</p>
    </footer>
  )
}
export default Footer
