'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comic.init({
    nameComic: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    category: DataTypes.STRING,  
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    categoryID: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'comic',
  });
  return comic;
};