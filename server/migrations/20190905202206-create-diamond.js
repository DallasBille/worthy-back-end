"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Diamonds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carat: {
        type: Sequelize.INTEGER
      },
      cut: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      clarity: {
        type: Sequelize.STRING
      },
      sold: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Diamonds");
  }
};
