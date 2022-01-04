'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('airline', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_airline: {
        type: Sequelize.STRING
      },
      prefik: {
        type: Sequelize.STRING
      },
      nama_airline: {
        type: Sequelize.STRING
      },
      nation: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('airline');
  }
};