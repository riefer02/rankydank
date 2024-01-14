module.exports = {
  siteMetadata: {
    title: `Rankydank`,
    description: `The official website of Rankydank, a dynamic musician and YouTuber known for live-looping performances, based in Austin, Texas.`,
    author: `@rankinfetzer`,
    siteUrl: `https://rankydank.com`,
    logo: `./src/images/favicon-rankydank.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rankydank | Musician & YouTuber | Austin Texas`,
        short_name: `Rankydank`,
        start_url: `/`,
        background_color: `#f002d2`, // Updated to pink
        theme_color: `#f002d2`, // Updated to pink
        display: `minimal-ui`,
        icon: `src/images/favicon-rankydank.png`,
      },
    },
    // `gatsby-plugin-offline`, // Uncomment if you wish to use this feature
  ],
}
