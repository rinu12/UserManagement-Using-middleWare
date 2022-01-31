const express = require("express");
const {
  getAllUsers,
  getUserUsingId,
  addUser,
  updateUser,
  deleteUser,
} = require("../services/users.service");

const router = express.Router();
router.get("/", getAllUsers);
router.get("/:id", getUserUsingId);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
