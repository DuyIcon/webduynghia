'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order.init({
    userID: DataTypes.STRING,
    comicID: DataTypes.STRING,
    total_quantity: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT,  
    buy_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};