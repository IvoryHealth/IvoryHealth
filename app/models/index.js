const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.packages = require("../models/package.model.js")(sequelize, Sequelize);
db.medicalCenters = require("../models/medical_center.model.js")(sequelize, Sequelize);
db.tests = require("../models/test.model.js")(sequelize, Sequelize);
db.subTests = require("../models/sub_test.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

//Bank.belongsTo(companyData, {foreignKey: 'bankingId'});
//companyData.hasOne(Bank, {foreignKey: 'bankId'});

db.medicalCenters.hasMany(db.packages,{foreignKey: 'medical_center_id'});
db.packages.belongsTo(db.medicalCenters, {foreignKey: 'medical_center_id'});

db.packages.belongsToMany(db.tests, {
  through: "package_details"
});

db.tests.belongsToMany(db.packages, {
  through: "package_details"
});

db.subTests.belongsToMany(db.tests, {
  through: "test_details"
});

db.tests.belongsToMany(db.subTests, {
  through: "test_details"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
