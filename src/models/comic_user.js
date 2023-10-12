'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comic_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comic_user.init({
    userID: DataTypes.STRING,
    comicID: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'comic_user',
  });
  return comic_user;
};