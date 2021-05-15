const path = require('path');
const mkdirp = require('mkdirp');

const db = require("../models");
const Mat = db.mat;

exports.getMats = (req, res) => { Mat.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };

exports.insertMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.create({
    companyId: req.query.id,
    type: parsedData.type,
    title: parsedData.title
  }).then(results => res.send(results));
};

exports.updateMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.update({
    type: parsedData.type,
    title: parsedData.title
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.uploadDoc = (req, res) => {
  var userId = req.body.id;
  var obj = req.files.file;
  var name = obj.name;
  var imagePath = path.join("uploads", userId, name);
  Mat.update({ url: imagePath }, { where: { id: req.body.key } }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.deleteMat = (req, res) => { Mat.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
