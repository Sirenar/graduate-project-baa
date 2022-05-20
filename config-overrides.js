const { override } = require('customize-cra');
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
  // addWebpackAlias({
  //   ["react"]: path.resolve(__dirname, "node_modules/react"),
  // }),
)
