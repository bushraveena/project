const responseHandler = require("../responseHandler");
const { createVendor } = require("../models/vendorModel");

module.exports = {
  create: async (req, res) => {
    try {
      const response = await createVendor(req.body);

      console.log(response);
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};
