const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomasroman/Desktop/Gatsby-Repositories/Gatsby-Store/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thomasroman/Desktop/Gatsby-Repositories/Gatsby-Store/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thomasroman/Desktop/Gatsby-Repositories/Gatsby-Store/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/thomasroman/Desktop/Gatsby-Repositories/Gatsby-Store/src/pages/success.js"))),
  "component---src-pages-canceled-js": hot(preferDefault(require("/Users/thomasroman/Desktop/Gatsby-Repositories/Gatsby-Store/src/pages/canceled.js")))
}

