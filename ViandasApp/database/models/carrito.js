'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carrito.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    activo: DataTypes.BOOLEAN,
    producto: DataTypes.INTEGER,
    usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};