const express = require('express');
const { recipecontrollers } = require('../controller');
const { isLogin, isRestrict } = require('../Middleware/auth');

const router = express.Router();



router.post('/recipecreate',
    // isLogin,
    // isRestrict(["admin,user"]),
    recipecontrollers.createrecipe);
router.get('/getrecipelist', recipecontrollers.recipeget);
router.get("/getmyrecipe/:id", recipecontrollers.recipegetmy);
router.delete("/deleterecipe/:id", recipecontrollers.recipedelete);
router.put("/updatarecipr/:id", recipecontrollers.recipeupdata);

module.exports = router;
