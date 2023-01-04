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
      Users.belongsToMany(models.Products,{
        as:'userTransactions',
        through:'transaction',
        foreignKey:'user_id',
        otherKey:'product_id',
        timestamps:false
      })
    }
  }

    Users.init({
      fullName:DataTypes.STRING(55),
      birthDate:DataTypes.DATE,
      email:DataTypes.STRING(55),
      mobilePhone:DataTypes.INTEGER,
      address:DataTypes.STRING(255),
      city:DataTypes.INTEGER,
      country:DataTypes.INTEGER,
      profile:DataTypes.INTEGER,
      password:DataTypes.STRING(55),
      avatar:DataTypes.STRING(255)
    },{
        sequelize,
        modelName: 'Users',
        tableName: 'user',
  });
    return Users;
};

