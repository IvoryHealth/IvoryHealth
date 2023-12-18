'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add a new column 'roleId' to store the foreign key
    await queryInterface.addColumn('accounts', 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: true, // or false, depending on your requirements
      references: {
        model: 'roles', // name of the referenced table
        key: 'id',       // primary key of the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' or 'SET DEFAULT'
    });

    // Add an index to the new column for performance
    await queryInterface.addIndex('accounts', ['roleId']);
  },

  async down(queryInterface, Sequelize) {
    // Remove the added column and index
    await queryInterface.removeColumn('accounts', 'roleId');
    await queryInterface.removeIndex('accounts', ['roleId']);
  },
};
