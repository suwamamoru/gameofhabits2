'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AchievementDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AchievementDate.belongsToMany(models.Habit, {
        through: models.HabitAchievement,
        foreignKey: 'habitId'
      });
      AchievementDate.hasMany(models.HabitAchievement, {
        foreignKey: 'achievementId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  AchievementDate.init({
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    week: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'AchievementDate'
  });
  return AchievementDate;
};