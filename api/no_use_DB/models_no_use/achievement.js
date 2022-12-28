'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Achievement.belongsToMany(models.Habit, {
        through: models.HabitAchievement,
        foreignKey: 'habitId'
      });
      Achievement.hasMany(models.HabitAchievement, {
        foreignKey: 'achievementId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      Achievement.belongsTo(models.Calendar, {
        foreignKey: 'calendarId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Achievement.init({
    calendarId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Achievement'
  });
  return Achievement;
};