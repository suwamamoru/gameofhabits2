'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Habits',
      [
        {
          userId: 1,
          title: 'ウォーキング30分',
          tag1: '運動',
          tag2: 'ウォーキング',
          tag3: '',
          ingenuity: '朝起きたらなるべく早く外に出る',
          successDays: 0,
          todayAchieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          userId: 1,
          title: '23時就寝',
          tag1: '睡眠',
          tag2: '',
          tag3: '',
          ingenuity: 'スクリーンタイムで21時に画面消灯するように設定',
          successDays: 0,
          todayAchieved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Habits', null, {});
  }
};
