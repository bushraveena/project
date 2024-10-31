   const responsehandler = require("../responsehandler");
   const errorhandler = require("../errorhandler");
   module.exports={
      create:(req,res)=>{
         try{
            return responsehandler(res,req.body);
         }catch(error){
            return errorhandler(req,error);
         }
      },
      get:(req,res)=>{
         try{
            return responsehandler(res,req.query);
         }catch(error){
            return errorhandler(req,error);
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