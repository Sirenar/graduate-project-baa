// const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');
const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra');
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
	// fixBabelImports(
  // 	"import",
  //   {
  //       "libraryName": "antd",
  //       "libraryDirectory": "es",
  //       "style": "css"
  //   }
  // ),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      }
    }
  }),
  // addPostcssPlugins({
  //   postcssOptions: {}
  // })
)
