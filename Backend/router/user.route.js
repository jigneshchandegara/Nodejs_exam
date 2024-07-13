const express = require('express');
const { usercontrollers } = require('../controller');
const router = express.Router();



router.post('/register', usercontrollers.register);
router.get('/getuserlist', usercontrollers.userget);

router.post('/login',usercontrollers.userlogin);
module.exports = router;
