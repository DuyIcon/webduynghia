'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Nguyễn',
      lastName: 'Đình Duy',
      email: 'Duynguyen@example.com',
      password: '123456',
      phone: '0369410365',
      address: 'Việt Nam',
      gender: 1,
      roleID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
