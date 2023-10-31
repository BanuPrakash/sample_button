const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/.cache/dev-404-page.js"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/src/pages/404.js")))
}

