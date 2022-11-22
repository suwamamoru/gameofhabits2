'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achieve_day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Achieve_day.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Achieve_day',
  });
  return Achieve_day;
};