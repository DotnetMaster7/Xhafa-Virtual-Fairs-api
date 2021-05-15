const db = require("../models");
const User = db.user;
const visitor = db.visitor;
const Company = db.company;

exports.getUsers = (req, res) => 
{ 
  User.findAll().then(response => res.send(response));
};

exports.setUserData = (req, res) => {
  userId = req.body.i;
  userUuid = req.body.u;
  userRole = req.body.r;
  if(req.body.c) userCompanyId = req.body.c;
  res.send();
};

exports.removeUserData = (req, res) => {
  userId = null;
  userUuid = null;
  userRole = null;
  if(req.body.c) userCompanyId = null;
  res.send();
};

exports.registerUser = (req, res) => {
  const data = {};
  data['uuid'] = req.body.uuid;
  data['role'] = req.body.role;
  data['name'] = req.body.name;
  data['password'] = req.body.pass;
  data['phone'] = req.body.ph;
  data['email'] = req.body.email;
  data['logo'] = 'assets/images/avatars/profile.jpg';
  
  if(data['role'] === "visitor"){
    data['gender'] = req.body.gender;
    data['degree'] = req.body.degree;
    data['address'] = req.body.address;
    data['age'] = req.body.age;
  } else if( data['role'] === "exhibitor"){
    data['company_id'] = req.body.company_id;
  }

  User.create(data).then(results => res.send(results));
};

exports.registerCompany = (req, res) => {
  const data = {};
  data['name'] = req.body.name;
  data['password'] = req.body.pass;
  data['web'] = req.body.web;
  data['phone'] = req.body.ph;
  data['email'] = req.body.email;
  data['address'] = req.body.address;
  data['representativename'] = req.body.representativename;
  data['logo'] = 'assets/images/avatars/profile.jpg';
  
  Company.create(data).then(results => res.send(results));
};

exports.registervisitor = (req, res) => {
  const data = {};
  data['name'] = req.body.name;
  data['email'] = req.body.email;
  data['mobile'] = req.body.ph;

  visitor.create(data).then(results => res.send(results));
};

exports.getCompanies = (req, res) => { Company.findAll().then(response => res.send(response)) };
