const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token =
    req.body.token || req.headers["x-access-token"] || req.params.token;
  if (token) {
    jwt.verify(token, req.app.get("api_secret_key"), function(err, decoded) {
        if (err) {
            res.end("Failed to authenticate token...")
        } else {
            console.log(decode);
            next();
        }
      });
  } else {
    res.end("No token provied.");
  }
};




//Zerrin
// const jwt = require('jsonwebtoken')
// module.exports = (req,res,next)=>{
//     const token =req.body.token || req.headers['x-access-token'] || req.params.token

// if(token){
//   jwt.verify(token, req.app.get("api_secret_key"), function(err, decoded) {
//     if (err) {
//         res.end("Failed to authenticate token...")
//     } else {
//         // console.log(decoded);
//         next();
//     }
//   });
// }else{
//   res.end("No token provided")
//  }
// };

