'use strict';

const express = require('express'),
      router = express.Router(),
      users = require('./users'),
      auth = require('./auth');

router.use('/users', users);
router.use('/auth', auth);

module.exports = router;
