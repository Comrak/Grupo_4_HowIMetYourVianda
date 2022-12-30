const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    firtsName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'userrol',
        key: 'id'
      }
    },
    adress: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adress_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adress',
        key: 'id'
      }
    },
    landPhone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mobilePhone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "adress_id",
        using: "BTREE",
        fields: [
          { name: "adress_id" },
        ]
      },
      {
        name: "role_id",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
