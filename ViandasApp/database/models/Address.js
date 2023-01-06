'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.hasMany(models.Users,{
        as:'addresses',
        foreignKey:'address_id',
      }),
      Address.belongsTo(models.Country,{
        as:'country',
        foreignKey:'country_id',
      }),
      Address.belongsTo(models.City,{
        as:'city',
        foreignKey:'city_id',
      }),
      Address.belongsToMany(models.Users,{
        as:'addressUser',
        through:'user_address',
        foreignKey:'address_id',
        otherKey:'user_id',
        timestamps:true
      })
    }
  }
  Address.init({
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    dept: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER
 
  }, {
    sequelize,
    modelName: 'Address',
    tableName:'address'
    
  });
  return Address;
};