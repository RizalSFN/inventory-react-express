const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/client");

const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validatePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });

    const { password, ...userWithoutPassword } = user;

    res.status(200).json({
      success: true,
      message: "User login successfully!",
      data: {
        user: userWithoutPassword,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { login };
