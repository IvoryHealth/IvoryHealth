const { authJwt } = require("../middleware");
const controller = require("../controllers/medicalCenter.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.post("/api/medicalCenter/add", controller.addMedicalCenter);
  
    app.get("/api/medicalCenter/get/:id?", controller.getMedicalCenters);
  };