'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDegree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserDegree.belongsTo(models.Degree, {
        foreignKey: 'degreeId'
      });
    }
  }
  UserDegree.init({
    userId: DataTypes.INTEGER,
    degreeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserDegree',
  });
  return UserDegree;
};