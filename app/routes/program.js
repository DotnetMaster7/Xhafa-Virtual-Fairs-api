const controller = require("../../app/controllers/program.controller");

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
  app.post("/api/booth/programs/insert", controller.insertProgramSelector);
  app.put("/api/booth/programs/update", controller.updateProgramSelector);
  app.delete("/api/booth/programs/delete", controller.deleteProgramSelector);

  app.get("/api/programs/get", controller.getPrograms);
  app.put("/api/programs/update", controller.updateProgram);

  app.put("/api/updateIcon", controller.updateIcon);
};
