'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Habit, {
        foreignKey: 'userId'
      });
      User.belongsToMany(models.Degree, {
        through: models.UserDegree,
        foreignKey: 'degreeId'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    sp: DataTypes.INTEGER,
    inquiry_title: DataTypes.STRING,
    inquiry_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};