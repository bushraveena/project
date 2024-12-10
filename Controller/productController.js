const responseHandler = require("../responseHandler");
const { createProduct, getAllProduct } = require("../models/productModel");

module.exports = {
  create: async (req, res) => {
    try {
      //in future we will use this
      // req.body.vendorId = req.vendor.vendorId;
      const response = await createProduct(req.body);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getAll: async (req, res) => {
    try {
      const { userId } = req.user;
      console.log("useriddd", userId);
      vendorId = "d56b1497-4bff-4c34-b6a3-9b270f999671";
      const response = await getAllProduct(vendorId);
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};
