const controller = require("../../app/controllers/link.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/menu/get", controller.getMenus);
  app.post("/api/menu/insert", controller.insertMenu);
  app.put("/api/menu/update", controller.updateMenu);
  app.delete("/api/menu/delete", controller.deleteMenu);
};
