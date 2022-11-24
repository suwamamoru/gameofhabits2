'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'AchieveDays',
      [
        {
          date: '2022-11-21 10:10:10',
          week: 'Monday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-22 10:10:10',
          week: 'Tuesday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-23 10:10:10',
          week: 'Wednesday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-24 10:10:10',
          week: 'Thursday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-25 10:10:10',
          week: 'Friday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-26 10:10:10',
          week: 'Saturday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-11-27 10:10:10',
          week: 'Sunday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AchieveDays', null, {});
  }
};
