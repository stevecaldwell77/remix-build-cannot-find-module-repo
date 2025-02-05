/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: "all",
  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
