const controller = require("../../app/controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.get("/api/users", controller.getUsers);
  app.post("/api/setUserData", controller.setUserData);
  app.post("/api/removeUserData", controller.removeUserData);
  app.post("/api/registerUser", controller.registerUser);
  app.post("/api/registervisitor", controller.registervisitor);
  app.post("/api/registerCompany", controller.registerCompany);
  app.get("/api/companies", controller.getCompanies);
};
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

const controller = require("../../app/controllers/booth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
 
  app.get("/api/booth/programs/get", controller.getProgramsSelector);
  app.get("/api/booth/graphics/get", controller.getGraphics);
  app.get("/api/graphics", controller.getAllGraphics);
  app.get("/api/programs/get", controller.getPrograms);
  app.post("/api/programs/insert", controller.insertProgram);
  app.put("/api/programs/update", controller.updateProgram);
  app.delete("/api/programs/delete", controller.deleteProgram);

  app.put("/api/booth/layout/set", controller.setLayout);
  app.put("/api/booth/color/set", controller.setColor);
  app.put("/api/booth/graphics/set", controller.setGraphics);
  app.put("/api/booth/publish/set", controller.setPublish);
  app.put("/api/booth/publish/setUser", controller.setPublishUser);

  app.get("/api/menu/get", controller.getMenus);
  app.post("/api/menu/insert", controller.insertMenu);
  app.put("/api/menu/update", controller.updateMenu);
  app.delete("/api/menu/delete", controller.deleteMenu);

  app.get("/api/materials", controller.getAllMats);
  app.get("/api/materials/get", controller.getMats);
  app.post("/api/materials/insert", controller.insertMat);
  app.put("/api/materials/update", controller.updateMat);
  app.delete("/api/materials/delete", controller.deleteMat);
  app.put("/api/uploadDoc", controller.uploadDoc);

  app.post("/api/booth/insert", controller.insertBooth);
  app.get("/api/booth/get", controller.getBooth);
  app.put("/api/booth/update", controller.updateBoothPosition);
  app.get("/api/booths", controller.getBooths);
  app.post("/api/graphics/insert", controller.insertGraphics);
  app.put("/api/booth/graphics/reset", controller.resetBanners);
};
