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
          updatedAt: new Date()
        },
        {
          habitId: 1,
          achieveDayId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          habitId: 2,
          achieveDayId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HabitAchieveDays', null, {});
  }
};
