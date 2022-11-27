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
        attributes: ['name', 'sp'],
        include: [
          {
            model: Habit,
            attributes: ['title', 'tag1', 'tag2', 'tag3', 'combos', 'successDays'],
            include: [{
              model: HabitAchieveDay,
              attributes: ['id'],
              include: [{ model: AchieveDay, attributes: ['month', 'day', 'week'] }]
            }]
          },
          { model: Degree, attributes: ['name'] }
        ]
      })
      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
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
            return date - weekNum - 6 + i  // 今週i曜日の日にちを返す。
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
    res.status(200).json(thisAllDate);
  }
}