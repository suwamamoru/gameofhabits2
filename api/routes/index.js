'use strict';

const express = require('express'),
      router = express.Router(),
      users = require('./users'),
      auth = require('./auth'),
      gacha = require('./gacha');

router.use('/users', users);
router.use('/auth', auth);
router.use('/gacha', gacha);

module.exports = router;
