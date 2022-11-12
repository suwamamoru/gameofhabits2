'use strict';

const express = require('express'),
      router = express.Router(),
      authController = require('../controllers/authController'),
      { registerValidator } = require('../middleware/registerValidator');

router.post('/login', authController.loginJwt);
router.get('/verify', authController.verify);
router.post(
  '/register',
  registerValidator(),
  authController.validate,
  authController.register
);

module.exports = router;