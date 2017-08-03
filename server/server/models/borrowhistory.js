'use strict';
module.exports = function(sequelize, DataTypes) {
  var borrowhistory = sequelize.define('borrowhistory', {
    userid: DataTypes.INTEGER,
    bookid: DataTypes.INTEGER,
    action: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return borrowhistory;
};