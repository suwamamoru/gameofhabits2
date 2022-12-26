'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Habit.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      Habit.belongsToMany(models.Achievement, {
        through: models.HabitAchievement,
        foreignKey: 'achievementId'
      });
      Habit.hasMany(models.HabitAchievement, {
        foreignKey: 'habitId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Habit.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    tag1: DataTypes.STRING,
    tag2: DataTypes.STRING,
    tag3: DataTypes.STRING,
    ingenuity: DataTypes.STRING,
    successDays: DataTypes.INTEGER,
    todayAchieved: DataTypes.BOOLEAN,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Habit'
  });
  return Habit;
};