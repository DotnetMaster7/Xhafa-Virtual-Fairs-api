const db = require("../models");
const User = db.user;
const Rep = db.representative;

exports.representativesMain = (req, res) => { Rep.findAll({ where: { userId: req.query.userId } }).then(response => res.send(response)) };

exports.getReps = (req, res) => { User.findAll({ where: { role: 'representative' } }).then(response => res.send(response)) };

exports.insertRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.create({
    role: 'representative',
    companyId: parsedData.companyId,
    name: parsedData.name,
    email: parsedData.email,
    password: parsedData.password
  }).then(response => {

  Rep.create({
    userId: response.dataValues.id,
    companyId: parsedData.companyId,
    phone: parsedData.phone,
    gender: parsedData.gender,
    age: parsedData.age,
    title: parsedData.title,
    address: parsedData.address
  });

  }).then(response => res.send(response));
};

exports.updateRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.update({
    companyId: parsedData.companyId,
    name: parsedData.name,
    email: parsedData.email,
    password: parsedData.password
  }, { where: { id: req.body.key } });

  Rep.update({
    companyId: parsedData.companyId,
    phone: parsedData.phone,
    gender: parsedData.gender,
    age: parsedData.age,
    title: parsedData.title,
    address: parsedData.address
  }, { where: { userId: req.body.key } }).then(status => res.sendStatus(200));
};

exports.deleteRep = (req, res) => {
  User.destroy({ where: { id: req.body.key } });
  Rep.destroy({ where: { userId: req.body.key } }).then(status => res.sendStatus(200));
};

exports.getComReps = (req, res) => { User.findAll({ where: { role: 'representative', companyId: req.query.id } }).then(response => res.send(response)) };

exports.insertComRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.create({
    role: 'representative',
    companyId: req.query.id,
    name: parsedData.name,
    email: parsedData.email,
    password: parsedData.password,
  }).then(response => {

  Rep.create({
    userId: response.dataValues.id,
    companyId: req.query.id,
    phone: parsedData.phone,
    gender: parsedData.gender,
    age: parsedData.age,
    title: parsedData.title,
    address: parsedData.address
  });

  }).then(response => res.send(response));
};
