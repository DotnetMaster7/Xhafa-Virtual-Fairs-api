const path = require('path');
const mkdirp = require('mkdirp');
// const fs = require('fs');
// const request = require('request');

const db = require("../models");
const Graphics = db.graphics;

exports.getGraphics = (req, res) => { Graphics.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };

exports.setLinks = (req, res) => {
  Graphics.update({
    logolnk: 'http://' + req.body.logolnk,
    banner1lnk: 'http://' + req.body.banner1lnk,
    banner2lnk: 'http://' + req.body.banner2lnk,
    banner3lnk: 'http://' + req.body.banner3lnk
  }, { where: { companyId: req.body.id }
  }).then(status => res.sendStatus(200));
};

exports.setLogo = (req, res) => {
  var userId = req.body.id;
  var logo = req.files.file;
  var logoName = 'logo.png';
  var logoImagePath = path.join("uploads", userId, logoName);

  Graphics.update({
    logo: logoImagePath
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { logo.mv(logoImagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.setTvLink = (req, res) => {
  var x = req.body.tvlnk;
  var y = x.replace('https://www.youtube.com/watch?v=', 'https://img.youtube.com/vi/');
  var z = y + '/0.jpg';

  // var fileName = 'splash.jpg';
  // var userId = req.body.id;
  // var splashPath = path.join("uploads", userId, fileName);

  // var download = (uri, filename, callback) => {
  //   request.head(uri, (err, res, body) => {
  //     console.log('content-type:', res.headers['content-type']);
  //     console.log('content-length:', res.headers['content-length']);
  //
  //     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  //   });
  // };

  Graphics.update({
    tvlnk: x,
    tvsplash: z
  }, { where: { companyId: req.body.id }
  }).then(status => res.sendStatus(200));

  // download(z, fileName, () => {
  //   mkdirp(`uploads/${userId}`).then(made => { banner1.mv(splashPath, function (err) {
  //     if (err) { return res.status(500).send(err); }
  //   })});
  // });
};

exports.setBanner1 = (req, res) => {
  var userId = req.body.id;
  var banner1 = req.files.file;
  var banner1Name = 'banner1.png';
  var banner1ImagePath = path.join("uploads", userId, banner1Name);

  Graphics.update({
    banner1: banner1ImagePath
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { banner1.mv(banner1ImagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.setBanner2 = (req, res) => {
  var userId = req.body.id;
  var banner2 = req.files.file;
  var banner2Name = 'banner2.png';
  var banner2ImagePath = path.join("uploads", userId, banner2Name);

  Graphics.update({
    banner2: banner2ImagePath
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { banner2.mv(banner2ImagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.setBanner3 = (req, res) => {
  var userId = req.body.id;
  var banner3 = req.files.file;
  var banner3Name = 'banner3.png';
  var banner3ImagePath = path.join("uploads", userId, banner3Name);

  Graphics.update({
    banner3: banner3ImagePath
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { banner3.mv(banner3ImagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.resetBanners = (req, res) => {
  var userId = req.body.id;
  Graphics.update({
    logo: '0',
    tv: '0',
    banner1: '0',
    banner2: '0',
    banner3: '0',
    banner4: '0',
    tvlnk: '0',
    logolnk: null,
    banner1lnk: null,
    banner2lnk: null,
    banner3lnk: null
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));
};
