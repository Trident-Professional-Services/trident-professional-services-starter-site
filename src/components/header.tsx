import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React , {useEffect} from "react"
import IHeaderProps from "./IHeaderProps"
import Menu from "./Menu"
declare global{
  interface Window{ dataLayer: []; }
  var dataLayer: any[];
};

function gtag(...args:any[]){dataLayer.push(arguments);}
interface ILogoQuery {
  smalllogo: {
    childImageSharp: {
      fixed: {
        src: string
        srcSet: string
      }
    }
  }
  largelogo: {
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
      smalllogo: file(
        relativePath: { eq: "trident-transparent-background.png" }
      ) {
        childImageSharp {
          fixed(width: 45, height: 55, pngQuality: 1) {
            src
            srcSet
          }
        }
      }
      largelogo: file(
        relativePath: { eq: "trident-transparent-background.png" }
      ) {
        childImageSharp {
          fixed(width: 90, height: 110, pngQuality: 1) {
            src
            srcSet
          }
        }
      }
    }
  `);
  useEffect(()=>{
    const googleTagManagerScript  = document.createElement("script");
    googleTagManagerScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-158051282-1";
    googleTagManagerScript.async = true;
    googleTagManagerScript.onload = ()=>{
      window.dataLayer = window.dataLayer || [];      
      gtag('js', new Date());    
      gtag('config', 'UA-158051282-1');
    }
    const headElement = document.getElementsByTagName("head")[0];
    headElement.appendChild(googleTagManagerScript);
  }, [])
  return (
    <header>
      <div className="header-logo">
        <Link to={"/"}>
          <Img
            className={"logo-small"}
            loading={"eager"}
            resolutions={{
              height: 55,
              width: 45,
              src: data.smalllogo.childImageSharp.fixed.src,
              srcSet: data.smalllogo.childImageSharp.fixed.srcSet,
            }}
          />
          <Img
            className={"logo-large"}
            loading={"eager"}
            resolutions={{
              height: 110,
              width: 90,
              src: data.largelogo.childImageSharp.fixed.src,
              srcSet: data.smalllogo.childImageSharp.fixed.srcSet,
            }}
          />
        </Link>
      </div>
      <div className="header-title">
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className="header-menu">
        <Menu
          items={[
            { url: "/", text: "Home" },
            { url: "/about", text: "About" },
            { url: "/contact", text: "Contact" },
          ]}
        />
      </div>
    </header>
  )
}
