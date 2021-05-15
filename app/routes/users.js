const controller = require("../../app/controllers/users.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/visitors", controller.visitorsMain);

  app.get("/api/user/get", controller.getUser);
  app.get("/api/users", controller.getUsers);

  app.put("/api/updateVisitorPr", controller.updateVisitorPr);
  app.put("/api/updateRepPr", controller.updateRepPr);
  app.put("/api/updateLogo", controller.updateLogo);

  app.post("/api/registerCompany", controller.registerCom);
  app.post("/api/registerVisitor", controller.registerVisitor);
  
  app.post("/api/apply", controller.visitorApply);
  app.get("/api/applicants/get", controller.getApplicants);
};
