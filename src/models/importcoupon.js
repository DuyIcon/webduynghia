'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class importcoupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  importcoupon.init({
    import_date: DataTypes.DATE,  
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'importcoupon',
  });
  return importcoupon;
};