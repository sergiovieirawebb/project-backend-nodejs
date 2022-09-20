const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');

router.use('/login', loginController);
router.use('/users', authMiddleware, userController);

module.exports = router;
