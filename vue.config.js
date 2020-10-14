module.exports = {
  lintOnSave: true,
  devServer: {
    disableHostCheck: true
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/WEB_InpenDansim-INPENDANSIM/" : "/",
  outputDir: "docs",
  transpileDependencies: ["vuetify"]
};
