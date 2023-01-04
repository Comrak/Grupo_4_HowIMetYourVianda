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
      // define association here
    }

  }; 
     Products.init({
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      image: {
        type: DataTypes.STRING(255)
      },
      price: {
          type: DataTypes.DECIMAL(20.2)
      },
      name: {
          type: DataTypes.STRING(55)
      },
      description: {
        type: DataTypes.STRING(255)
      },
      tags: {
        type: DataTypes.STRING(255)
      },
  sequelize,
      modelName: 'Products',
      tableName: 'product'
  });
   return Products;
}