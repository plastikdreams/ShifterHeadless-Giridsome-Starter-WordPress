module.exports = {
  siteName: 'Shifter Headless',
  siteDescription: 'Shifter Headless + Gridsome + AWS Amplify Console',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
       // baseUrl: process.env.WORDPRESS_URL, // required
      baseUrl: "https://7abbcfb84b20f47ab4f47a4f348d90943bf24bb5.devhl-a.getshifter.co/",
        typeName: 'WordPress', // GraphQL schema name (Optional)
      apiBase: 'wp-json',
      perPage: 10,
      concurrent: 1,
      }
    }
  ]
}
