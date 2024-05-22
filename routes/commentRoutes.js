// routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/commentsController');
const trycatchmiddleware = require('../middlewares/tryCatchMiddleware');
const router = express.Router();

router.post('/addcomment', trycatchmiddleware(commentController.createComment));
router.get('/allcomments', trycatchmiddleware(commentController.getComments));
router.get('/:id', trycatchmiddleware(commentController.getCommentById));
router.put('/:id', trycatchmiddleware(commentController.updateComment));
router.delete('/:id', trycatchmiddleware(commentController.deleteComment));

module.exports = router;
