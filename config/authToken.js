require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

// auth token
function authToken(req, res, next) {
  // console.log("req.body.token", req.body.token);

  const token = req.body.token.replace(/['"]+/g, "");
  // console.log("token:", token);
  // console.log(token);
  if (token == null) {
    return res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      const token = req.body.token.replace(/['"]+/g, "");
      // console.log("user jwt", token);
      if (err) {
        console.log("err", err);
        return res.sendStatus(403);
      }
      console.log("user jwt2", token);
      req.body = user;
      console.log({
        message: "auth success",
        user,
        token,
      });
      res.json({
        message: "auth success1",
        user,
        token,
        test: {
          test: "test",
        },
      });
      next(req, res);
      // console.log(req);
    });
  }
}
module.exports = authToken;
