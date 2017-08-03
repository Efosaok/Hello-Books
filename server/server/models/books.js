'use strict';
module.exports = function(sequelize, DataTypes) {
  var Books = sequelize.define('Books', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    isclicense: DataTypes.STRING,
    title:DataTypes.STRING,
    Description:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Books;
};