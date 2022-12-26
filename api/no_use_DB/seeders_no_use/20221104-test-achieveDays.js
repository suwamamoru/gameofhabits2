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
          day: 28,
          week: '月',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 11,
          day: 29,
          week: '火',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 11,
          day: 30,
          week: '水',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 1,
          week: '木',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 2,
          week: '金',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 3,
          week: '土',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 4,
          week: '日',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 11,
          day: 28,
          week: '月',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 11,
          day: 29,
          week: '火',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 11,
          day: 30,
          week: '水',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 1,
          week: '木',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 2,
          week: '金',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 3,
          week: '土',
          achieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          year: 2022,
          month: 12,
          day: 4,
          week: '日',
          achieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AchieveDays', null, {});
  }
};
