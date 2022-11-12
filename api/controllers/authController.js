'use strict';

const Users = require('../models').users,
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt'),
      { validationResult } = require('express-validator');

module.exports = {
  loginJwt: async (req, res, next) => {
    const user = await Users.findOne({ where: { name: req.body.username } });
    await bcrypt.compare(req.body.password, user.password)
    .then(() => {
      const token = jwt.sign({
        name: req.body.username,
        password: req.body.password
      }, "secretKey");
      res.json({ token });
    })
    .catch(error => {
      console.log(error);
      res.status(403).json('ユーザーが存在しないか、パスワードに誤りがあります。');
    });
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
      res.status(422).json(errorMessages);
    } else {
      next();
    }
  },

  register: async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    Users.create({
      name: req.body.username,
      password: hashedPassword,
      degrees: 1,
      sp: 0,
      habits: 0,
      inquiry_title: '',
      inquiry_content: ''
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