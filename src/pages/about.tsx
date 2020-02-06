import React from "react"
import Emphasis from "../components/emphasis"
import Layout from "../components/layout"
import SEO from "../components/seo"
const AboutPage = () => (
  <Layout>
    <SEO title="About" /> 
    <h1>About Us</h1>
    <p>
      Trident Professional Services' mission is to help organizations grow
      through better software products. We are a Microsoft shop developing 
      solutions with SharePoint, Azure, .NET, and TypeScript, 
      but we have come to the realization that the technology 
      is basically irrelevant if the solution doesn't do what the customer needs. 
      My partner and I have had relatively long careers in IT and suffered through
      multiple project failures, layoffs, long travel, and so many grumpy bosses.
      We've learned a few things along the way.</p>
      <p>
      <h2>Projects don't fail for lack of skill</h2> 
      Projects fail for so many reasons, but ultimately 
      projects and software doesn't need to be sexy to succeed. 
      The most necessary ingredients for success are clear goals 
      and a realistic plan for delivering the client's goals.
      </p>
      <p>
        <h2>Projects can fail even when they succeed</h2>
        Often times, a team can deliver exactly what was promised, 
        the project owner can be estatic about the results, and the 
        project can still be a colossal flop that kills the company 
        who started it. 
      </p>
      <p>
        <h2>Clients spend too much time worrying about buzzwords</h2>
        IT Departments so often latch onto the latest technology or 
        the latest buzzword and decide that "We must have <Emphasis>this</Emphasis>." 
        We believe that more important than the latest sexy resume stuffer, 
        or the sexiest AI technology, is remembering why you want that thing -{" "}
        <Emphasis>the problem you are solving.</Emphasis> 
      </p>
      <p>
        <h2>The Light bulb moment</h2>
        There was a particular moment that brought all of this home for me the hardest - 
        I had just been laid off 5 days before closing a deal to buy a charming home in downtown Grand Junction, CO.
        I needed work desperately and a former co-worker kindly offered me some. 
        If I am honest, the project gave me misgivings and I wasn't in the meetings with the client 
        so I got all the requirements secondhand. The project failed. 
        Looking back, I wouldn't ever do a project like that again and no one was happy with the outcome.
        The critical take away from that project over all is that I needed to own the client relationship 
        and make sure everyone agrees on the value being delivered. We deliver.
      </p>
      <p>
        <h2>Who do we work with?</h2>
        We do not work with clients who we do not believe we can provide value to. 
        Trident Professional Services's goal, our mission is to see your business or organization grow.
        In order to do that we are going to seek to establish a strong working relationship with our clients.
        So if we chose to work with you it isn't just that we want your money - 
        it is because we believe in you and your organization and we want to see you succeed. We think you are special.
      </p>
      <p>
        <h2>What We Do and Don't do</h2>
        We don't do projects. We don't treat our consultants as interchangeable machines.
        We do <Emphasis>products</Emphasis>. We establish long lasting relationships with our clients and
        collaborate on products to deliver clearly established value. We adopt technology: the cloud, 
        JAMStack, AI, etc only when we can clearly establish the value to our clients.
      </p>
  </Layout>
)

export default AboutPage
