const joi =require("joi");
const responsehandler = require("../responsehandler");
const createUserValidator =joi.object({
    name : joi.string().min(3).max(34).required(),
    username : joi.string().alphanum().required(),
    password : joi.string().min(8).max(18).required(),
})

const create =joi.object({
    name : joi.string().required(),
    username : joi.string().required(),
    password : joi.string().required(),
});

const update =joi.object({
    name : joi.string(),
    username : joi.string().required(),
});

const getDelete =joi.object({
    username : joi.string().required(),
});
module.exports ={
    // createUserSchema
    //validator function is promise thats shy we are using async/await
    Create : async (req,res,next)=>{
        try{
            await create.validateAsync(req.body);
            next(); // usinf this because in userRouter we have to move to next function createUser in parameter
        }catch(error){
            return responsehandler(res,{error:error.message});
        }
    },

    Update : async (req,res,next)=>{
        try{
            await update.validateAsync(req.body);
            next();
        }catch(error){
            return responsehandler(res,{error:error.message});
        }
    },

    GetDelete : async (req,res,next)=>{
        try{
            await getDelete.validateAsync(req.query);
            next();
        }catch(error){
            return responsehandler(res,{error:error.message});
        }
    }

}