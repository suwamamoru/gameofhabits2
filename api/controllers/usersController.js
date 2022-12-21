'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      Degree = require('../models').Degree,
      HabitAchieveDay = require('../models').HabitAchieveDay,
      AchieveDay = require('../models').AchieveDay;

module.exports = {
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
            attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity', 'combos', 'successDays', 'todayAchieved', 'dayBeforeYesterdayAchieved'],
            include: [{
              model: HabitAchieveDay,
              attributes: ['id'],
              include: [{ model: AchieveDay }]
            }]
          },
          { model: Degree, attributes: ['name'] }
        ]
      });
      res.locals.userData = userData;
      next();
    } catch (error) {
      console.log('getUserData error: ' + error);
      res.status(500).end();
    }
  },

  thisWeek: (req, res, next) => {
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
    res.locals.thisAllDate = thisAllDate;
    next();
  },

  checkToday: (req, res, next) => {
    const thisAllDate = res.locals.thisAllDate;
    AchieveDay.findOne({
      where: {
        year: thisAllDate[0].year,
        month: thisAllDate[0].month,
        day: thisAllDate[0].day,
        week: thisAllDate[0].week
      }
    })
    .then((findAchieveDay) => {
      if (findAchieveDay !== null) {
        req.skip = true;
      }
      next();
    })
    .catch(() => {
      console.log('checkToday Error: ' + error);
      res.status(500).end();
    })
  },

  findEraseAchieveDays: async (req, res, next) => {
    if (req.skip === true) {
      return next();
    }
    const habits = res.locals.userData.Habits;
    const destroyHabitAchieveDays = [];
    for (const habit of habits) {
      await HabitAchieveDay.findAll({
        where: {
          habitId: habit.id
        }
      })
      .then((habitAchieveDay) => {
        destroyHabitAchieveDays.push(habitAchieveDay);
      })
      .catch(error => {
        console.log('findEraseAchieveDays Error: ' + error);
        return res.status(500).end();
      })
    }
    res.locals.destroyHabitAchieveDays = destroyHabitAchieveDays;
    next();
  },

  eraseAchieveDays: async (req, res, next) => {
    if (req.skip === true) {
      return next();
    }
    const habitAchieveDays = res.locals.destroyHabitAchieveDays;
    for (const habitAchieveDay of habitAchieveDays) {
      for (const achieveDay of habitAchieveDay) {
        AchieveDay.destroy({
          where: {
            id: achieveDay.achieveDayId
          }
        })
        .then(() => {
          console.log('eraseAchieveDays are OK');
        })
        .catch(error => {
          console.log('eraseAchieveDays Error: ' + error);
          return res.status(500).end();
        })
      }
    }
    next();
  },

  eraseHabitAchieveDays: (req, res, next) => {
    if (req.skip === true) {
      return next();
    }
    const habitAchieveDays = res.locals.destroyHabitAchieveDays;
    for (const habitAchieveDay of habitAchieveDays) {
      for (const achieveDay of habitAchieveDay) {
        HabitAchieveDay.destroy({
          where: {
            id: achieveDay.achieveDayId
          }
        })
        .then(() => {
          console.log('eraseHabitAchieveDays are OK');
        })
        .catch(error => {
          console.log('eraseHabitAchieveDays Error: ' + error);
          res.status(500).end();
        })
      }
    }
    next();
  },

  createAchieveDays: async (req, res, next) => {
    if (req.skip === true) {
      return next();
    }
    const thisAllDate = res.locals.thisAllDate;
    const habits = res.locals.userData.Habits;
    for (const habit of habits) {
      try {
        await AchieveDay.bulkCreate([
          { year: thisAllDate[0].year, month: thisAllDate[0].month, day: thisAllDate[0].day, week: thisAllDate[0].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[1].year, month: thisAllDate[1].month, day: thisAllDate[1].day, week: thisAllDate[1].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[2].year, month: thisAllDate[2].month, day: thisAllDate[2].day, week: thisAllDate[2].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[3].year, month: thisAllDate[3].month, day: thisAllDate[3].day, week: thisAllDate[3].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[4].year, month: thisAllDate[4].month, day: thisAllDate[4].day, week: thisAllDate[4].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[5].year, month: thisAllDate[5].month, day: thisAllDate[5].day, week: thisAllDate[5].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { year: thisAllDate[6].year, month: thisAllDate[6].month, day: thisAllDate[6].day, week: thisAllDate[6].week, achieved: false, createdAt: new Date(), updatedAt: new Date(), deletedAt: null }
        ])
        try {
          await AchieveDay.count({
            paranoid: false
          })
          .then(achieveDaysCount => {
            try {
              const newAchieveDaysId = new Array(7).fill(null).map((_, i) => {
                return achieveDaysCount - 6 + i;
              });
              HabitAchieveDay.bulkCreate([
                { habitId: habit.id, achieveDayId: newAchieveDaysId[0], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[1], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[2], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[3], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[4], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[5], createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
                { habitId: habit.id, achieveDayId: newAchieveDaysId[6], createdAt: new Date(), updatedAt: new Date(), deletedAt: null }
              ])
            } catch (error) {
              console.log('createHabitAchieveDays Error: ' + error);
              return res.status(500).end();
            }
          })
        } catch (error) {
          console.log('countAchieveDays Error: ' + error);
          return res.status(500).end();
        }
      } catch (error) {
        console.log('createAchieveDays Error: ' + error);
        return res.status(500).end();
      }
    }
    next();
  },

  getNewUserData: async (req, res, next) => {
    if (req.skip === true) {
      return next();
    }
    try {
      const userNewData = await User.findOne({
        where: {
          name: req.body.name
        },
        attributes: ['id', 'name', 'sp', 'degreeId'],
        include: [
          {
            model: Habit,
            attributes: ['id', 'title', 'tag1', 'tag2', 'tag3', 'ingenuity', 'combos', 'successDays', 'todayAchieved', 'dayBeforeYesterdayAchieved'],
            include: [{
              model: HabitAchieveDay,
              attributes: ['id'],
              include: [{ model: AchieveDay }]
            }]
          },
          { model: Degree, attributes: ['name'] }
        ]
      });
      res.locals.userNewData = userNewData;
      next();
    } catch (error) {
      console.log('userNewData error: ' + error);
      res.status(500).end();
    }
  },

  checkTodayAchieved: async (req, res, next) => {
    const habits = [];
    if (req.skip === true) {
      const userHabits = res.locals.userData.Habits;
      habits.push(userHabits);
    } else {
      const userNewHabits = res.locals.userNewData.Habits;
      habits.push(userNewHabits);
    }
    const today = new Date(),
          thisYear = today.getFullYear(),
          thisMonth = today.getMonth() + 1,
          day = today.getDate();
    for (const habit of habits[0]) {
      try {
        await Habit.findOne({
          where: {
            id: habit.id
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
          if (h.HabitAchieveDays[0].AchieveDay.achieved === true) {
            h.todayAchieved = true;
            return h.save();
          } else if (h.HabitAchieveDays[0].AchieveDay.achieved === false) {
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
    next();
  },

  // updateCombos: async (req, res, next) => {
  //   const habits = [];
  //   if (req.skip === true) {
  //     const userHabits = res.locals.userData.Habits;
  //     habits.push(userHabits);
  //   } else {
  //     const userNewHabits = res.locals.userNewData.Habits;
  //     habits.push(userNewHabits);
  //   }
  //   const today = new Date(),
  //         dayBeforeYesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
  //         dbyYear = dayBeforeYesterday.getFullYear(),
  //         dbyMonth = dayBeforeYesterday.getMonth() + 1,
  //         dbyDay = dayBeforeYesterday.getDate();
  //   for (const habit of habits[0]) {
  //     try {
  //       await Habit.findOne({
  //         where: {
  //           id: habit.id
  //         },
  //         include: [{
  //           model: HabitAchieveDay,
  //           include: [{ 
  //             model: AchieveDay,
  //             where: {
  //               year: dbyYear,
  //               month: dbyMonth,
  //               day: dbyDay
  //             }
  //           }]
  //         }]
  //       })
  //       .then(h => {
  //         if (typeof h.HabitAchieveDays[0] === 'undefined') {
  //           h.combos = h.combos - 1;
  //           return h.save();
  //         } else {
  //           if (h.HabitAchieveDays[0].AchieveDay.achieved === false) {
  //             h.combos = h.combos - 1;
  //             return h.save();
  //           } else {
  //             console.log('no update combos');
  //           }
  //         }
  //       })
  //     } catch (error) {
  //       console.log('updateCombos error: ' + error);
  //       return res.status(500).end();
  //     }
  //   }
  //   next();
  // },

  sendUserData: (req, res, next) => {
    if (req.skip === true) {
      const userData = res.locals.userData;
      res.status(200).json(userData);
    } else {
      const userNewData = res.locals.userNewData;
      res.status(200).json(userNewData);
    }
  },

  createNewHabit: (req, res, next) => {
    Habit.create({
      userId: req.body.createHabit.userId,
      title: req.body.createHabit.title,
      attribute: req.body.createHabit.attribute,
      tag1: req.body.createHabit.tag1,
      tag2: req.body.createHabit.tag2,
      tag3: req.body.createHabit.tag3,
      ingenuity: req.body.createHabit.ingenuity,
      combos: 1,
      successDays: 0,
      iine: 0,
      todayAchieved: false,
      dayBeforeYesterdayAchieved: false,
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