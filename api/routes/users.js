'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController');

router.post('/getUser', usersController.getUser);
router.post('/getHabit', usersController.getHabit);
router.post('/getDegree', usersController.getDegree);

module.exports = router;