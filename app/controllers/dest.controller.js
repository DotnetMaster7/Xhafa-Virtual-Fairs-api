const path = require('path');
const mkdirp = require('mkdirp');

const db = require("../models");
const Destination = db.destination;

exports.getDestinations = (req, res) => { Destination.findAll().then(response => res.send(response)) };

exports.insertDestination = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Destination.create({
    destination: parsedData.destination
  }).then(results => res.send(results));
};

exports.updateDestination = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Destination.update({
    destination: parsedData.destination
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteDestination = (req, res) => { Destination.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.updateFlag = (req, res) => {
  var obj = req.files.file;
  var name = obj.name;
  var imagePath = path.join('assets/images/flags', name);

  Destination.update({
    flag: imagePath
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));

  mkdirp('assets/images/flags').then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};
