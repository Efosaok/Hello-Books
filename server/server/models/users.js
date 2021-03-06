'use strict';
module.exports = (sequelize, DataTypes)=> {
  var Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    othername: DataTypes.STRING,
    mobilenumber: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};