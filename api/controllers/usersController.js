'use strict';

const { Model } = require('sequelize');

const User = require('../models').User,
      Habit = require('../models').Habit,
      UserDegree = require('../models').UserDegree,
      Degree = require('../models').Degree,
      HabitAchieveDay = require('../models/habitAchieveDay').HabitAchieveDay,
      AchieveDay = require('../models/achieveDay').AchieveDay;

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
  },
  getUserData: async (req, res, next) => {
    try {
      const userData = await User.findOne({
        where: {
          name: req.body.name
        },
        attributes: ['name', 'sp'],
        include: [
          { model: Habit, attributes: ['title', 'tag1', 'tag2', 'tag3', 'combos'] },
          { model: Degree, include: { model: UserDegree } }
        ]
      })
      res.status(200).json(userData);
    } catch (error) {
      console.log(error);
    }
  }
}