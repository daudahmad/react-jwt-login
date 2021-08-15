const express = require("express");
const { getAuthRoutes } = require("./auth");

const getRoutes = () => {
  /* 
    create a router for all the routes of our app
    we only have /auth for now
  */
  const router = express.Router();
  router.use("/auth", getAuthRoutes());

  return router;
};

module.exports = { getRoutes };
