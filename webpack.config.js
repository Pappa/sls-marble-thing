const webpack = require("webpack");
const slsw = require("serverless-webpack");
const path = require("path");

module.exports = (async () => {
  const accountId = await slsw.lib.serverless.providers.aws.getAccountId();
  return {
    entry: path.join(__dirname, "main.js"),
    target: "node",
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    plugins: [
      new webpack.DefinePlugin({
        AWS_ACCOUNT_ID: `${accountId}`
      })
    ] //,
    //module: {
    //loaders: [ ... ]
    //}
  };
})();
