'use strict';
export default = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      othername: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      borrowedbooks: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      membershipLevel: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Silver'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.dropTable('Users');
  }
};