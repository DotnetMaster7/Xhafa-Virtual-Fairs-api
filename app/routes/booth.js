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

  app.get("/api/booth/get", controller.getBooth);
  app.get("/api/booths/get", controller.getBooths);

  app.put("/api/booth/layout/set", controller.setLayout);
  app.put("/api/booth/color/set", controller.setColor);
  app.put("/api/booth/publish/set", controller.setPublish);

  app.put("/api/company/updateInfo", controller.updateInfo);

  app.get("/api/booth/getReady", controller.getReadyBooths);
  app.get("/api/booth/getReadyCount", controller.getReadyCount);
  app.put("/api/booth/update", controller.updateBoothPosition);

  app.put("/api/booth/updateVisits", controller.updateVisits);
  app.put("/api/booth/updateChats", controller.updateChats);
  app.put("/api/booth/updateVideos", controller.updateVideos);
  
};
