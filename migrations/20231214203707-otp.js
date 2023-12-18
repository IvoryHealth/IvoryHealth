'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('otps', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mobileNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobileOtp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emailOtp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobileExpiresAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      emailExpiresAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('otps');
  },
};
