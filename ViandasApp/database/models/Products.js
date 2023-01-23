'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsToMany(models.Users,{
        as:'productTransaction',
        through:'transaction',
        foreignKey:'product_id',
        otherKey:'user_id',
        timestamps:false
      })
    }
  }
  Products.init({
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
    tableName:'product'
  });
  return Products;
};