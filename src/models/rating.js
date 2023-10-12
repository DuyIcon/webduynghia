'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rating.init({
    userID: DataTypes.STRING,
    comicID: DataTypes.STRING,
    ratings: DataTypes.FLOAT,
    content: DataTypes.TEXT,  
    create_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};