'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRol.hasMany(models.Users, {
        as: 'roles',
        foreignKey: 'role_id'
      })
    }
  }
  UserRol.init({
    role: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserRol',
    tableName: 'userRol'
  });
  return UserRol;
};