'use strict';

const express = require('express'),
      router = express.Router(),
      gachaController = require('../controllers/gachaController');

router.post(
  '/gacha',
  gachaController.gacha,
  gachaController.updateSP,
  gachaController.updateDegree,
  gachaController.createNewAchievement,
  gachaController.countSuccessDays
);

module.exports = router;