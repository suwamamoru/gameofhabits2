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
          combos: 0,
          continue_days: 0,
          iine: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: '23時就寝',
          attribute: '良い習慣',
          tag1: '睡眠',
          tag2: '',
          tag3: '',
          ingenuity: 'スクリーンタイムで21時に画面消灯するように設定',
          combos: 6,
          continue_days: 6,
          iine: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: '朝6時に起床',
          attribute: '良い習慣',
          tag1: '睡眠',
          tag2: '早起き',
          tag3: '',
          ingenuity: 'ベッドを窓際に設置する',
          combos: 0,
          continue_days: 0,
          iine: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Habits', null, {});
  }
};
