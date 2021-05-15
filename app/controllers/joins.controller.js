const db = require("../models");
const Invitations = db.invitation;

exports.getInvitations = (req, res) => {
  Invitations.findAll().then(response => res.send(response))
};

exports.getStatus = (req, res) => {
  var fairId = req.query.fairId;
  var companyId = req.query.companyId;
  Invitations.findAll({ where: { fairId: fairId, companyId: companyId } }).then(response => res.send(response))
};

exports.updateFollow = (req, res) => {
  var fairId = req.body.fairId;
  var companyId = req.body.companyId;
  Invitations.create({
    fairId: fairId,
    companyId: companyId,
    inviteStatus: 2
  }, { where: { fairId: fairId, companyId: companyId }
  }).then(status => res.sendStatus(200));
};

exports.updateReject = (req, res) => {
  var fairId = req.body.fairId;
  var companyId = req.body.companyId;
  Invitations.create({
    inviteStatus: 4
  }, { where: { fairId: fairId, companyId: companyId }
  }).then(status => res.sendStatus(200));
};

exports.adminReject = (req, res) => {
  var fairId = req.body.fairId;
  var companyId = req.body.companyId;
  Invitations.update({
    inviteStatus: 4
  }, { where: { fairId: fairId, companyId: companyId }
  }).then(status => res.sendStatus(200));
};

exports.updateApprove = (req, res) => {
  var fairId = req.body.fairId;
  var companyId = req.body.companyId;
  Invitations.update({
    inviteStatus: 3
  }, { where: { fairId: fairId, companyId: companyId }
  }).then(status => res.sendStatus(200));
};
