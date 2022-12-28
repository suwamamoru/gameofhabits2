'use strict';

const express = require('express'),
      router = express.Router(),
      usersController = require('../controllers/usersController');

router.get('/checkThisYear', usersController.checkThisYear);
router.post('/getUserData',usersController.getUserData);
router.get('/getThisWeek', usersController.getThisWeek);
router.post('/changeDayColor', usersController.changeDayColor);
router.post('/checkTodayAchieved', usersController.checkTodayAchieved);

router.post(
  '/createNewHabit',
  usersController.createNewHabit,
  usersController.createNewHabitAchievement
);
router.post('/editHabit', usersController.editHabit);
router.post('/updateHabit', usersController.updateHabit);
router.post('/eraseHabit', usersController.eraseHabit);

module.exports = router;