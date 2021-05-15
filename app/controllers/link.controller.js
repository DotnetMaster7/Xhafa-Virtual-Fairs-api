const db = require("../models");
const Link = db.menu;

exports.getMenus = (req, res) => { Link.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };

exports.insertMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.create({
    companyId: req.query.id,
    title: parsedData.title,
    url: 'http://' + parsedData.url
  }).then(results => res.send(results));
};

exports.updateMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.update({
    title: parsedData.title,
    url: 'http://' + parsedData.url
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteMenu = (req, res) => { Link.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
