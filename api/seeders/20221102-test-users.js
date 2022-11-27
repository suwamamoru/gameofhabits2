'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'user1',
          password: '$2b$10$aqCbXLqGmqqs6TFBKH4i4.uxOEz0fLM32FRGtO0UHI6I4Ltec.3e.',
          sp: 0,
          degreeId: 10,
          inquiry_title: '',
          inquiry_content: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user2',
          password: '$2b$10$aqCbXLqGmqqs6TFBKH4i4.uxOEz0fLM32FRGtO0UHI6I4Ltec.3e.',
          sp: 0,
          degreeId: 20,
          inquiry_title: '',
          inquiry_content: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
