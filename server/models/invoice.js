'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  invoice.init({
    invoiceno: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    procdate: DataTypes.DATE,
    procjam: DataTypes.TIME,
    awbno: DataTypes.STRING,
    pcs: DataTypes.INTEGER,
    kgbaru: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    btbno: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    tax: DataTypes.STRING,
    user: DataTypes.STRING,
    ttlamount: DataTypes.INTEGER,
    OTHCHARGE: DataTypes.STRING,
    DISCOUNT: DataTypes.STRING,
    DISCAMNT: DataTypes.STRING,
    admin: DataTypes.STRING,
    invto: DataTypes.STRING,
    customer: DataTypes.STRING,
    status: DataTypes.STRING,
    KWTNO: DataTypes.STRING,
    kwtstat: DataTypes.STRING,
    kwtbuat: DataTypes.STRING,
    kwtpaidby: DataTypes.STRING,
    kwttgl: DataTypes.DATE,
    kwtjam: DataTypes.TIME,
    INVMOP: DataTypes.STRING,
    kwtamount: DataTypes.INTEGER,
    cnote: DataTypes.STRING,
    crate: DataTypes.INTEGER,
    CNamount: DataTypes.INTEGER,
    fakturno: DataTypes.STRING,
    npwp: DataTypes.STRING,
    air: DataTypes.STRING,
    synced: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'invoice',
  });
  return invoice;
};