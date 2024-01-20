module.exports = (sequelize, Sequelize) => {
    const SubTests = sequelize.define("sub_tests", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: Sequelize.STRING
    },
    sell_price: {
        type: Sequelize.STRING
    },
    cost_price: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    }
    });
  
    return SubTests;
  };
  