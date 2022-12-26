'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabitAchievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HabitAchievement.belongsTo(models.Habit, {
        foreignKey: 'habitId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      HabitAchievement.belongsTo(models.Achievement, {
        foreignKey: 'achievementId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  HabitAchievement.init({
    habitId: DataTypes.INTEGER,
    achievementId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'HabitAchievement'
  });
  return HabitAchievement;
};