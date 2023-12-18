
module.exports = (sequelize, Sequelize) => {
  const OTP = sequelize.define('otp', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mobileNumber: {
      type: Sequelize.STRING,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    mobileOtp: {
      type: Sequelize.STRING,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    emailOtp: {
      type: Sequelize.STRING,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    mobileExpiresAt: {
      type: Sequelize.DATE,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    emailExpiresAt: {
      type: Sequelize.DATE,
      allowNull: true, // Adjust allowNull based on your requirements
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  });

  return OTP;
};




