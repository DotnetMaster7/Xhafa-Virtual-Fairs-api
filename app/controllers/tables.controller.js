const db = require("../models");
const User = db.user;
const Company = db.company;
const visitor = db.visitor;
const VFair = db.vfair;
const Programs = db.programs;

exports.getUser = (req, res) => { User.findAll({ where: { id: userId } }).then(response => res.send(response)) };
exports.getCompany = (req, res) => { 
  // User.findAll({ where: { id: userId } }).then(response => {
  //   if (response.length > 0) userCompanyId = response[0].dataValues.userCompanyId; 
  // });
  Company.findAll({ where: {id: userCompanyId }}).then(response => res.send(response));
};
exports.getCompanies = (req, res) => { User.findAll({ where: { role: 'exhibitor', boothReady: 1 } }).then(response => res.send(response)) };
exports.getSchools = (req, res) => { User.findAll({ where: { role: 'school' } }).then(response => res.send(response)) };
exports.getReps = (req, res) => { User.findAll({ where: { role: 'representative', userCompanyId: userId } }).then(response => res.send(response)) };
exports.getAllReps = (req, res) => { User.findAll({ where: { role: 'representative' } }).then(response => res.send(response)) };
exports.getAllCompanies = (req, res) => { User.findAll({ where: { role: 'exhibitor' } }).then(response => res.send(response)) };

exports.insertCompany = (req, res) => {
  const datas = req.body.values;
  const parsedData = JSON.parse(datas.toString());
  data = {};
  data['name'] = parsedData.companyname;
  data['password'] = parsedData.pass;
  data['web'] = parsedData.web;
  data['phone'] = parsedData.ph;
  data['email'] = parsedData.email;
  data['address'] = parsedData.address;
  data['representativename'] = parsedData.representativename;
  data['description'] = parsedData.description;
  Company.create(data).then(results => {
    Company.findAll({where:{email: parsedData.email}}).then(responses => { responses.map(row => {
      delete data['web'];
      delete data['representativename'];
      data['company_id'] = row.id ;
      data['logo'] = 'assets/images/avatars/profile.jpg';
      data['role'] = 'exhibitor';
      User.create(data).then(results => res.send(results));
    })
  })
  
  });

};

exports.insertRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.create({
    company_id: userCompanyId,
    role: 'visitor',
    logo: 'assets/images/avatars/profile.jpg',
    name: parsedData.name,
    phone: parsedData.phone,
    email: parsedData.email,
    password: parsedData.password
  }).then(results => res.send(results));
};

exports.insertPrograms = (req, res) => {
  Programs.create({company_id: req.body.company_id})
}

exports.updateRep = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.update({
    name: parsedData.name,
    phone: parsedData.phone,
    email: parsedData.email,
    password: parsedData.password
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteRep = (req, res) => { User.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.updateInfo = (req, res) => {
  User.update({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    destination: req.body.dest,
    description: req.body.description
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.companyupdateExInfo = (req, res) => {
  const data = {};
  data['name'] = req.body.companyname;
  data['password'] = req.body.pass;
  data['web'] = req.body.web;
  data['phone'] = req.body.ph;
  data['email'] = req.body.email;
  data['address'] = req.body.address;
  data['representativename'] = req.body.representativename;
  data['description'] = req.body.description;

  Company.update(data, { where: { id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.updateLogo = (req, res) => {
  User.update({
    logo: req.body.logo
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.updateCompanyLogo = (req, res) => {
  Company.update({
    logo: req.body.logo
  }, { where: { id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.updatevisitor = (req, res) => {
  const data = {};
  data['name'] = req.body.name;
  data['password'] = req.body.pass;
  data['phone'] = req.body.ph;
  data['email'] = req.body.email;
  data['gender'] = req.body.gender;
  data['degree'] = req.body.degree;
  data['address'] = req.body.address;
  data['age'] = req.body.age;

  User.update(data, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.getFairs = (req, res) => { VFair.findAll().then(response => res.send(response)) };

exports.insertFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.create({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    g12: parsedData.g12,
    g11: parsedData.g11,
    max: parsedData.max,
    school: parsedData.school
  }).then(results => res.send(results));
};

exports.updateFair = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  VFair.update({
    name: parsedData.name,
    start: parsedData.start,
    end: parsedData.end,
    g12: parsedData.g12,
    g11: parsedData.g11,
    max: parsedData.max,
    school: parsedData.school
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteFair = (req, res) => { VFair.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
