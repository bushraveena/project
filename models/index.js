// const connection = require("../dbconnection");

// const users = require("./definitions/users");
// const customer = require("./definitions/customer");
// const admin = require("./definitions/admin");
// const vendor = require("./definitions/vendor");
// const product = require("./definitions/product");
// const productVariation = require("./definitions/productVariations");
// const cart = require("./definitions/cart");
// const cartItem = require("./definitions/cartItem");
// const order = require("./definitions/order");
// const orderItem = require("./definitions/orderItem");
// const variationHasAttributes = require("./definitions/variationsHasAttributes");
// const attributes = require("./definitions/attributes");

// //RELATIONS
// //VENDORPRODUCT 1:M

// vendor.hasMany(product, { foreignKey: "vendorId" });
// product.belongsTo(vendor, { foreignKey: "vendorId" });

// //product pv 1:m

// product.hasMany(productVariation, {
//   foreignKey: "productId",
//   as: "productVariation",
// });
// productVariation.belongsTo(product, { foreignKey: "productId" });

// // variation attributes m : m through variationhasattributes
// productVariation.hasMany(variationHasAttributes, {
//   foreignKey: "productVariationId",
//   as: "productVariation",
// });
// variationHasAttributes.belongsTo(productVariation, {
//   foreignKey: "productVariationId",
//   as: "variationHasAttributes",
// });
// attributes.hasMany(variationHasAttributes, {
//   foreignKey: "attributesId",
//   as: "attributes",
// });
// variationHasAttributes.belongsTo(attributes, {
//   foreignKey: "attributesId",
// });

// //relations
// const models = {
//   users,
//   customer,
//   admin,
//   vendor,
//   product,
//   productVariation,
//   cart,
//   cartItem,
//   order,
//   orderItem,
// };
// const db = {};
// db.connection = connection;
// connection.models = models;
// module.exports = { db, models };


/ const sequelize = require("../dbConnection");
const connection = require("../dbConnection");

const users =require("./definitions/users");
const customer =require("./definitions/customer");
const admin =require("./definitions/admin");
const vendor =require("./definitions/vendor");
const product =require("./definitions/product");
const attributes= require("./definitions/attributes");
const variationHasAttributes = require("./definitions/variationHasAttribute");
const productVariations =require("./definitions/productVariations");


//relations

// vendor-product 1:M
vendor.hasMany(product, { as: 'Product' ,foreignKey: 'vendorId'});
product.belongsTo(vendor, { as: 'vendor',foreignKey: 'vendorId' });

// product-productVariations 1:M
product.hasMany(productVariations, { as: 'variations' });
productVariations.belongsTo(product, { as: 'product' });

// productVariations-attributes M:M through variationHasAttributes
productVariations.belongsToMany(attributes, {
  through: variationHasAttributes,
  as: 'attributes',
});
attributes.belongsToMany(productVariations, {
  through: variationHasAttributes,
  as: 'variations',
});

const models = {users,customer,admin,vendor,product,attributes,variationHasAttributes};

const db = {};

db.connection = connection; // created a key sequlize and provided it sequelize as a value
connection.models = models;// created a key models in sequelize and passed models as a value

module.exports = {db,models};