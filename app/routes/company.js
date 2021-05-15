const controller = require("../../app/controllers/company.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/companies", controller.companiesMain);

  app.get("/api/companies/get", controller.getCompanies);
  app.post("/api/companies/insert", controller.insertCompany);
  app.put("/api/companies/update", controller.updateCompany);
  app.delete("/api/companies/delete", controller.deleteCompany);
};
