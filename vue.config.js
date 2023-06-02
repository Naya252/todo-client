const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  crossorigin: "use-credentials",
  lintOnSave: true,
  // outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "https://todo-api-86om.onrender.com",
      },
    },
  },
});
