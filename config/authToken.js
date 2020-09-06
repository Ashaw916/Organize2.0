require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

// auth token
function authToken(req, res, next) {
  console.log("auth:", req.headers);
  const token = req.headers.authorization;
  // const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(req.user);
    res.json({
      message: "auth success",
      user,
    });
    next(req, res);
  });
}

// jwt.verify(req.token, "privatekey", (err, authorizedData) => {
//   if (err) {
//     //If error send Forbidden (403)
//     console.log("ERROR: Could not connect to the protected route");
//     res.sendStatus(403);
//   } else {
//     //If token is successfully verified, we can send the autorized data
//     res.json({
//       message: "Successful log in",
//       authorizedData,
//     });
//     console.log("SUCCESS: Connected to protected route");
//   }
// });

module.exports = authToken;
