module.exports = {
  siteMetadata: {
    title: `Mountains by Juan Helbert`,
    description: `Mountains is a Progressive Web App made with Gatsby. You can add it to your main screen and feel it like a real app!`,
    author: `Juan Helbert`,
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
        name: `Mountains`,
        short_name: `Mountains`,
        start_url: `/`,
        background_color: `#131117`,
        theme_color: `#131117`,
        display: `standalone`,
        icon: `src/images/mountains.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
