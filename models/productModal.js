onst {models} = require("./index");

module.exports = {
    createProduct : async (body) =>{
        try{
            const product = await models.product.create({...body});

          return{
                response :product,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },

    getAllProduct : async (vendorId) =>{
        try{
            const product = await models.product.findAll({
                where :{vendorId: vendorId},
                attributes:["productId","productName","description"],
                include:{
                    model:models.vendor,
                    as: "vendor",
                    attributes:["vendorId","username"],
                }
            });
            return{
                response :product,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },


}