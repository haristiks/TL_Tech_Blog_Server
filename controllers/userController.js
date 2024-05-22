// controllers/userController.js
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");

const saltRounds = 10; // Define the number of salt rounds for bcrypt

// Create a new user
exports.createUser = async (req, res, next) => {
  const { password, ...rest } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({ ...rest, password: hashedPassword });
  await user.save();
  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: user,
  });
};

// Get all users
exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: users,
  });
};

// Get a user by ID
exports.getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return next(
      new AppError(
        "User not found",
        "The user with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: user,
  });
};

// Update a user by ID
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user)
    return next(
      new AppError(
        "User not found",
        "The user with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: user,
  });
};

// Delete a user by ID
exports.deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user)
    return next(
      new AppError(
        "User not found",
        "The user with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "User deleted successfully",
  });
};
