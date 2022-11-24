'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabitAchieveDays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      habitId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Habits',
          key: 'id',
          as: 'habitId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      achieveDayId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AchieveDays',
          key: 'id',
          as: 'achieveDayId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('HabitAchieveDays');
  }
};