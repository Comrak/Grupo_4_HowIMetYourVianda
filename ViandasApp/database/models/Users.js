'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.UserRol,{
        as:'userRole',
        foreignKey:'role_id',
      }),
      Users.belongsTo(models.Address,{
        as:'userAddress',
        foreignKey:'address_id', 
      }),
      Users.belongsTo(models.Country,{
        as:'userCountry',
        foreignKey:'country_id',
      }),
      Users.belongsToMany(models.Products,{
        as:'userTransactions',
        through:'transaction',
        foreignKey:'user_id',
        otherKey:'product_id',
        timestamps:false
      }),
      Users.hasMany(models.Address,{
        as:'addresses',
        foreignKey:'user_id',
      })
    

    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    mobilePhone: DataTypes.STRING,
    address_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName:'user'
  });
  return Users;
};