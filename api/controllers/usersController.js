"use strict";

const Users = require("../models").users,
      passport = require('passport'),
      { validationResult } = require('express-validator');

module.exports = {
  register: (req, res, next) => {
    Users.create({
      name: req.body.username,
      password: req.body.password,
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
      console.log(errorMessages);
      res.status(422).json(errorMessages);
    } else {
      next();
    }
  }
}