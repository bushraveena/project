const {models} = require("./index");

module.exports = {
    createVendor : async (body) =>{
        try{
            console.log("checkedd 3");
            const vendor = await models.vendor.create({...body});
            
            console.log("checkedd 4");
        
          return{
                response :vendor,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },


}