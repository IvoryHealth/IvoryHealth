module.exports = (sequelize, Sequelize) => {
  const account = sequelize.define("account", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username:{
      type: Sequelize.STRING

    },
    gender:{
      type: Sequelize.STRING

    },
    password: {
      type: Sequelize.STRING
    },
    last_login: {
      type: Sequelize.DATE
    },
    dob: {
      type: Sequelize.DATE
    },
    is_superuser: {
      type: Sequelize.BOOLEAN
    },

    email: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    date_joined: {
      type: Sequelize.DATE
    },
    is_active: {
      type: Sequelize.BOOLEAN
    },
    phone: {
      type: Sequelize.BIGINT
    },
    address: {
      type: Sequelize.STRING
    },
    
    deleted: {
      type: Sequelize.BOOLEAN
    },
    deleted_at: {
      type: Sequelize.DATE
    },
    role: {
      type: Sequelize.INTEGER
    },
    is_verified: {
      type: Sequelize.BOOLEAN
    },
   
    // Add other fields similarly
  });

  return account;
};