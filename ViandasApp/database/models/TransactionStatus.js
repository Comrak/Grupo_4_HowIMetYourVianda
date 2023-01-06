'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionStatus.hasMany(models.Transactions,{
        as:'transactionStatus',
        foreignKey:'status_id'
      })
    }
  }
  TransactionStatus.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransactionStatus',
    tableName:'transactionStatus'
  });
  return TransactionStatus;
};