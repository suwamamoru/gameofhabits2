'use strict';

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Degrees',
      [
        {
          name: '平社員レベル0',
          sp_required: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル1',
          sp_required: 113400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル2',
          sp_required: 340200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル3',
          sp_required: 680400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル4',
          sp_required: 1134000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル5',
          sp_required: 1701000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル6',
          sp_required: 2381400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '平社員レベル7',
          sp_required: 3175200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル1',
          sp_required: 4082400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル2',
          sp_required: 5103000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル3',
          sp_required: 6237000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル4',
          sp_required: 7484400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル5',
          sp_required: 8845200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '課長レベル6',
          sp_required: 10319400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '部長レベル1',
          sp_required: 11907000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '部長レベル2',
          sp_required: 13608000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '部長レベル3',
          sp_required: 15422400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '部長レベル4',
          sp_required: 17350200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '部長レベル5',
          sp_required: 19391400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル1',
          sp_required: 21546000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル2',
          sp_required: 23814000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル3',
          sp_required: 26195400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル4',
          sp_required: 28690200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル5',
          sp_required: 31298400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル6',
          sp_required: 34020000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル7',
          sp_required: 36855000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル8',
          sp_required: 39803400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル9',
          sp_required: 42865200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル10',
          sp_required: 42865200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '役員レベル11',
          sp_required: 49329000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル1',
          sp_required: 52731000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル2',
          sp_required: 56246400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル3',
          sp_required: 59875200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル4',
          sp_required: 63617400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル5',
          sp_required: 67473000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル6',
          sp_required: 71442000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル7',
          sp_required: 75524400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル8',
          sp_required: 79720200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル9',
          sp_required: 84029400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル10',
          sp_required: 88452000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル11',
          sp_required: 92988000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '社長レベル12',
          sp_required: 97637400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル1',
          sp_required: 100000000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル2',
          sp_required: 102400200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル3',
          sp_required: 107276400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル4',
          sp_required: 112266000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル5',
          sp_required: 117369000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル6',
          sp_required: 122585400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル7',
          sp_required: 127915200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル8',
          sp_required: 133358400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル9',
          sp_required: 138915000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル10',
          sp_required: 144585000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル11',
          sp_required: 150368400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル12',
          sp_required: 156265200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル13',
          sp_required: 162275400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル14',
          sp_required: 168399000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル15',
          sp_required: 174636000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル16',
          sp_required: 180986400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル17',
          sp_required: 187450200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億り人レベル18',
          sp_required: 194027400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル1',
          sp_required: 200718000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル2',
          sp_required: 207522000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル3',
          sp_required: 214439400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル4',
          sp_required: 221470200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル5',
          sp_required: 228614400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル6',
          sp_required: 235872000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル7',
          sp_required: 243243000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル8',
          sp_required: 250727400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル9',
          sp_required: 258325200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル10',
          sp_required: 266036400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル11',
          sp_required: 273861000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル12',
          sp_required: 281799000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル13',
          sp_required: 289850400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '資産家レベル14',
          sp_required: 298015200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル1',
          sp_required: 306293400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル2',
          sp_required: 314685000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル3',
          sp_required: 323190000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル4',
          sp_required: 331808400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル5',
          sp_required: 340540200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル6',
          sp_required: 349385400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル7',
          sp_required: 358344000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル8',
          sp_required: 367416000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル9',
          sp_required: 376601400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル10',
          sp_required: 385900200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '億万長者レベル11',
          sp_required: 395312400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル1',
          sp_required: 404838000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル2',
          sp_required: 414477000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル3',
          sp_required: 424229400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル4',
          sp_required: 434095200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル5',
          sp_required: 444074400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル6',
          sp_required: 454167000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '財閥レベル7',
          sp_required: 464373000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '大富豪',
          sp_required: 1000000000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Degrees', null, {});
  }
};