'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserDegrees',
      [
        {
          userId: 1,
          degreeId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          degreeId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserDegrees', null, {});
  }
};
