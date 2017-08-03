'use strict';
module.exports = function(sequelize, DataTypes) {
  var bookcategories = sequelize.define('bookcategories', {
    categoryname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bookcategories;
};