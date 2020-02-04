/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "./header"
import ILayoutProps from "./ILayoutProps"
import "../sass/index.scss";

interface ITitleQuery {
  site: {
    siteMetadata: {
      title: string
    }
  }
}
const Layout = (props: ILayoutProps) => {
  const { children } = props
  const data: ITitleQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={"wrapper"}>
          <main>{children}</main>
        </div>
        <footer className="trident-starter">
          © {new Date().getFullYear()} Trident Professional Services
        </footer>
      </div>
  )
}

export default Layout
