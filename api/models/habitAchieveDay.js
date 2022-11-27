'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabitAchieveDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HabitAchieveDay.belongsTo(models.Habit, {
        foreignKey: 'habitId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      HabitAchieveDay.belongsTo(models.AchieveDay, {
        foreignKey: 'achieveDayId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  HabitAchieveDay.init({
    habitId: DataTypes.INTEGER,
    achieveDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabitAchieveDay',
  });
  return HabitAchieveDay;
};