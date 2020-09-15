require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

// auth token
function authToken(req, res, next) {
  // console.log("req.body.token", req);
  const token = req.body.token.replace(/['"]+/g, "");
  // console.log("token:", token);
  // console.log(token);
  if (token == null) {
    return res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      // const token = req.body.token.replace(/['"]+/g, "");
      // console.log("user jwt", token);
      if (err) {
        console.log("err", err);
        return res.sendStatus(403);
      }
      // res.send("auth");
      next();
    });
  }
}
module.exports = authToken;
