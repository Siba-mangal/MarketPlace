require("dotenv").config({ path: "server/.env" });
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    //get token from header
    const token = req.header("Authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};
