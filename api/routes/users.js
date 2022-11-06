'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController');

router.post('/login', usersController.login);
router.post('/register', usersController.register);

module.exports = router;