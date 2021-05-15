const controller = require("../../app/controllers/tables.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/users/get", controller.getUser);
  app.get("/api/company/get", controller.getCompany);
  app.get("/api/schools/get", controller.getSchools);
  app.get("/api/companies/get", controller.getAllCompanies);
  app.get("/api/companies/insert", controller.insertCompany);
  // app.get("/api/companies/update", controller.updateCompany);
  // app.get("/api/companies/delete", controller.deleteCompany);

  app.put("/api/Exhibitor/updateInfo", controller.companyupdateExInfo);
  app.put("/api/updatevisitor", controller.updatevisitor);
  app.put("/api/updateCompanyLogo", controller.updateCompanyLogo);
  app.put("/api/updateLogo", controller.updateLogo);

  app.get("/api/representatives/get", controller.getReps);
  app.get("/api/representatives/getAll", controller.getAllReps);
  app.post("/api/representatives/insert", controller.insertRep);
  app.put("/api/representatives/update", controller.updateRep);
  app.delete("/api/representatives/delete", controller.deleteRep);

  app.get("/api/fairs/get", controller.getFairs);
  app.post("/api/fairs/insert", controller.insertFair);
  app.post("/api/programs/insert", controller.insertPrograms);
  app.put("/api/fairs/update", controller.updateFair);
  app.delete("/api/fairs/delete", controller.deleteFair);
};
