 const {
   override,
   useBabelRc,
   addLessLoader,
   addTslintLoader
 } = require('customize-cra');

 module.exports = override(
   useBabelRc(),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: {
       '@primary-color': '#1DA57A'
     },
   }),
   addTslintLoader()
 );