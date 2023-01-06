'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product',
          key: 'id'        
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'transactionstatus',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TransactionType',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
          },
      currency_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'currency',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      productQuantity: {
        type: Sequelize.INTEGER
      },
      productPrice: {
        type: Sequelize.DECIMAL
      },
      productTax: {
        type: Sequelize.DECIMAL
      },
      transactionAmount: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      deliveryCharge: {
        type: Sequelize.DECIMAL
      },
      paymentMethod_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'paymentmethod',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

      },
      paymentStatus_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'paymentstatus',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
        
      },
      transactionPaymentId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction');
  }
};