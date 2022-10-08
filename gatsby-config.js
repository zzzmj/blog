module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};