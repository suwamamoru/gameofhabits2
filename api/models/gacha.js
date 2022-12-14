'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gacha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gacha.init({
    imageName: DataTypes.STRING,
    imageType: DataTypes.STRING,
    imageContent: DataTypes.STRING,
    imageSize: DataTypes.STRING,
    sp: DataTypes.INTEGER,
    probability: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Gacha',
  });
  return Gacha;
};