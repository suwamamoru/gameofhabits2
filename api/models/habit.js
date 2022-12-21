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
      Habit.belongsToMany(models.AchieveDay, {
        through: models.HabitAchieveDay,
        foreignKey: 'achieveDayId'
      });
      Habit.hasMany(models.HabitAchieveDay, {
        foreignKey: 'habitId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Habit.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    attribute: DataTypes.STRING,
    tag1: DataTypes.STRING,
    tag2: DataTypes.STRING,
    tag3: DataTypes.STRING,
    ingenuity: DataTypes.STRING,
    combos: DataTypes.INTEGER,
    successDays: DataTypes.INTEGER,
    iine: DataTypes.INTEGER,
    todayAchieved: DataTypes.BOOLEAN,
    dayBeforeYesterdayAchieved: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Habit',
  });
  return Habit;
};