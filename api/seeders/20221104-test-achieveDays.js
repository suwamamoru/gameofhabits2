'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'AchieveDays',
      [
        {
          year: 2022,
          month: 11,
          day: 21,
          week: '月',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: 2022,
          month: 11,
          day: 22,
          week: '火',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: 2022,
          month: 11,
          day: 23,
          week: '水',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: 2022,
          month: 11,
          day: 24,
          week: '木',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: 2022,
          month: 11,
          day: 25,
          week: '金',
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
