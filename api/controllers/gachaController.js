'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      Degree = require('../models').Degree,
      HabitAchievement = require('../models').HabitAchievement,
      AchievementDate = require('../models').AchievementDate,
      Gacha = require('../models').Gacha,
      Sequelize = require('sequelize'),
      Op = Sequelize.Op;

module.exports = {
  gacha: (req, res, next) => {
    Gacha.findAll({
      where: {
        id: {
          [Op.lte]: 7
        }
      }
    })
    .then(gacha => {
      const randomNum = Math.random();
      let result = [];
      let totalProb = 0;
      for (let i = 0; i < gacha.length; i++) {
        totalProb += gacha[i].probability;
        if( randomNum <= totalProb ) {
            result = gacha[i];
            break;
        }
      };
      res.locals.result = result;
      res.json(result.imageContent);
      next();
    })
    .catch(error => {
      console.log('gacha error: ' + error);
      res.status(500).end();
    });
  },

  updateSP: (req, res, next) => {
    const userId = req.body.userId;
    User.findByPk(userId)
    .then(user => {
      user.sp += res.locals.result.sp;
      res.locals.userSP = user.sp;
      user.save();
      next();
    })
    .catch(error => {
      console.log('updateSP error: ' + error);
      res.status(500).end();
    })
  },

  updateDegree: async(req, res, next) => {
    const userId = req.body.userId;
    try {
      await Degree.max('id', {
        where: {
          sp_required: {
            [Op.lte]: res.locals.userSP
          }
        }
      })
      .then(degreeId => {
        User.findByPk(userId)
        .then(user => {
          user.degreeId = degreeId;
          user.save();
          next();
        })
        .catch(error => {
          console.log('update Degree error in updateDegree: ' + error);
          res.status(500).end();
        });
      })
    } catch (error) {
      console.log('degree max error in updateDegree: ' + error);
      res.status(500).end();
    }
  },

  createNewAchievement: async (req, res, next) => {
    const today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth() + 1,
          day = today.getDate(),
          habitId = req.body.habitId;
    try {
      await AchievementDate.findOne({
        where: {
          year: thisYear,
          month: thisMonth,
          day: day
        }
      })
      .then(achievementDate => {
        HabitAchievement.create({
          habitId: habitId,
          achievementId: achievementDate.id
        })
        .then(() => {
          next();
        })
        .catch(error => {
          console.log('create HabitAchievement error in createNewAchievement: ' + error);
          res.status(500).end();
        })
      })
    } catch (error) {
      console.log('reading Calendar error: ' + error);
      res.status(500).end();
    }
  },

  countSuccessDays: async (req, res, next) => {
    try {
      const countSuccessDays = await HabitAchievement.count({
        where: {
          habitId: req.body.habitId
        }
      })
      try {
        await Habit.findOne({
          where: {
            id: req.body.habitId
          }
        })
        .then(habit => {
          habit.successDays = countSuccessDays - 1;  // 初期設定でnull calendarを読んでいるため、-1する。
          habit.save();
          res.status(200).end();
        })
      } catch (error) {
        console.log('Habit.findOne error in countSuccessDays: ' + error);
        res.status(500).end();
      }
    } catch (error) {
      console.log('HabitAchievement.count error in countSuccessDays: ' + error);
      res.status(500).end();
    }
  }
}