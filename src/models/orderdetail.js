'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orderdetail.init({
    oderID: DataTypes.STRING,
    comicID: DataTypes.STRING,
    number: DataTypes.INTEGER,
    price: DataTypes.FLOAT,  
  }, {
    sequelize,
    modelName: 'orderdetail',
  });
  return orderdetail;
};