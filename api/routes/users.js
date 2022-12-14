'use strict';

const express = require('express'),
      router = express.Router(),
      authController = require('../controllers/authController'),
      usersController = require('../controllers/usersController');

router.post(
  '/getUserData',
  usersController.getUserData,
  usersController.thisWeek,
  usersController.checkToday,
  usersController.findEraseAchieveDays,
  usersController.eraseAchieveDays,
  usersController.eraseHabitAchieveDays,
  usersController.createAchieveDays,
  usersController.getNewUserData
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

// router.get('/getToday', usersController.getToday);

module.exports = router;