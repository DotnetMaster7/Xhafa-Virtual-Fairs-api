const controller = require("../../app/controllers/materials.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.put("/api/uploadDoc", controller.uploadDoc);
  app.get("/api/materials/get", controller.getMats);
  app.post("/api/materials/insert", controller.insertMat);
  app.put("/api/materials/update", controller.updateMat);
  app.delete("/api/materials/delete", controller.deleteMat);
};
