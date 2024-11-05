   const responsehandler = require("../responsehandler");
   const errorhandler = require("../errorhandler");
   const {createUser,getALLUser} = require("../models/userModel");
   const {hash} = require ("bcryptjs");
   const {v4:uuid}=require("uuid");
const userModel = require("../models/userModel");
   module.exports={
      create: async (req,res) => {
         try{

         req.body.userId=uuid();
         req.body.password= await hash (req.body.password,5);
         
         const response = await createUser(req.body);
         if(response.error){
            return errorhandler(res,response.error);
         }
            return responsehandler(res,response.response);
         }catch(error){
            return errorhandler(res,error);
         }
      },
      get: async(req,res)=>{
         try{
const response =  await getALLUser();
if (response.error){
   return errorhandler(res,response.error);   
}

            return responsehandler(res,response.response);
         }catch(error){
            return errorhandler(res,error);
         }
      },
      update:(req,res)=>{
         try{
            return responsehandler(res,req.body);
         }catch(error){
            return errorhandler(req,error);
         }
      },
      deleteuser:(req,res)=>{
         try{
            return responsehandler(res,req.query);
         }catch(error){
            return errorhandler(req,error);
         }
      }
   }   