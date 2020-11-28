var plugins = [{
      plugin: require('C:/Users/DELL/Desktop/gatsby_wb/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/DELL/Desktop/gatsby_wb/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/DELL/Desktop/gatsby_wb/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"kwlmhjmw","dataset":"production","watchMode":true,"token":"skoER90aJszClIkNKGLTBF9pM6PQS1tFt3EkRkFgvoY7j4PBcrAZUAMV57W1cUB5RMpq8wgWOnyssf1BwEQA8yfDuGp8SC1rraHhT7Ldfy3gDo71Lb7U9hxxNqcaOWjYYYofCGsLKRZyTz0jQEbJkkicICR8A4VoC18V9qcuO6yEpaX0aN91"},
    },{
      plugin: require('C:/Users/DELL/Desktop/gatsby_wb/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
