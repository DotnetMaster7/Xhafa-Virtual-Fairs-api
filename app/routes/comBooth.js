const controller = require("../../app/controllers/comBooth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/com/booth/get", controller.getComBooth);
  app.get("/api/com/graphics/get", controller.getComGraphics);
  app.get("/api/com/graphics/all", controller.getAllComGraphics);
  app.get("/api/com/menus/get", controller.getComMenus);
  app.get("/api/com/documents/get", controller.getComDocs);
  app.get("/api/com/videos/get", controller.getComVideos);
  app.get("/api/com/data/get", controller.getComData);
  app.get("/api/com/users/get", controller.getComUsers);

  app.get("/api/pdf", controller.getPDFData);
};
