const adminOne = (req, res) =>{
    return res.status(200).send("admin First Api");
 }
 const adminTwo = (req, res) =>{
    console.log(req.body);
     return res.status(200).send("admin Second Api");
  }

  const adminThree = (req, res) =>{
    console.log(req.body);
     return res.status(200).send("admin Second Api");
  }
 
  module.exports = {adminOne,adminTwo, adminThree}