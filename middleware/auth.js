const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {//importing only function
  const token = req.header("token");//we'll provide it(token) to varify in postman in headers 
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;//after next () req.will bes same in that next function()
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
}