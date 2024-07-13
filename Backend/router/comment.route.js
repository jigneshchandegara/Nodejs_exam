const express = require('express');
const { commentcontrollers } = require('../controller');

const router = express.Router();



router.post('/createcomment', commentcontrollers.createcomment);
router.get('/getcomment', commentcontrollers.commentget);
router.delete("deletecomment/:id", commentcontrollers.commentdelete);

module.exports = router;
