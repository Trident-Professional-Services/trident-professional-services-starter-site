module.exports = {
  siteMetadata: {
    title: `Trident Professional Services`,
    description: `Trident Professional Services Starter Site`,
    author: `idaho@tridentprofessionalservices.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E6CE6F`,
        theme_color: `#1D3C6A`,
        display: `minimal-ui`,
        icon: `src/images/trident-transparent-background-Square900px.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `@idahoedokpayi/gatsby-theme-corporate-homepage`
  ],
}
