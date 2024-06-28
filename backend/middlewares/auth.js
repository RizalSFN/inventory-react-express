const express = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["Authorization"];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user_id = decoded.id;
    next();
  });
};

module.exports = verifyToken;
