 const {
   override,
   fixBabelImports,
   babelInclude,
   addLessLoader,
   addTslintLoader
 } = require('customize-cra');

 const path = require("path");

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   babelInclude([
     path.resolve("src")
   ]),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: {
       '@primary-color': '#1DA57A'
     },
   }),
   addTslintLoader()
 );