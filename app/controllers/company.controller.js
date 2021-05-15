const db = require("../models");
const User = db.user;
const Com = db.company;
const Booth = db.booth;
const Graphics = db.graphics;

exports.companiesMain = (req, res) => { Com.findAll({ where: { userId: req.query.userId } }).then(response => res.send(response)) };

exports.getCompanies = (req, res) => { User.findAll({ where: { role: 'exhibitor' } }).then(response => res.send(response)) };

exports.insertCompany = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());

  User.create({
    role: 'exhibitor',
    name: parsedData.name,
    email: parsedData.email,
    password: parsedData.password
  }).then(response => {

  Booth.create({ companyId: response.dataValues.id });
  Graphics.create({ companyId: response.dataValues.id });

  Com.create({
    userId: response.dataValues.id,
    companyId: response.dataValues.id,
    name: parsedData.name,
    representativename: parsedData.representativename,
    email: parsedData.email,
    web: parsedData.web,
    phone: parsedData.phone,
    address: parsedData.address
  });

  User.update({
    companyId: response.dataValues.id
  }, { where: { id: response.dataValues.id }
  });

  }).then(response => res.send(response));
};

exports.updateCompany = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  User.update({
    name: parsedData.name,
    email: parsedData.email,
    password: parsedData.password
  }, { where: { id: req.body.key }
  });

  Com.update({
    contact: parsedData.contact,
    phone: parsedData.phone,
    Email: parsedData.Email,
    address: parsedData.address,
    description: parsedData.description,
    destination: parsedData.destination
  }, { where: { userId: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteCompany = (req, res) => {
  User.destroy({ where: { id: req.body.key } });
  Com.destroy({ where: { userId: req.body.key } }).then(status => res.sendStatus(200));
};
