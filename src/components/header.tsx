import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import IHeaderProps from "./IHeaderProps"
import Menu from "./Menu"

interface ILogoQuery {
  logo: {
    childImageSharp: {
      fixed: {
        src: string
        srcSet: string
      }
    }
  }
}
export default function Header(props: IHeaderProps) {
  const { siteTitle } = props
  const data: ILogoQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "trident-transparent-background.png" }) {
        childImageSharp {
          fixed(width: 45, height: 55, pngQuality: 1) {
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="header-logo">
        <Img
          loading={"eager"}
          resolutions={{
            height: 55,
            width: 45,
            src: data.logo.childImageSharp.fixed.src,
            srcSet: data.logo.childImageSharp.fixed.srcSet,
          }}
        />
      </div>
      <div className="header-title">
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className="header-menu">
        <Menu
          items={[
            { url: "/", text: "Home" },
            { url: "#", text: "About" },
            {url:"#", text:"Contact"}
          ]}
        />
      </div>
    </header>
  )
}
