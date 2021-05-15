const controller = require("../../app/controllers/banner.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/banners/get", controller.getBanners);
  app.post("/api/banners/insert", controller.insertBanner);
  app.put("/api/banners/update", controller.updateBanner);
  app.delete("/api/banners/delete", controller.deleteBanner);
  app.put("/api/updateBanner", controller.updateBannerImage);

  app.get("/api/expoBanners/get", controller.getExpoBanners);
  app.post("/api/expoBanners/insert", controller.insertExpoBanner);
  app.put("/api/expoBanners/update", controller.updateExpoBanner);
  app.delete("/api/expoBanners/delete", controller.deleteExpoBanner);
  app.put("/api/updateExpoBanner", controller.updateExpoBannerImage);
};
