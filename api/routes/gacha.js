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
  gachaController.updateAchieveDay,
  gachaController.getHabitAchieveDays,
  gachaController.countSuccessDays,
  gachaController.updateSuccessDays,
  gachaController.getToday,
  gachaController.updateHabit
);

module.exports = router;