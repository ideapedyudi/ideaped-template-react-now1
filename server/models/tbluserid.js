'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbluserid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tbluserid.init({
    User: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    Nopeg: DataTypes.STRING,
    Psw: DataTypes.STRING,
    Name: DataTypes.STRING,
    UpDate: DataTypes.DATE,
    Expired_date: DataTypes.DATE,
    User_Lvl: DataTypes.STRING,
    User_Sts: DataTypes.INTEGER,
    creator: DataTypes.STRING,
    lastOn: DataTypes.DATE,
    lastoff: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'tbluserid',
  });
  return tbluserid;
};