'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class importcoupondetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  importcoupondetail.init({
    importcouponID: DataTypes.STRING,
    comicID: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    author: DataTypes.STRING,
    pulisher: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'importcoupondetail',
  });
  return importcoupondetail;
};