const controller = require("../../app/controllers/fairs.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/fairs/get", controller.getFairs);
  app.post("/api/fairs/insert", controller.insertFair);
  app.put("/api/fairs/update", controller.updateFair);
  app.delete("/api/fairs/delete", controller.deleteFair);
};
