// routes/blogPostRoutes.js
const express = require('express');
const blogPostController = require('../controllers/blogsController');
const trycatchmiddleware = require('../middlewares/tryCatchMiddleware');
const router = express.Router();

router.post('/create', trycatchmiddleware(blogPostController.createBlogPost));
router.get('/allposts', trycatchmiddleware(blogPostController.getBlogPosts));
router.get('/:id', trycatchmiddleware(blogPostController.getBlogPostById));
router.put('/:id', trycatchmiddleware(blogPostController.updateBlogPost));
router.delete('/:id', trycatchmiddleware(blogPostController.deleteBlogPost));
router.get('/user/:userId/posts', trycatchmiddleware(blogPostController.getBlogPostsByUserId));

module.exports = router;
