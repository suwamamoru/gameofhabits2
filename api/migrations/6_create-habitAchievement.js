'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabitAchievements', {
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
      achievementId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Achievements',
          key: 'id',
          as: 'achievementId'
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
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HabitAchievements');
  }
};