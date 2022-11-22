'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Habits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      title: {
        type: Sequelize.STRING
      },
      attribute: {
        type: Sequelize.STRING
      },
      tag1: {
        type: Sequelize.STRING
      },
      tag2: {
        type: Sequelize.STRING
      },
      tag3: {
        type: Sequelize.STRING
      },
      ingenuity: {
        type: Sequelize.STRING
      },
      combos: {
        type: Sequelize.INTEGER
      },
      continue_days: {
        type: Sequelize.INTEGER
      },
      achieve_days: {
        type: Sequelize.INTEGER
      },
      iine: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Habits');
  }
};