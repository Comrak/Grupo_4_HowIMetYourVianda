const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    transactionDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactionstatus',
        key: 'id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactiontype',
        key: 'id'
      }
    },
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'id'
      }
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productTax: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: false
    },
    transactionAmount: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    transactionDescription: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paymentMethod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paymentmethod',
        key: 'id'
      }
    },
    paymentStatus_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paymentstatus',
        key: 'id'
      }
    },
    transactionPaymenid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "currency_id",
        using: "BTREE",
        fields: [
          { name: "currency_id" },
        ]
      },
      {
        name: "paymentMethod_id",
        using: "BTREE",
        fields: [
          { name: "paymentMethod_id" },
        ]
      },
      {
        name: "paymentStatus_id",
        using: "BTREE",
        fields: [
          { name: "paymentStatus_id" },
        ]
      },
    ]
  });
};
