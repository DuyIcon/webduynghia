'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comic_user', {
      id: {
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING
      },
      comicID: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('comic_user');
  }
};