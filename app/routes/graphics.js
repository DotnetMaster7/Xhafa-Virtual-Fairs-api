const controller = require("../../app/controllers/graphics.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/booth/graphics/get", controller.getGraphics);
  app.put("/api/booth/graphics/setLinks", controller.setLinks);
  app.put("/api/booth/graphics/setTvLink", controller.setTvLink);
  app.put("/api/booth/graphics/setLogo", controller.setLogo);
  app.put("/api/booth/graphics/setBanner1", controller.setBanner1);
  app.put("/api/booth/graphics/setBanner2", controller.setBanner2);
  app.put("/api/booth/graphics/setBanner3", controller.setBanner3);
  app.put("/api/booth/graphics/reset", controller.resetBanners);
};
