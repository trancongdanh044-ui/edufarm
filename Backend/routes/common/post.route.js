const express = require('express');
const postController = require("../../controllers/common/post.controller");

const router = express.Router();

router.get('/admins', postController.getAllAdminPosts);

router.get('/admins/:admin_id', postController.getAllAdminPostsById);

router.get('/customers', postController.getAllCustomerPost);

router.get('/customers/:customer_id', postController.getAllCustomerPostById);

router.get('/:post_id', postController.getPostById);

router.post('/', postController.createPost);

router.patch('/', postController.updatePosts);

router.delete('/', postController.deletePost);

module.exports = router;