'use strict';
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('bookcategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryname: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable('bookcategories');
  }
};