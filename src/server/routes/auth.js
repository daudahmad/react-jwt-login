const express = require("express");
const { authenticateUser } = require("../helpers/user-helper");
const { generateAccessToken } = require("../helpers/jwt-helper");

// Hardcoding the expiry time to 1h, can be made configurable if required
const EXPIRES_IN = "1h";

const getAuthRoutes = () => {
  const router = express.Router();
  router.post("/login", login);
  return router;
};

const login = (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate that username and password are provided
    if (!username || !password) {
      return badRequestError(res);
    }

    // Authenticate the user and return accessToken if successful
    const isAuthenticated = authenticateUser(req.body);
    if (isAuthenticated) {
      const successResponse = createSuccessResponse(username);
      return res.status(200).json(successResponse);
    }

    // Otherwise return 401 unauthorized error
    return unauthorizedError(res);
  } catch (error) {
    console.error(error);
    return internalError(res);
  }
};

const createSuccessResponse = (username) => {
  const accessToken = generateAccessToken(username, EXPIRES_IN);

  return {
    access_token: accessToken,
    expires_in: EXPIRES_IN,
  };
};

const badRequestError = (res) => {
  res.status(400).json({
    message: "Username or password not provided",
  });
};

const unauthorizedError = (res) => {
  res.status(401).json({
    message: "Invalid username or password",
  });
};

const internalError = (res) => {
  res.status(500).json({
    message: "Internal server error",
  });
};

module.exports = { getAuthRoutes, login };
