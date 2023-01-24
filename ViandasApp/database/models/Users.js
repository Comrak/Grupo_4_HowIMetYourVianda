'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD:ViandasApp/src/database/models/Users.js
=======
      // define association here
      Users.belongsTo(models.UserRol,{
        as:'userRole',
        foreignKey:'role_id',
      }),
      Users.belongsTo(models.Address,{
        as:'userAddress',
        foreignKey:'address_id', 
      }),
      Users.belongsTo(models.Country,{
        as:'userCountry',
        foreignKey:'country_id',
      }),
>>>>>>> 952ce94a81e5d09bd94fb3b8f63bab8d359f1b8e:ViandasApp/database/models/Users.js
      Users.belongsToMany(models.Products,{
        as:'userTransactions',
        through:'transaction',
        foreignKey:'user_id',
        otherKey:'product_id',
        timestamps:false
<<<<<<< HEAD:ViandasApp/src/database/models/Users.js
      })
    }
  }

    Users.init({
      fullName:DataTypes.STRING(55),
      birthDate:DataTypes.DATE,
      email:DataTypes.STRING(55),
      mobilePhone:DataTypes.INTEGER,
      address:DataTypes.STRING(255),
      city:DataTypes.INTEGER,
      country:DataTypes.INTEGER,
      profile:DataTypes.INTEGER,
      password:DataTypes.STRING(55),
      avatar:DataTypes.STRING(255)
    },{
        sequelize,
        modelName: 'Users',
        tableName: 'user',
  });
    return Users;
};

=======
      }),
      Users.hasMany(models.Address,{
        as:'addresses',
        foreignKey:'user_id',
      })
    

    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    mobilePhone: DataTypes.STRING,
    address_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName:'user'
  });
  return Users;
};
>>>>>>> 952ce94a81e5d09bd94fb3b8f63bab8d359f1b8e:ViandasApp/database/models/Users.js
