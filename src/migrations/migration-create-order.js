'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING
      },
      comicID: {
        type: Sequelize.STRING
      },
      total_quantity: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.FLOAT
      },
      buy_date: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order');
  }
};