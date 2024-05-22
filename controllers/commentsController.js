// controllers/commentController.js
const Comment = require("../models/commentSchema");
const AppError = require("../utils/appError");

// Create a new comment
exports.createComment = async (req, res, next) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.status(201).json({
    status: "success",
    message: "Comment created successfully",
    data: comment,
  });
};

// Get all comments
exports.getComments = async (req, res, next) => {
  const comments = await Comment.find()
    .populate("postId", "title")
    .populate("userId", "username email");
  res.status(200).json({
    status: "success",
    message: "Comments fetched successfully",
    data: comments,
  });
};

// Get a comment by ID
exports.getCommentById = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id)
    .populate("postId", "title")
    .populate("userId", "username email");
  if (!comment)
    return next(
      new AppError(
        "Comment not found",
        "The comment with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "Comment fetched successfully",
    data: comment,
  });
};

// Update a comment by ID
exports.updateComment = async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!comment)
    return next(
      new AppError(
        "Comment not found",
        "The comment with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "Comment updated successfully",
    data: comment,
  });
};

// Delete a comment by ID
exports.deleteComment = async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  if (!comment)
    return next(
      new AppError(
        "Comment not found",
        "The comment with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "Comment deleted successfully",
  });
};
