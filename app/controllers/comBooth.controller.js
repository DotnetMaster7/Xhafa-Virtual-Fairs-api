const db = require("../models");
const Booth = db.booth;
const Graphics = db.graphics;
const Link = db.menu;
const Mat = db.mat;
const Com = db.company;
const User = db.user;
const fs = require("fs");

exports.getComBooth = (req, res) => { Booth.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
exports.getComGraphics = (req, res) => { 
  // Graphics.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) 
  db.sequelize.query(`select g.*, u.logo as userlogo
                      from graphics as g
                      left join users as u on g.companyId = u.companyId 
                      where g.companyId = ?`, 
                      {
                        replacements: [req.query.id],
                        type: db.sequelize.QueryTypes.SELECT 
                      }).then(result => res.send(result))
};

exports.getAllComGraphics = (req, res) => { Graphics.findAll().then(response => res.send(response)) };
exports.getComMenus = (req, res) => { Link.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
exports.getComDocs = (req, res) => { Mat.findAll({ where: { companyId: req.query.id, type: 1 } }).then(response => res.send(response)) };
exports.getComVideos = (req, res) => { Mat.findAll({ where: { companyId: req.query.id, type: 2 } }).then(response => res.send(response)) };
exports.getComData = (req, res) => { Com.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
exports.getComUsers = (req, res) => { User.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
exports.getPDFData = (req, res) => { 
  const url = req.query.url;
  let readStream = fs.createReadStream(url);
  let stat = fs.statSync(url);
 
  // When the stream is done being read, end the response
  readStream.on('close', () => {
      res.end()
  })
 
  // Stream chunks to response
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename=${url}`);
  readStream.pipe(res); 
};
