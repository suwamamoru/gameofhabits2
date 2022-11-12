'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController'),
      { registerValidator } = require('../middleware/registerValidator');

router.post(
  '/register',
  registerValidator(),
  usersController.validate,
  usersController.register
);

module.exports = router;