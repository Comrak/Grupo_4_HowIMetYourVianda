"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      mobilePhone: {
        type: Sequelize.STRING,
      },
      address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserRol",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      country_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Country",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      password: {
        type: Sequelize.STRING,
      },
      confirmPassword: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};
