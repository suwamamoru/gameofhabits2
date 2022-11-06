"use strict";

const User = require("../models").User;

module.exports = {
  login: (req, res, next) => {
    User.findByPk(1)
    .then(users => {
      const usersJson = JSON.stringify(users);
      console.log(usersJson);
    })
    .catch(error => {
      console.error(error);
    })
  },

  register: (req, res, next) => {
    User.create({
      name: req.body.username,
      password: req.body.password,
      degrees: 1,
      sp: 0,
      habits: 0,
      inquiry_title: '',
      inquiry_content: ''
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}