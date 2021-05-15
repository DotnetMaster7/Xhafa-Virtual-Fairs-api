const controller = require("../../app/controllers/joins.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/invitations/get", controller.getInvitations);
  
  app.get("/api/fairs/status/get", controller.getStatus);
  app.post("/api/fairs/updateFollow", controller.updateFollow);
  app.post("/api/fairs/updateReject", controller.updateReject);
  app.put("/api/fairs/adminReject", controller.adminReject);
  app.put("/api/fairs/updateApprove", controller.updateApprove);
};
