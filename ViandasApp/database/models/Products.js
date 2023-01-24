'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD:ViandasApp/src/database/models/Products.js
  class User extends Model {
=======
  class Products extends Model {
>>>>>>> 952ce94a81e5d09bd94fb3b8f63bab8d359f1b8e:ViandasApp/database/models/Products.js
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD:ViandasApp/src/database/models/Products.js
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
=======
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
>>>>>>> 952ce94a81e5d09bd94fb3b8f63bab8d359f1b8e:ViandasApp/database/models/Products.js
