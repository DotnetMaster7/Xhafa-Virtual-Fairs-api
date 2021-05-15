const db = require("../models");
const Program = db.program;
const Com = db.company;

exports.getProgramsSelector = (req, res) => { Program.findAll().then(response => res.send(response)) };

exports.insertProgramSelector = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Program.create({
    spec_name: parsedData.spec_name
  }).then(results => res.send(results));
};

exports.updateProgramSelector = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Program.update({
    spec_name: parsedData.spec_name
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteProgramSelector = (req, res) => { Program.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.getPrograms = (req, res) => { Com.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };

exports.updateProgram = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Com.update({
    phd: parsedData.phd,
    master: parsedData.master,
    bach: parsedData.bach,
    highschool: parsedData.highschool
  }, { where: { companyId: req.query.id }
  }).then(status => res.sendStatus(200));
};

exports.updateIcon = (req, res) => {
  var obj = req.files.file;
  var name = obj.name;
  var imagePath = path.join('assets/images/programs', name);

  Program.update({
    spec_icon: imagePath
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));

  mkdirp('assets/images/programs').then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};
