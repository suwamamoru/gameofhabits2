'use strict';

const { check } = require('express-validator');

const registerValidator = (req, res) => {
  return [
    check('username')
      .notEmpty()
      .withMessage('User Nameを入力してください。'),
    check('password')
      .isLength({ min: 7 })
      .withMessage('Passwordは7文字以上で入力してください。')
  ]
}

module.exports = { registerValidator };