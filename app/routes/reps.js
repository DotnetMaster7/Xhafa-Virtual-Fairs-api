const controller = require("../../app/controllers/reps.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/representatives", controller.representativesMain);

  app.get("/api/representatives/getComReps", controller.getComReps);
  app.post("/api/representatives/insertComReps", controller.insertComRep);

  app.get("/api/representatives/get", controller.getReps);
  app.post("/api/representatives/insert", controller.insertRep);
  app.put("/api/representatives/update", controller.updateRep);
  app.delete("/api/representatives/delete", controller.deleteRep);
};
