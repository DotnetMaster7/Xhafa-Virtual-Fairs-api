const db = require("../models");
const VFair = db.vfair;

exports.getFairs = (req, res) => { VFair.findAll().then(response => res.send(response)) };

exports.insertFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.create({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    exhibition: parsedData.exhibition,
    max: parsedData.max,
  }).then(results => res.send(results));
};

exports.updateFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.update({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    exhibition: parsedData.exhibition,
    max: parsedData.max,
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteFair = (req, res) => { VFair.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
