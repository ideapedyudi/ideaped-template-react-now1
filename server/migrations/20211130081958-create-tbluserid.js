'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbluserids', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      User: {
        type: Sequelize.STRING
      },
      Nopeg: {
        type: Sequelize.STRING
      },
      Psw: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      UpDate: {
        type: Sequelize.DATE
      },
      Expired_date: {
        type: Sequelize.DATE
      },
      User_Lvl: {
        type: Sequelize.STRING
      },
      User_Sts: {
        type: Sequelize.INTEGER
      },
      creator: {
        type: Sequelize.STRING
      },
      lastOn: {
        type: Sequelize.DATE
      },
      lastoff: {
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbluserids');
  }
};