const express = require('express');
const { authJwt } = require("../middleware");
const rolesController = require("../controllers/roles.controller");


module.exports = function(app) {
app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

// Public route to get all roles
app.get("/api/roles", rolesController.getAllRoles);

// Private route for creating a new role    
app.post(
  "/api/roles",
  [authJwt.verifyToken],
  rolesController.createRole
);

// Private route to get a specific role by ID
app.get(
  "/api/roles/:id",
  [authJwt.verifyToken],
  rolesController.getRoleById
);

// Private route to update a specific role by ID
app.put(
  "/api/roles/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  rolesController.updateRole
);

// Private route to delete a specific role by ID
app.delete(
  "/api/roles/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  rolesController.deleteRole
);

}
