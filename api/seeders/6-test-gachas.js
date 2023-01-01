'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Gachas',
      [
        {
          imageName: 'HR',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/1%2C000%2C000SP.png',
          sp: 1000000,
          probability: 0.09,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: 'R',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/100%2C000SP.png',
          sp: 100000,
          probability: 0.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: 'N+',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/10%2C000SP.png',
          sp: 10000,
          probability: 0.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: 'N',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/1%2C000SP.png',
          sp: 1000,
          probability: 0.4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gachas', null, {});
  }
};
