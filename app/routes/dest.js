const controller = require("../../app/controllers/dest.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/destinations/get", controller.getDestinations);
  app.post("/api/destinations/insert", controller.insertDestination);
  app.put("/api/destinations/update", controller.updateDestination);
  app.delete("/api/destinations/delete", controller.deleteDestination);

  app.put("/api/updateFlag", controller.updateFlag);
};
