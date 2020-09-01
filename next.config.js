const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/tsfresh-website-frontend' : ''

module.exports = {
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        'process.env.FRESH_API_URL': JSON.stringify("https://backend-kus76h2pea-uc.a.run.app/extraction"),
      }),
    )

    return config
  },
}