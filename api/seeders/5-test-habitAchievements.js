'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'HabitAchievements',
      [
        {
          habitId: 1,
          achievementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 1,
          achievementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achievementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          habitId: 2,
          achievementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HabitAchievements', null, {});
  }
};
