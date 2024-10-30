    const userOne = (req, res) => {
    return res.send({
        message:"user added successfully",
        data: req.body
    })
 };
 
 const userTwo = (req, res) => {
    return res.status(200).send("User Second Api");
 };
 
 const loginUser = (req, res) => {
    console.log(req.body);
    return res.status(200).send("User Login Successfully");
 };
                                
 module.exports = { userOne, userTwo, loginUser };