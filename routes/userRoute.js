const express = require('express');
const { addUser, verifyUser } = require('../controllers/userControllers');

const router = express.Router();



router.route("/signup").post(addUser);
router.route("/login").post(verifyUser);



module.exports = router;