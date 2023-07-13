var jwt = require("jsonwebtoken");
const User = require('../Models/User');

const verifyToken = async(req, res, next) => {
  // Get the user from the Jwt token and add id to req object
  const {token} = req.cookies;
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
    
  } catch (error) {
   return res.status(401).json('Not a Valid User!');
  }
};

module.exports = verifyToken;
