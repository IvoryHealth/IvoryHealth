const { authJwt } = require("../middleware");
const controller = require("../controllers/package.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.post("/api/package/add", controller.addPackage);
  
    app.get("/api/package/get/:id?", controller.getPackages);

    app.get("/api/package/getAll", controller.getAllPackages);

    app.get("/api/package/getPackageDetails/:id?", controller.getPackageDetails);

    //app.get("/api/test/getTestDetails/:id?", controller.getTestDetails);
    
  };