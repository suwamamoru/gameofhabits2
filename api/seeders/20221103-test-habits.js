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
          attribute: '良い習慣',
          tag1: '運動',
          tag2: 'ウォーキング',
          tag3: '',
          ingenuity: '朝起きたらなるべく早く外に出る',
          combos: 1,
          successDays: 4,
          iine: 0,
          todayAchieved: true,
          dayBeforeYesterdayAchieved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          userId: 1,
          title: '23時就寝',
          attribute: '良い習慣',
          tag1: '睡眠',
          tag2: '',
          tag3: '',
          ingenuity: 'スクリーンタイムで21時に画面消灯するように設定',
          combos: 1,
          successDays: 3,
          iine: 0,
          todayAchieved: false,
          dayBeforeYesterdayAchieved: false,
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
