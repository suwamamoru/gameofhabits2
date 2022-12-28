'use strict';

const User = require('../models').User,
      Habit = require('../models').Habit,
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt'),
      { validationResult } = require('express-validator');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { name: req.body.username } });
      if (user) {
        const password = await bcrypt.compare(req.body.password, user.password);
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
      tag1: '未設定',
      tag2: '',
      tag3: '',
      ingenuity: '未設定',
      successDays: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    })
    .then(() => {
      console.log('createHabit');
      res.status(200).end();
    })
    .catch((error) => {
      console.log('Habit Creation Error in createHabit: ' + error);
      res.status(500).end();
    });
  }
}