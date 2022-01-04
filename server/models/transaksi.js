'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transaksi.init({
    nom: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    btbno: DataTypes.STRING,
    procdate: DataTypes.DATE,
    awbno: DataTypes.STRING,
    Hawbno: DataTypes.STRING,
    pcs: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    ttlvol: DataTypes.STRING,
    fltno: DataTypes.STRING,
    fltdt: DataTypes.STRING,
    partial: DataTypes.INTEGER,
    dest: DataTypes.STRING,
    user: DataTypes.STRING,
    pallet: DataTypes.STRING,
    Agentnm: DataTypes.STRING,
    status: DataTypes.STRING,
    customer: DataTypes.STRING,
    airline: DataTypes.STRING,
    commodity: DataTypes.STRING,
    icode: DataTypes.STRING,
    ccode: DataTypes.STRING,
    dcode: DataTypes.STRING,
    barcode: DataTypes.INTEGER,
    ratecode: DataTypes.STRING,
    procjam: DataTypes.TIME,
    CSCNO: DataTypes.STRING,
    SCM: DataTypes.STRING,
    SCM2: DataTypes.STRING,
    CRcode: DataTypes.STRING,
    intdom: DataTypes.STRING,
    via: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'transaksi',
  });
  return transaksi;
};