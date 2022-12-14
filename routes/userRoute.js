const express = require('express');
const { addUser, verifyUser } = require('../controllers/userController');

const router = express.Router();


// Signup Routes
// router.route("/signup")
// .post(addUser);

// Login routes
// router.route("/login").post(verifyUser);



module.exports = router;