/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      // This type will contain remote schema Query type
      typeName: "TodoType",
      // This is the field under which it's accessible
      fieldName: "todos",
      // URL to query from
      url: "http://localhost:9080/graphql",
    },
  },
  ],
  siteMetadata: {
    title: 'Todo App'
  }
}
