const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.post('/createpost', postsCtrl.newPost)
router.get('/createpost', postsCtrl.getPosts)
router.patch('/updatepost', postsCtrl.updatePost)

module.exports = router;