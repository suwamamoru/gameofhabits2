'use strict';  // no combos

const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Degrees',
      [
        {
          name: '新入社員レベル1',
          sp_required: 0,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル2',
          sp_required: 113400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル3',
          sp_required: 226800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル4',
          sp_required: 340200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル5',
          sp_required: 453600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル6',
          sp_required: 567000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル7',
          sp_required: 680400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル8',
          sp_required: 793800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル9',
          sp_required: 907200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '新入社員レベル10',
          sp_required: 1020600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル11',
          sp_required: 1134000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル12',
          sp_required: 1247400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル13',
          sp_required: 1360800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル14',
          sp_required: 1474200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル15',
          sp_required: 1587600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル16',
          sp_required: 1701000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル17',
          sp_required: 1814400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル18',
          sp_required: 1927800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル19',
          sp_required: 2041200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '先輩社員レベル20',
          sp_required: 2154600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル21',
          sp_required: 2268000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル22',
          sp_required: 2381400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル23',
          sp_required: 2494800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル24',
          sp_required: 2608200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル25',
          sp_required: 2721600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル26',
          sp_required: 2835000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル27',
          sp_required: 2948400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル28',
          sp_required: 3061800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル29',
          sp_required: 3175200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '班長レベル30',
          sp_required: 3288600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル31',
          sp_required: 3402000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル32',
          sp_required: 3515400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル33',
          sp_required: 3628800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル34',
          sp_required: 3742200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル35',
          sp_required: 3855600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル36',
          sp_required: 3969000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル37',
          sp_required: 4082400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル38',
          sp_required: 4195800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル39',
          sp_required: 4309200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '主任レベル40',
          sp_required: 4422600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル41',
          sp_required: 4536000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル42',
          sp_required: 4649400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル43',
          sp_required: 4762800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル44',
          sp_required: 4876200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル45',
          sp_required: 4989600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル46',
          sp_required: 5103000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル47',
          sp_required: 5216400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル48',
          sp_required: 5329800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル49',
          sp_required: 5443200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '係長レベル50',
          sp_required: 5556600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル51',
          sp_required: 5670000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル52',
          sp_required: 5783400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル53',
          sp_required: 5896800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル54',
          sp_required: 6010200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル55',
          sp_required: 6123600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル56',
          sp_required: 6237000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル57',
          sp_required: 6350400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル58',
          sp_required: 6463800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル59',
          sp_required: 6577200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '課長レベル60',
          sp_required: 6690600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル61',
          sp_required: 6804000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル62',
          sp_required: 6917400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル63',
          sp_required: 7030800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル64',
          sp_required: 7144200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル65',
          sp_required: 7257600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル66',
          sp_required: 7371000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル67',
          sp_required: 7484400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル68',
          sp_required: 7597800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル69',
          sp_required: 7711200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '次長レベル70',
          sp_required: 7824600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル71',
          sp_required: 7938000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル72',
          sp_required: 8051400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル73',
          sp_required: 8164800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル74',
          sp_required: 8278200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル75',
          sp_required: 8391600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル76',
          sp_required: 8505000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル77',
          sp_required: 8618400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル78',
          sp_required: 8731800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル79',
          sp_required: 8845200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '部長レベル80',
          sp_required: 8958600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル81',
          sp_required: 9072000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル82',
          sp_required: 9185400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル83',
          sp_required: 9298800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル84',
          sp_required: 9412200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル85',
          sp_required: 9525600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル86',
          sp_required: 9639000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル87',
          sp_required: 9752400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル88',
          sp_required: 9865800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル89',
          sp_required: 9979200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '役員レベル90',
          sp_required: 10092600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル91',
          sp_required: 10206000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル92',
          sp_required: 10319400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル93',
          sp_required: 10432800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル94',
          sp_required: 10546200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル95',
          sp_required: 10659600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル96',
          sp_required: 10773000,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル97',
          sp_required: 10886400,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル98',
          sp_required: 10999800,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル99',
          sp_required: 11113200,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        },
        {
          name: '社長レベル100',
          sp_required: 11226600,
          createdAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)',
          updatedAt: 'Mon Dec 26 2022 13:28:57 GMT+0900 (Japan Standard Time)'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Degrees', null, {});
  }
};