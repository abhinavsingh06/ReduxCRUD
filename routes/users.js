const express = require("express");
const router = express.Router();

const User = require("../models/User");

//find all users
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
});

//add a user
router.post("/register", async (req, res) => {
  try {
    if (!req.body.email || !req.body.name) {
      throw new Error("email and name nort found");
    } else {
      const user = await User.create(req.body);
      res.status(200).json({ status: true, user });
    }
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
});

//update user
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(202).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndDelete(id, req.body);
    res.status(202).json({ status: true, user });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
});

module.exports = router;
