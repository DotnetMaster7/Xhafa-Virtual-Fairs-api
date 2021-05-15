const path = require('path');
const mkdirp = require('mkdirp');

const db = require("../models");
const User = db.user;
const Visitor = db.visitor;
const Com = db.company;
const Rep = db.representative;
const Applicant = db.applicant;
const Booth = db.booth;
const Graphics = db.graphics;

exports.visitorsMain = (req, res) => { Visitor.findAll({ where: { userId: req.query.userId } }).then(response => res.send(response)) };

exports.getUser = (req, res) => { 
  console.log('Request ===> ');
  console.log(req);
  User.findAll({ where: { id: req.query.id } }).then(response => res.send(response)) };
exports.getUsers = (req, res) => { User.findAll().then(response => res.send(response)) };

exports.registerVisitor = (req, res) => {
  User.create({
    uuid: req.body.uuid,
    role: 'visitor',
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass
  }).then(response => {

  Visitor.create({
    userId: response.dataValues.id,
    phone: req.body.phone,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    degree: req.body.degree
  });

  }).then(results => res.send(results));
};

exports.registerCom = (req, res) => {
  User.create({
    role: 'exhibitor',
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass
  }).then(response => {

  Booth.create({ companyId: response.dataValues.id });
  Graphics.create({ companyId: response.dataValues.id });

  Com.create({
    userId: response.dataValues.id,
    companyId: response.dataValues.id,
    address: req.body.address,
    representativename: req.body.representativename,
    email: req.body.email,
    web: req.body.web,
    Email: req.body.Email,
    phone: req.body.phone
  });

  User.update({
    companyId: response.dataValues.id
  }, { where: { id: response.dataValues.id }
  });

  }).then(response => res.send(response));
};

exports.updateVisitorPr = (req, res) => {
  User.update({
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass
  }, { where: { id: req.body.id }
  });

  Visitor.update({
    phone: req.body.phone,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    degree: req.body.degree
  }, { where: { userId: req.body.id } }).then(status => res.sendStatus(200));
};

exports.updateRepPr= (req, res) => {
  User.update({
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass
  }, { where: { id: req.body.id }
  });

  Rep.update({
    phone: req.body.phone,
    age: req.body.age,
    gender: req.body.gender,
    title: req.body.title,
    address: req.body.address
  }, { where: { userId: req.body.id } }).then(status => res.sendStatus(200));
};

exports.updateLogo = (req, res) => {
  var obj = req.files.file;
  var userId = req.body.id;
  var name = obj.name;
  var imagePath = path.join("uploads", userId, name);

  User.update({
    logo: imagePath
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.visitorApply = (req, res) => {
  const getPhd = req.body.phd;
  const getMaster = req.body.master;
  const getBach = req.body.bach;
  const getHighschool = req.body.highschool;

  // const phd = JSON.parse(getPhd.toString());
  // const master = JSON.parse(getMaster.toString());
  // const bach = JSON.parse(getBach.toString());
  // const courses = JSON.parse(getCourses.toString());

  console.log('getPhd: ' + getPhd);
  console.log('getMaster: ' + getMaster);
  console.log('getBach: ' + getBach);
  console.log('getPhd: ' + getHighschool);

  // console.log('phd: ' + phd);
  // console.log('master: ' + master);
  // console.log('bach: ' + bach);
  // console.log('courses: ' + courses);

  Applicant.create({
    companyId: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    age: req.body.age,
    grade: req.body.grade,
    phd: getPhd,
    master: getMaster,
    bach: getBach,
    highschool: getHighschool
  }).then(results => res.send(results));
};

exports.getApplicants = (req, res) => { Applicant.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
