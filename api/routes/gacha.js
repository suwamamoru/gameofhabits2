'use strict';

const express = require('express'),
      router = express.Router(),
      gachaController = require('../controllers/gachaController');

router.post(
  '/gacha',
  gachaController.gacha,
  gachaController.combos,
  gachaController.updateSP,
  gachaController.getDegree,
  gachaController.updateDegree,
  gachaController.getToday,
  gachaController.updateHabit
);

module.exports = router;