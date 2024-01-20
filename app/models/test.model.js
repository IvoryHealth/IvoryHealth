module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("tests", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    }
    });
  
    return Test;
  };
  