const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.post('/', postsCtrl.newPost)
router.get('/', postsCtrl.getPosts)
router.patch('/:id', postsCtrl.updatePost)
router.delete('/:id', postsCtrl.deletePost)

module.exports = router;