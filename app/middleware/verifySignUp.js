const User = require('../models/user.model.js');
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
 User.findUserName(req.body.username, (err,username)=>{
   if(!!username){
    res.status(400).send({message: "Tên đăng nhập đã tồn tại!"});
      return;
   }

   User.findEmail(req.body.email, (err,email)=>{
    if(!!email){
      res.status(400).send({message: "Email đã tồn tại!"});
      return; 
     }
     next();  
   });
   
 });
}
  const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
  };
module.exports = verifySignUp;