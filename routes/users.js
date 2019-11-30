const express = require("express");
const router = express.Router();

const User = require("../models/User");

//find all users
router.get("/", async (req, res) => {
  try {
    const user = User.find({});
    res.status(200).json({ status: true, error });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
});
