// controllers/blogPostController.js
const BlogPost = require("../models/blogSchema");
const Comment = require("../models/blogSchema");
const AppError = require("../utils/appError");

// Create a new blog post
exports.createBlogPost = async (req, res, next) => {
  const blogPost = new BlogPost(req.body);
  await blogPost.save();
  res.status(201).json({
    status: "success",
    message: "Blog post created successfully",
    data: blogPost,
  });
};

// Get all blog posts
exports.getBlogPosts = async (req, res, next) => {
  const blogPosts = await BlogPost.find().populate("userId", "username email");
  res.status(200).json({
    status: "success",
    message: "Blog posts fetched successfully",
    data: blogPosts,
  });
};

// Get a blog post by ID
exports.getBlogPostById = async (req, res, next) => {
  const blogPost = await BlogPost.findById(req.params.id).populate(
    "userId",
    "username email"
  );
  if (!blogPost)
    return next(
      new AppError(
        "Blog post not found",
        "The blog post with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "Blog post fetched successfully",
    data: blogPost,
  });
};

// Get blog posts by user ID
exports.getBlogPostsByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  const blogPosts = await BlogPost.find({ userId }).populate(
    "userId",
    "username email"
  );
  if (!blogPosts.length)
    return next(
      new AppError("No blog posts found", "The user has no blog posts", 404)
    );
  res.status(200).json({
    status: "success",
    message: "Blog posts fetched successfully",
    data: blogPosts,
  });
};

// Update a blog post by ID
exports.updateBlogPost = async (req, res, next) => {
  const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!blogPost)
    return next(
      new AppError(
        "Blog post not found",
        "The blog post with the given ID was not found",
        404
      )
    );
  res.status(200).json({
    status: "success",
    message: "Blog post updated successfully",
    data: blogPost,
  });
};

// Delete a blog post by ID and associated comments
exports.deleteBlogPost = async (req, res, next) => {
  const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
  if (!blogPost)
    return next(
      new AppError(
        "Blog post not found",
        "The blog post with the given ID was not found",
        404
      )
    );

  await Comment.deleteMany({ postId: req.params.id });

  res.status(200).json({
    status: "success",
    message: "Blog post and associated comments deleted successfully",
  });
};
