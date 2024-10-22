const express = require('express');
const router = express.Router();
const {addCategory,getCategories} = require('../controllers/categoryController');
const authentication = require("../middleware/middleware")



router.post('/categories', authentication,addCategory);
router.get('/categories',authentication, getCategories);

module.exports = router;
