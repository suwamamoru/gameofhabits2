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
      console.log('gacha error: ' + error);
      res.status(500).end();
    });
  },

  // updateCombos: (req, res, next) => {
  //   const habitId = req.body.habitId;
  //   Habit.findByPk(habitId)
  //   .then(habit => {
  //     res.locals.combos = habit.combos;
  //     habit.combos = habit.combos + 1;
  //     habit.save();
  //     next();
  //   })
  //   .catch(error => {
  //     console.log('updateCombos error: ' + error);
  //     res.status(500).end();
  //   })
  // },

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
      console.log('getDegree error: ' + error);
      res.status(500).end();
    });
  },

  updateDegree: (req, res, next) => {
    const userId = req.body.userId;
    User.findByPk(userId)
    .then(user => {
      user.degreeId = res.locals.degreeId;
      user.save();
      next();
    })
    .catch(error => {
      console.log('updateDegree error: ' + error);
      res.status(500).end();
    });
  },

  updateAchieveDay: async (req, res, next) => {
    const today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth() + 1,
          day = today.getDate();
    await Habit.findOne({
      where: {
        id: req.body.habitId
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
    .then(h => {
      console.log('h: ' + JSON.stringify(h));
      console.log('h.HabitAchieveDays: ' + JSON.stringify(h.HabitAchieveDays));
      console.log('h.HabitAchieveDays[0]: ' + JSON.stringify(h.HabitAchieveDays[0]));
      console.log('h.HabitAchieveDays[0].AchieveDay: ' + JSON.stringify(h.HabitAchieveDays[0].AchieveDay));
      console.log('h.HabitAchieveDays[0].AchieveDay.achieved: ' + JSON.stringify(h.HabitAchieveDays[0].AchieveDay.achieved));
      h.HabitAchieveDays[0].AchieveDay.achieved = true;
      console.log('h.HabitAchieveDays[0].AchieveDay.achieved2: ' + JSON.stringify(h.HabitAchieveDays[0].AchieveDay.achieved));
      h.save();
      next();
    })
    .catch(error => {
      console.log('updateAchieveDay error: ' + error);
      res.status(500).end();
    })
  },

  getHabitAchieveDays: async (req, res, next) => {
    const habitId = req.body.habitId;
    const getHabitAchieveDays = [];
    try {
      await HabitAchieveDay.findAll({
        paranoid: false,
        where: {
          habitId: habitId
        },
        include: [{ model: AchieveDay }]
      })
      .then(habitAchieveDay => {
        getHabitAchieveDays.push(habitAchieveDay);
      })
    } catch (error) {
      console.log('getHabitAchieveDays error: ' + error);
      res.status(500).end();
    }
    res.locals.getHabitAchieveDays = getHabitAchieveDays[0];
    next();
  },

  countSuccessDays: async (req, res, next) => {
    const getHabitAchieveDays = res.locals.getHabitAchieveDays,
          achieveDayIds = [],
          achieveDays = [];
    getHabitAchieveDays.forEach(habitAchieveDay => {
      achieveDayIds.push(habitAchieveDay.achieveDayId);
    });
    console.log('getHabitAchieveDays: ' + JSON.stringify(getHabitAchieveDays));
    console.log('achieveDays: ' + JSON.stringify(achieveDayIds));
    for (const achieveDayId of achieveDayIds) {
      try {
        await AchieveDay.findOne({
          paranoid: false,
          where: {
            id: achieveDayId
          }
        })
        .then(achieveDay => {
          if (achieveDay.achieved === true) {
            achieveDays.push(achieveDay);
          }
        })
      } catch (error) {
        console.log('getAchieveDays error: ' + error);
        res.status(500).end();
      }
    }
    console.log('achieveDays: ' + JSON.stringify(achieveDays));
    console.log('successDays: ' + achieveDays.length);
    res.locals.successDays = achieveDays.length;
    next();
  },

  updateSuccessDays: async (req, res, next) => {
    const habitId = req.body.habitId;
    const successDays = res.locals.successDays;
    try {
      await Habit.findOne({
        paranoid: false,
        where: {
          id: habitId
        }
      })
      .then(habit => {
        habit.successDays = successDays;
        habit.save();
        next();
      })
    } catch (error) {
      console.log('updateSuccessDays error: ' + error);
      res.status(500).end();
    }
  },

  getToday: (req, res, next) => {
    const today = new Date();
    res.locals.thisYear = today.getFullYear();
    res.locals.thisMonth = today.getMonth() + 1;
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
            console.log('updateAchieveDay error in updateHabit: ' + error);
            res.status(500).end();
          })
        })
    } catch (error) {
      console.log('updateHabit error: ' + error);
      res.status(500).end();
    }
  }
}