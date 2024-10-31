const joi= require("joi");
const loginValidator=joi.object({
    username:joi.string().alphanum().required(),
    password:joi.string().min(8).max(18).required(),
})
module.exports={
    createValidator : async(req,res,next)=>{
        try{
            await loginValidator.validateAsync(req.body);
            next();
        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    }
}