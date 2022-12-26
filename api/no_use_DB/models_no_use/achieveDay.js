'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AchieveDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AchieveDay.belongsToMany(models.Habit, {
        through: models.HabitAchieveDay,
        foreignKey: 'habitId'
      });
      AchieveDay.hasMany(models.HabitAchieveDay, {
        foreignKey: 'achieveDayId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  AchieveDay.init({
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    week: DataTypes.STRING,
    achieved: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'AchieveDay',
  });
  return AchieveDay;
};