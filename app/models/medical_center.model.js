module.exports = (sequelize, Sequelize) => {
    const MedicalCenter = sequelize.define("medical_centers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      display_name: {
        type: Sequelize.STRING
      },
      address : {
        type: Sequelize.STRING
      },
      state : {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.INTEGER
      },
      pincode: {
        type: Sequelize.INTEGER
      },
      geocode: {
        type: Sequelize.STRING
      },
      medical_center_spoc_name:{
        type: Sequelize.STRING
      },
      medical_center_email_id: {
        type: Sequelize.STRING
      },
      medical_center_spoc_designation: {
        type: Sequelize.STRING
      },
      medical_center_type : {
        type: Sequelize.STRING
      },
      medical_center_spoc_contact :{
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
    
    });
  
    return MedicalCenter;
  };
  