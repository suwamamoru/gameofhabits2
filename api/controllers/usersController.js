'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      UserDegree = require('../models').UserDegree,
      Degree = require('../models').Degree;

module.exports = {
  getUser: async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          name: req.body.name
        }
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  getHabit: async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          name: req.body.name
        }
      });
      const habit = await Habit.findAll({
        where: {
          userId: user.id
        }
      });
      res.status(200).json(habit);
    } catch (error) {
      console.log(error);
    }
  },
  getDegree: async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          name: req.body.name
        }
      });
      const userDegree = await UserDegree.findOne({
        where: {
          userId: user.id
        }
      });
      const degree = await Degree.findOne({
        where: {
          id: userDegree.degreeId
        }
      });
      res.status(200).json(degree);
    } catch (error) {
      console.log(error);
    }
  }
}