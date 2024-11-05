const { response } = require("express");
const {models}= require("./index");
module.exports = {
     createUser:async (body) => {
        try{
        const user = await models.users.create({...body,});
        return {
            response:user,
        };
        }catch (error){
            return{
                error: error.errors[0].message,
            };
        }
     },

getALLUser:async ( ) => {
    try{
    const user = await models.users.findALL({...body,});
    return {
        response:user,
    };
    }catch (error){
        return{
            error: error.errors[0].message,
        };
    }
 },
};