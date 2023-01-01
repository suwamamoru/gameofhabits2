'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Achievements',
      [
        {
          calendarId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          calendarId: 358,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          calendarId: 359,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Achievements', null, {});
  }
};
