'use strict';

const express = require('express'),
      router = express.Router(),
      authController = require('../controllers/authController'),
      usersController = require('../controllers/usersController');

router.post(
  '/getUserData',
  usersController.checkThisYear,
  usersController.eraseOldYear,
  usersController.createNewYear,
  usersController.getUserData,
  usersController.checkTodayAchieved,
  usersController.getUserData
);

router.post(
  '/createNewHabit', 
  usersController.createNewHabit,
  authController.createAchieveDays,
  authController.countAchieveDays,
  authController.createHabitAchieveDays
);
router.post('/editHabit', usersController.editHabit);
router.post('/updateHabit', usersController.updateHabit);
router.post('/eraseHabit', usersController.eraseHabit);

module.exports = router;