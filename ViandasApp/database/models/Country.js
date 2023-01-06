'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.hasMany(models.Address,{
        as:'countries',
        foreignKey:'country_id',
      }),
      Country.hasMany(models.Users,{
        as:'userCountry',
        foreignKey:'country_id',
      })
    }
  }
  Country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
    tableName:'country'
  });
  return Country;
};