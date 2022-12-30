const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adress', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    streetNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dept: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adress',
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
    ]
  });
};
