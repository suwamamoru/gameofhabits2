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
  authController.register
);

module.exports = router;