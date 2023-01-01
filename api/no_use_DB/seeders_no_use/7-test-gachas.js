'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Gachas',
      [
        {
          imageName: '1,000,000,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/1%2C000%2C000%2C000SP.png',
          imageSize: '542.9 KB',
          sp: 1000000000,
          probability: 0.0001,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '100,000,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/100%2C000%2C000SP.png',
          imageSize: '557.5 KB',
          sp: 100000000,
          probability: 0.0009,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '10,000,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/10%2C000%2C000SP.png',
          imageSize: '260.5 KB',
          sp: 10000000,
          probability: 0.009,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '1,000,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/1%2C000%2C000SP.png',
          imageSize: '287.1 KB',
          sp: 1000000,
          probability: 0.09,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '100,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/100%2C000SP.png',
          imageSize: '671.0 KB',
          sp: 100000,
          probability: 0.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '10,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/10%2C000SP.png',
          imageSize: '606.6 KB',
          sp: 10000,
          probability: 0.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageName: '1,000SP.png',
          imageType: 'png',
          imageContent: 'https://gameofhabits.s3.ap-northeast-1.amazonaws.com/1%2C000SP.png',
          imageSize: '570.0 KB',
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
