'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      Degree = require('../models').Degree,
      HabitAchievement = require('../models').HabitAchievement,
      Achievement = require('../models').Achievement,
      Calendar = require('../models').Calendar;

module.exports = {
  checkThisYear: (req, res, next) => {
    const thisYear = new Date().getFullYear();
    Calendar.findOne({
      where: {
        year: thisYear
      }
    })
    .then(calendar => {
      if (calendar !== null) {
        req.createNewYearSkip = true;
      }
      console.log('checkThisYearまで');
      next();
    })
    .catch(error => {
      console.log('Error in checkThisYear' + error);
      res.status(500).end();
    })
  },

  eraseOldYear: (req, res, next) => {
    if (req.createNewYearSkip === true) return next();
    Calendar.findAll()
    .then(calendar => {
      calendar.destroy();
      console.log('eraseOldYearまで');
      next();
    })
    .catch(error => {
      console.log('Error in eraseOldYear' + error);
      res.status(500).end();
    })
  },

  createNewYear: (req, res, next) => {
    if (req.createNewYearSkip === true) return next();
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const today = new Date();
    const thisYear = today.getFullYear();
    const date = new Date(thisYear, 0, 1);
    const k = [];
    if (thisYear % 4 === 0) {
      k.push(366); 
    } else {
      k.push(365);
    }
    for (let i = 1; i <= k[0]; i++) {
      Calendar.create({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        week: week[date.getDay()],
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        deletedAt: null
      });
      date.setDate(date.getDate() + 1);
    }
    console.log('createNewYearまで');
    next();
  },

  getUserData: async (req, res, next) => {
    try {
      const userData = await User.findOne({
        where: {
          name: req.body.name
        },
        attributes: ['name', 'sp', 'degreeId'],
        include: [
          {
            model: Habit,
            attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity', 'successDays', 'todayAchieved'],
            include: [{
              model: HabitAchievement,
              attributes: ['id'],
              include: [{
                model: Achievement,
                attributes: ['id'],
                include: [{
                  model: Calendar,
                  attributes: ['year', 'month', 'day', 'week']
                }]
              }]
            }]
          },
          { model: Degree, attributes: ['name'] }
        ]
      });
      if (req.getUserDataAgain === true) {
        return res.status(200).json(userData);
      }
      res.locals.userData = userData;
      console.log('userDataまで');
      next();
    } catch (error) {
      console.log('getUserData error: ' + error);
      res.status(500).end();
    }
  },

  checkTodayAchieved: async (req, res, next) => {
    const habits = res.locals.userData.Habits;
    console.log('habits in checkTodayAchieved: ' + JSON.stringify(habits));
    const today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth() + 1,
          day = today.getDate();
    // console.log('thisYear in checkTodayAchieved: ' + JSON.stringify(thisYear));
    // console.log('thisMonth in checkTodayAchieved: ' + JSON.stringify(thisMonth));
    // console.log('day in checkTodayAchieved: ' + JSON.stringify(day));
    for (const habit of habits) {
      console.log('habit in checkTodayAchieved: ' + JSON.stringify(habit));
      try {
        await Habit.findOne({
          where: {
            id: habit.id
          },
          attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity', 'successDays', 'todayAchieved'],
          include: [{
            model: HabitAchievement,
            attributes: ['id'],
            include: [{ 
              model: Achievement,
              attributes: ['id'],
              include: [{
                model: Calendar,
                where: {
                  year: thisYear,
                  month: thisMonth,
                  day: day
                }
              }]
            }]
          }]
        })
        .then(h => {
          console.log('h in checkTodayAchieved: ' + JSON.stringify(h));
          console.log('h.HabitAchievements in checkTodayAchieved: ' + JSON.stringify(h.HabitAchievements));
          console.log('h.HabitAchievements[0] in checkTodayAchieved: ' + JSON.stringify(h.HabitAchievements[0]));
          console.log('h.HabitAchievements[0].Achievement in checkTodayAchieved: ' + JSON.stringify(h.HabitAchievements.Achievement));
          if (h.HabitAchievements[0].Achievement !== null) {
            h.todayAchieved = true;
            return h.save();
          } else if (h.HabitAchievements[0].Achievement === null) {
            h.todayAchieved = false;
            return h.save();
          } else {
            console.log('no update todayAchieved');
          }
        })
      } catch (error) {
        console.log('checkTodayAchieved error: ' + error);
        return res.status(500).end();
      }
    }
    req.getUserDataAgain = true;
    next();
  },

  createNewHabit: (req, res, next) => {
    Habit.create({
      userId: req.body.createHabit.userId,
      title: req.body.createHabit.title,
      tag1: req.body.createHabit.tag1,
      tag2: req.body.createHabit.tag2,
      tag3: req.body.createHabit.tag3,
      ingenuity: req.body.createHabit.ingenuity,
      successDays: 0,
      todayAchieved: false,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(habit => {
      console.log('createNewHabit');
      res.locals.habitId = habit.id;
      res.locals.userId = req.body.createHabit.userId;
      next();
    })
    .catch((error) => {
      console.log('New Habit Creation Error in createNewHabit: ' + error);
      res.status(500).end();
    });
  },

  editHabit: async (req, res, next) => {
    try {
      const habitData = await Habit.findOne({
        where: { id: req.body.id },
        attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity'],
      });
      res.status(200).json(habitData);
    } catch(error) {
      console.log(error);
    }
  },

  updateHabit: (req, res, next) => {
    const newHabitId = req.body.newHabit.id;
    console.log('newHabit is ' + newHabitId);
    Habit.findByPk(newHabitId)
    .then(habit => {
      habit.title = req.body.newHabit.title,
      habit.attribute = req.body.newHabit.attribute,
      habit.tag1 = req.body.newHabit.tag1,
      habit.tag2 = req.body.newHabit.tag2,
      habit.tag3 = req.body.newHabit.tag3,
      habit.ingenuity = req.body.newHabit.ingenuity
      habit.save();
      res.status(200).end();
    })
    .catch(error => {
      console.log(error);
    });
  },

  eraseHabit: (req, res, next) => {
    const eraseHabitId = req.body.eraseHabit.id;
    Habit.destroy({
      where: { id: eraseHabitId }
    })
    .then(() => {
      res.status(200).end();
    })
    .catch(error => {
      console.log(error);
    })
  }
}