const express = require("express");

const router = express.Router();

const uuid = require("uuid");
const { userList } = require("../data/userdata");

exports.getAllUsers = (req, res) => {
  res.json({
    userList,
  });
};

exports.getUserUsingId = (req, res) => {
  const id = req.params.id;

  const user = userList.find((user) => {
    return user.id == id;
  });
  if (!user) {
    return res.status(400).json({ message: "No user found this id" });
  }
  console.log(user);
  res.json({
    user: user,
  });
};

exports.addUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: uuid.v4(),
    name,
    email,
  };

  if (!name) {
    return res.status(400).json({ message: "Please enter name" });
  }
  if (!email) {
    return res.status(400).json({ message: "Please enter email" });
  }
  userList.push(newUser);
  res.json({
    message: "User created successfully",
    user: newUser,
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const userFound = userList.some((user) => user.id == id);
  if (!userFound) {
    return res.status(400).json({ message: "No user found" });
  }
  userList.forEach((user) => {
    if (user.id == id) {
      user.name = name ? name : user.name;
      user.email = email ? email : user.email;
      return res.json({ msg: "User updated successfully", user });
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const userFound = userList.some((user) => user.id === id);
  if (userFound) {
    userList = userList.filter((user) => user.id !== id);

    res.json({
      msg: "User deleted successfully",
    });
  } else {
    res.status(400).json({ message: "No user found" });
  }
};
