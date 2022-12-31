const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts')

router.post('/createpost', postsCtrl.createPost)
router.patch('/updatepost', postsCtrl.updatePost)
router.get('/getpost', postsCtrl.getPosts)

module.exports = router;