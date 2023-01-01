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
        foreignKey: 'userId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      User.belongsTo(models.Degree, {
        foreignKey: 'degreeId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    sp: DataTypes.INTEGER,
    degreeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};