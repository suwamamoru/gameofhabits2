'use strict';

const express = require('express'),
      router = express.Router(),
      authController = require('../controllers/authController'),
      { registerValidator } = require('../middleware/registerValidator');

router.post(
  '/login',
  authController.login,
  authController.jwt
);
router.get('/verify', authController.verify);
router.post(
  '/register',
  registerValidator(),
  authController.validate,
  authController.checkSameUser,
  authController.createUser,
  authController.getUserId,
  authController.createHabit
);

module.exports = router;