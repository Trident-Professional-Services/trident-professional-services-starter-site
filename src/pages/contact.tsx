import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactPerson from "../components/ContactPerson"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <ContactPerson emailAddress={"mose@gideontech.com"} name={"Mose Richardson"} title={"Principal Operations Architect"} />
    <ContactPerson emailAddress={"idaho@tridentprofessionalservices.com"} name={"Idaho Edokpayi"} title={"Chief ProductArchitect"} twitter={"@whoisidaho"} />
  </Layout>
)

export default ContactPage
