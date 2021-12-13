const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const webpack = require('webpack')
const path = require('path')

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  env: {
    limeApiKey:
      '565DDB898A0382B042FE3D88A959A6BDBD8BEDD44DC7BF56EAD0088FA5A99DABF525649D44B7B5377DDA',
    limeApiUrlDeal:
      'https://stadjatten.lime-crm.com/stadjatten/api/v1/limeobject/deal/',
    limeApiUrlCompany:
      'https://stadjatten.lime-crm.com/stadjatten/api/v1/limeobject/company/',
    limeApiUrlPerson:
      'https://stadjatten.lime-crm.com/stadjatten/api/v1/limeobject/person/'
  }
})
