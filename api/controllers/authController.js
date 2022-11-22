'use strict';

const User = require('../models').User,
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

  register: async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.create({
      name: req.body.username,
      password: hashedPassword
    })
    .then(() => {
      res.status(200).end();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    });
  }
}