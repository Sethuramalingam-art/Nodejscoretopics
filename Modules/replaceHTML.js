// 3 types of modules

// Core modules => fs, http, readline
// custom modules => user defined modules when any javascript file which return using module.exports or exports that is custom modules
// replaceHTML.js is custom module
// third party modules => express, mongoose

module.exports = function (template, product) {
  let output = template.replace("{{%IMAGE%}}", product.productImage);

  return output;
};
