import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Intranet Product Consulting</h1>
    <p>Let's build something great together.</p>
    <Link className={"call-to-action"} to="/about">Learn more about us</Link>
  </Layout>
)

export default IndexPage
