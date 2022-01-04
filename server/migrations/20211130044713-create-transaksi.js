'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaksi', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      btbno: {
        type: Sequelize.STRING
      },
      procdate: {
        type: Sequelize.DATE
      },
      awbno: {
        type: Sequelize.STRING
      },
      pcs: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      ttlvol: {
        type: Sequelize.STRING
      },
      fltno: {
        type: Sequelize.STRING
      },
      fltdt: {
        type: Sequelize.STRING
      },
      partial: {
        type: Sequelize.INTEGER
      },
      dest: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      pallet: {
        type: Sequelize.STRING
      },
      Agentnm: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      customer: {
        type: Sequelize.STRING
      },
      airline: {
        type: Sequelize.STRING
      },
      commodity: {
        type: Sequelize.STRING
      },
      icode: {
        type: Sequelize.STRING
      },
      ccode: {
        type: Sequelize.STRING
      },
      dcode: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.INTEGER
      },
      ratecode: {
        type: Sequelize.STRING
      },
      procjam: {
        type: Sequelize.TIME
      },
      CSCNO: {
        type: Sequelize.STRING
      },
      SCM: {
        type: Sequelize.STRING
      },
      SCM2: {
        type: Sequelize.STRING
      },
      CRcode: {
        type: Sequelize.STRING
      },
      intdom: {
        type: Sequelize.STRING
      },
      via: {
        type: Sequelize.STRING
      },
      nom: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transaksi');
  }
};