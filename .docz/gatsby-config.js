const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Sample Button',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Sample Button',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button',
          templates:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/node_modules/docz-core/dist/templates',
          docz:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz',
          cache:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/.cache',
          app:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app',
          appPackageJson:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/package.json',
          appTsConfig:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/tsconfig.json',
          gatsbyConfig:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/gatsby-config.js',
          gatsbyBrowser:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/gatsby-browser.js',
          gatsbyNode:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/gatsby-node.js',
          gatsbySSR:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/gatsby-ssr.js',
          importsJs:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app/imports.js',
          rootJs:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app/root.jsx',
          indexJs:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app/index.jsx',
          indexHtml:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app/index.html',
          db:
            '/Users/banuprakash/Documents/codes/JS/adobe/ADOBE_REACT/sample_button/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
