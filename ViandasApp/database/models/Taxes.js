'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taxes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Taxes.init({
    tax: DataTypes.STRING,
    description: DataTypes.STRING,
    rate: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Taxes',
    tableName:'tax'
  });
  return Taxes;
};