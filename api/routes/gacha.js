'use strict';

const express = require('express'),
      router = express.Router(),
      gachaController = require('../controllers/gachaController');

router.post(
  '/gacha',
  gachaController.gacha,
  // gachaController.updateCombos,
  gachaController.updateSP,
  gachaController.getDegree,
  gachaController.updateDegree,
  gachaController.getToday,
  gachaController.updateAchieveDay,
  gachaController.getHabitAchieveDays,
  gachaController.countSuccessDays,
  gachaController.updateSuccessDays,
);

module.exports = router;