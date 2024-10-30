module.exports=(res,data)=>{
    try{
        return res.send({
            status:200,
            data:data
        });
    }catch(error){
        return res.send({
            status:400,
            message:error,
            data:{}
        });
    }
}