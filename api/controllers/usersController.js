'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      Degree = require('../models').Degree,
      HabitAchievement = require('../models').HabitAchievement,
      AchievementDate = require('../models').AchievementDate;

module.exports = {
  checkThisYear: (req, res, next) => {
    const thisYear = new Date().getFullYear();
    AchievementDate.findOne({
      where: {
        year: thisYear
      }
    })
    .then(achievementDate => {
      if (achievementDate === null) {
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
          AchievementDate.create({
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
      }
      res.status(200).end();
    })
    .catch(error => {
      console.log('Error in checkThisYear' + error);
      res.status(500).end();
    })
  },

  getUserData: async (req, res, next) => {
    try {
      const userData = await User.findOne({
        where: {
          name: req.body.name
        },
        attributes: ['id', 'name', 'sp', 'degreeId'],
        include: [
          {
            model: Habit,
            attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity', 'successDays'],
            include: [{
              model: HabitAchievement,
              attributes: ['id'],
              include: [{
                model: AchievementDate,
                attributes: ['year', 'month', 'day', 'week']
              }]
            }]
          },
          { model: Degree, attributes: ['name'] }
        ]
      });
      res.status(200).json(userData);
    } catch (error) {
      console.log('getUserData error: ' + error);
      res.status(500).end();
    }
  },

  getThisWeek: (req, res, next) => {
    const today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth(),
          date = today.getDate(),  // 今日の日にちを返す。
          weekNum = today.getDay(),  // 曜日を数字で返す。0（日曜日）～6（土曜日）
          week = new String('日月火水木金土'),
          weekLength = 7,
          thisWeek = new Array(weekLength).fill(null).map((_, i) => {
            return date - weekNum + 1 + i  // 今週i曜日の日にちを返す。
          }),
          thisDateWeek = new Array(weekLength).fill(null).map((_, i) => {
            return new Date(thisYear, thisMonth, thisWeek[i])
          }),
          thisAllDate = new Array(weekLength).fill(null).map((_, i) => {
            return {
              id: i,
              year: thisDateWeek[i].getFullYear(),
              month: (thisDateWeek[i].getMonth() + 1),
              day: thisDateWeek[i].getDate(),
              week: week.charAt(thisDateWeek[i].getDay())
            }
          });
    res.status(200).json(thisAllDate);
  },

  changeDayColor: (req, res, next) => {
    const userData = req.body.userData,
          thisWeek = req.body.thisWeek,
          dayColor = [];
    userData.Habits.forEach((habit, i) => {
      dayColor.push([]);
      const achieveDay = {};
      thisWeek.forEach((week, j) => {
        habit.HabitAchievements.forEach((habitAchievement) => {
          if (
            habitAchievement.AchievementDate.year === week.year &&
            habitAchievement.AchievementDate.month === week.month &&
            habitAchievement.AchievementDate.day === week.day
          ) {
            console.log(true);
            achieveDay['year'] = week.year
            achieveDay['month'] = week.month
            achieveDay['day'] = week.day
          }
          console.log(false);
        });
        if (
          achieveDay.year === week.year &&
          achieveDay.month === week.month &&
          achieveDay.day === week.day
        ) {
          dayColor[i][j] = true;
        } else {
          dayColor[i][j] = false;
        }
      })
    })
    res.status(200).json(dayColor);
  },

  checkTodayAchieved: async (req, res, next) => {
    const habits = req.body.userData.Habits,
          today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth() + 1,
          day = today.getDate(),
          checkTodayAchieved = [];
    for (const habit of habits) {
      const todayAchieved = [];
      for (const habitAchievement of habit.HabitAchievements) {
        if (
          habitAchievement.AchievementDate.year === thisYear &&
          habitAchievement.AchievementDate.month === thisMonth &&
          habitAchievement.AchievementDate.day === day
        ) {
          todayAchieved.push(true); 
        } else {
          todayAchieved.push(false);
        }
      }
      if (todayAchieved.includes(true)) {
        checkTodayAchieved.push(true);
      } else {
        checkTodayAchieved.push(false);
      }
    }
    res.status(200).json(checkTodayAchieved);
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
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(habit => {
      res.locals.habitId = habit.id;
      next();
    })
    .catch((error) => {
      console.log('New Habit Creation Error in createNewHabit: ' + error);
      res.status(500).end();
    });
  },

  createNewHabitAchievement: (req, res, next) => {
    HabitAchievement.create({
      habitId: res.locals.habitId,
      achievementId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(() => {
      res.status(200).end();
    })
    .catch((error) => {
      console.log('New HabitAchievement Creation Error in createNewHabitAchievement: ' + error);
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

  eraseHabit: async (req, res, next) => {
    const eraseHabitId = req.body.eraseHabit.id;
    try {
      await Habit.destroy({
        paranoid: false,
        where: { id: eraseHabitId }
      })
    } catch (error) {
      console.log('Habit.destroy error: ' + error);
      res.status(500).end();
    }
    try {
      await HabitAchievement.destroy({
        paranoid: false,
        where: { habitId: eraseHabitId }
      })
    } catch (error) {
      console.log('HabitAchievement.destroy error: ' + error);
      res.status(500).end();
    }
    res.status(200).end();
  }
}