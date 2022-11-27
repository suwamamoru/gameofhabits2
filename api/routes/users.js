'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController');

router.post('/getUserData', usersController.getUserData, usersController.thisWeek);
router.get('/thisWeek', usersController.thisWeek);

module.exports = router;