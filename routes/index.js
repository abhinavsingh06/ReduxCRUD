const express = require("express");
const router = express.Router();

const User = require("../models/User");

//find all users
router.get("/", async (req, res) => {
  console.log("hello");
});
module.exports = router;
