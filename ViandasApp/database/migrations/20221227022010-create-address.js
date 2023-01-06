"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("address", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      floor: {
        type: Sequelize.INTEGER,
      },
      dept: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.INTEGER,
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "City",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Country",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("address");
  },
};
