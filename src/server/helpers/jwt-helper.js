const jwt = require("jsonwebtoken");

const generateAccessToken = (username, expiresIn) => {
  return jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn,
  });
};

module.exports = { generateAccessToken };
