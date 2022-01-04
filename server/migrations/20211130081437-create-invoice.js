'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceno: {
        type: Sequelize.STRING
      },
      procdate: {
        type: Sequelize.DATE
      },
      procjam: {
        type: Sequelize.TIME
      },
      awbno: {
        type: Sequelize.STRING
      },
      pcs: {
        type: Sequelize.INTEGER
      },
      kgbaru: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      btbno: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      tax: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      ttlamount: {
        type: Sequelize.INTEGER
      },
      OTHCHARGE: {
        type: Sequelize.STRING
      },
      DISCOUNT: {
        type: Sequelize.STRING
      },
      DISCAMNT: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.STRING
      },
      invto: {
        type: Sequelize.STRING
      },
      customer: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      KWTNO: {
        type: Sequelize.STRING
      },
      kwtstat: {
        type: Sequelize.STRING
      },
      kwtbuat: {
        type: Sequelize.STRING
      },
      kwtpaidby: {
        type: Sequelize.STRING
      },
      kwttgl: {
        type: Sequelize.DATE
      },
      kwtjam: {
        type: Sequelize.TIME
      },
      INVMOP: {
        type: Sequelize.STRING
      },
      kwtamount: {
        type: Sequelize.INTEGER
      },
      cnote: {
        type: Sequelize.STRING
      },
      crate: {
        type: Sequelize.INTEGER
      },
      CNamount: {
        type: Sequelize.INTEGER
      },
      fakturno: {
        type: Sequelize.STRING
      },
      npwp: {
        type: Sequelize.STRING
      },
      air: {
        type: Sequelize.STRING
      },
      synced: {
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
    await queryInterface.dropTable('invoice');
  }
};