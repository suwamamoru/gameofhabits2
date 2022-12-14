'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      Degree = require('../models').Degree,
      HabitAchieveDay = require('../models').HabitAchieveDay,
      AchieveDay = require('../models').AchieveDay,
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
      console.log(error);
    });
  },

  combos: (req, res, next) => {
    const habitId = req.body.habitId;
    Habit.findByPk(habitId)
    .then(habit => {
      res.locals.combos = habit.combos;
      next();
    })
    .catch(error => {
      console.log(error);
    })
  },

  updateSP: (req, res, next) => {
    const userId = req.body.userId;
    User.findByPk(userId)
    .then(user => {
      user.sp += res.locals.result.sp * res.locals.combos;
      res.locals.userSP = user.sp;
      user.save();
      next();
    })
    .catch(error => {
      console.log(error);
    })
  },

  getDegree: (req, res, next) => {
    console.log(res.locals.userSP);
    Degree.max('id', {
      where: {
        sp_required: {
          [Op.lte]: res.locals.userSP
        }
      }
    })
    .then(degreeId => {
      res.locals.degreeId = degreeId;
      next();
    })
    .catch(error => {
      console.log(error);
    });
  },

  updateDegree: (req, res, next) => {
    const userId = req.body.userId;
    User.findByPk(userId)
    .then(user => {
      user.degreeId = res.locals.degreeId;
      user.save();
      next();
      // res.status(200).end();
    })
    .catch(error => {
      console.log(error);
    })
  },

  getToday: (req, res, next) => {
    const today = new Date();
    res.locals.thisYear = today.getFullYear(),
    res.locals.thisMonth = today.getMonth() + 1,
    res.locals.day = today.getDate();
    next();
  },

  updateHabit: async (req, res, next) => {
    const habitId = req.body.habitId,
          thisYear = res.locals.thisYear,
          thisMonth = res.locals.thisMonth,
          day = res.locals.day;
    try {
      await Habit.findOne({
        where: {
          id: habitId
        },
        include: [{
          model: HabitAchieveDay,
          include: [{ 
            model: AchieveDay,
            where: {
              year: thisYear,
              month: thisMonth,
              day: day
            }
          }]
        }]
      })
      .then(habit => {
        const achieveDayId = habit.HabitAchieveDays[0].AchieveDay.id;
          AchieveDay.findOne({
            where: {
              id: achieveDayId
            }
          })
          .then((achieveDay) => {
            achieveDay.achieved = true;
            achieveDay.save();
            res.status(200).end();
          })
          .catch(error => {
            console.log(error);
            res.status(500).end();
          })
        })
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }
}