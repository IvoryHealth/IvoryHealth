module.exports = (sequelize, Sequelize) => {
    const Package = sequelize.define("packages", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      medical_center_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      background_image: {
        type : Sequelize.STRING(500)
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
  
    });
  
    return Package;
  };
  