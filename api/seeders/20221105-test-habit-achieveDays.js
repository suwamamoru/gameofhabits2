'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'HabitAchieveDays',
      [
        {
          habitId: 1,
          achieveDayId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achieveDayId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achieveDayId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HabitAchieveDays', null, {});
  }
};
