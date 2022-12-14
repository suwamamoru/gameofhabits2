'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      AchieveDay = require('../models').AchieveDay,
      HabitAchieveDay = require('../models').HabitAchieveDay,
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt'),
      { validationResult } = require('express-validator');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { name: req.body.username } });
      if (user) {
        const password = await bcrypt.compare(req.body.password, user.password)
        if (password) {
          next();
        } else res.status(403).json('パスワードに誤りがあります。');
      } else res.status(403).json('このユーザーは存在しません。');
    } catch (error) {
      console.log(error);
    }
  },

  jwt: (req, res, next) => {
    const token = jwt.sign({
      name: req.body.username,
      password: req.body.password
    }, "secretKey");
    res.json({ token });
  },

  verify: (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, "secretKey", (error, user) => {
      if (error) {
        res.status(403).json('トークンが存在しないか、無効なトークンです。');
      } else {
        res.json({ user });
      }
    });
  },

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const errorMessages = [];
      errors.array().forEach(error => {
        errorMessages.push({
          param: error.param,
          msg: error.msg
        })
      });
      res.status(403).json(errorMessages);
    } else {
      next();
    }
  },

  checkSameUser: (req, res, next) => {
    User.findOne({
      where: {
        name: req.body.username
      }
    })
    .then(user => {
      if (user) {
        const errorMessages = [{
          param: 'username',
          msg: '既に存在するユーザーです。'
        }];
        res.status(403).json(errorMessages);
      } else {
        next();
      }
    })
    .catch((error) => {
      console.log('checkSameUser Error: ' + error);
      res.status(500).end();
    });
  },

  createUser: async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.create({
      name: req.body.username,
      password: hashedPassword,
      sp: 0,
      degreeId: 1,
      inquiry_title: '',
      inquiry_content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(() => {
      console.log('createUser');
      next();
    })
    .catch((error) => {
      console.log('User Creation Error in createUser: ' + error);
      res.status(500).end();
    });
  },

  getUserId: (req, res, next) => {
    User.findOne({
      where: {
        name: req.body.username
      }
    })
    .then(user => {
      res.locals.userId = user.id;
      console.log('getUser');
      next();
    })
    .catch((error) => {
      console.log('getUserId Error: ' + error);
      res.status(500).end();
    });
  },

  createHabit: (req, res, next) => {
    Habit.create({
      userId: res.locals.userId,
      title: '未設定',
      attribute: '良い習慣',
      tag1: '未設定',
      tag2: '',
      tag3: '',
      ingenuity: '未設定',
      combos: 1,
      successDays: 0,
      iine: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(() => {
      console.log('createHabit');
      next();
    })
    .catch((error) => {
      console.log('Habit Creation Error in createHabit: ' + error);
      res.status(500).end();
    });
  },

  getHabitId: (req, res, next) => {
    Habit.findOne({
      where: {
        userId: res.locals.userId
      }
    })
    .then((habit) => {
      res.locals.habitId = habit.id;
      console.log('getHabitId');
      next();
    })
    .catch(error => {
      console.log('getHabitId Error: ' + error);
      res.status(500).end();
    })
  },

  createAchieveDays: (req, res, next) => {
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
              year: thisDateWeek[i].getFullYear(),
              month: (thisDateWeek[i].getMonth() + 1),
              day: thisDateWeek[i].getDate(),
              week: week.charAt(thisDateWeek[i].getDay())
            }
          });
          console.log('createAchieveDays');
    AchieveDay.bulkCreate([
      { year: thisAllDate[0].year, month: thisAllDate[0].month, day: thisAllDate[0].day, week: thisAllDate[0].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[1].year, month: thisAllDate[1].month, day: thisAllDate[1].day, week: thisAllDate[1].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[2].year, month: thisAllDate[2].month, day: thisAllDate[2].day, week: thisAllDate[2].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[3].year, month: thisAllDate[3].month, day: thisAllDate[3].day, week: thisAllDate[3].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[4].year, month: thisAllDate[4].month, day: thisAllDate[4].day, week: thisAllDate[4].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[5].year, month: thisAllDate[5].month, day: thisAllDate[5].day, week: thisAllDate[5].week, achieved: false, createdAt: new Date(), updatedAt: new Date() },
      { year: thisAllDate[6].year, month: thisAllDate[6].month, day: thisAllDate[6].day, week: thisAllDate[6].week, achieved: false, createdAt: new Date(), updatedAt: new Date() }
    ])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log('createAchieveDays Error: ' + error);
      res.status(500).end();
    })
  },

  countAchieveDays: (req, res, next) => {
    AchieveDay.count({
      paranoid: false
    })
    .then((achieveDaysCount) => {
      res.locals.achieveDaysCount = achieveDaysCount;
      console.log('countAchieveDays: ' + achieveDaysCount);
      next();
    })
    .catch(error => {
      console.log('countAchieveDays Error: ' + error);
      res.status(500).end();
    });
  },

  createHabitAchieveDays: (req, res, next) => {
    const achieveDaysCount = res.locals.achieveDaysCount;
    const habitId = res.locals.habitId;
    console.log('createHabitAchieveDays');
    const newAchieveDaysId = new Array(7).fill(null).map((_, i) => {
      return achieveDaysCount - 6 + i;
    });
    HabitAchieveDay.bulkCreate([
      { habitId: habitId, achieveDayId: newAchieveDaysId[0], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[1], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[2], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[3], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[4], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[5], createdAt: new Date(), updatedAt: new Date() },
      { habitId: habitId, achieveDayId: newAchieveDaysId[6], createdAt: new Date(), updatedAt: new Date() }
    ])
    .then(() => {
      res.status(200).end();
    })
    .catch(error => {
      console.log('createHabitAchieveDays Error: ' + error);
      res.status(500).end();
    })
  }
}