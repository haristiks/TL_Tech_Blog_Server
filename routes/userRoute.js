// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const trycatchmiddleware = require('../middlewares/tryCatchMiddleware');
const router = express.Router();

router.post('/adduser', trycatchmiddleware(userController.createUser));
router.get('/allusers', trycatchmiddleware(userController.getUsers));
router.get('/:id', trycatchmiddleware(userController.getUserById));
router.put('/:id', trycatchmiddleware(userController.updateUser));
router.delete('/:id', trycatchmiddleware(userController.deleteUser));

module.exports = router;
