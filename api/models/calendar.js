'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calendar.hasMany(models.Achievement, {
        foreignKey: 'calendarId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Calendar.init({
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    week: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Calendar'
  });
  return Calendar;
};