'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  airline.init({
    kode_airline: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    prefik: DataTypes.STRING,
    nama_airline: DataTypes.STRING,
    nation: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'airline',
  });
  return airline;
};