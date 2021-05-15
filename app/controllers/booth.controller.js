const path = require('path');
const mkdirp = require('mkdirp')

const db = require("../models");
const Booth = db.booth;
const Com = db.company;
const User = db.user;
const Graphics = db.graphics;

exports.getBooth = (req, res) => { Booth.findAll({ where: { companyId: req.query.id } }).then(response => res.send(response)) };
exports.getBooths = (req, res) => { Booth.findAll().then(response => res.send(response)) };

exports.getReadyBooths = (req, res) => {
  // Booth.findAll({
  //   where: { ready: 1 } 
  // }).then(response => {
  //   console.log('*********************');
  //   console.log(response);
  //   return res.send(response);
  // })
  db.sequelize.query('select * from booths left join graphics on booths.companyId = graphics.companyId', {type: db.sequelize.QueryTypes.SELECT }).then(result => res.send(result))
};
exports.getReadyCount = (req, res) => { Booth.findAndCountAll({ where: { ready: 1 } }).then(booths => res.json(JSON.stringify( booths.count ))) };

exports.updateBoothPosition = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());

  Booth.update({
    name: parsedData.name,
    position: parsedData.position,
    link: '/fair/booths?id=' + parsedData.name
  }, { where: { companyId: parsedData.name }
  });

  User.update({
    link: '/fair/booths?id=' + parsedData.name
  }, { where: { companyId: parsedData.name }
  }).then(status => res.sendStatus(200));
};

exports.setLayout = (req, res) => {
  Booth.update({
    layout: req.body.layout
  }, { where: { companyId: req.body.id }
  }).then(status => res.sendStatus(200));
};

exports.setPublish = (req, res) => {
  var userId = req.body.id;
	var obj = req.files.file;
  var name = 'composite.png';
  var imagePath = path.join("uploads", userId, name);

  Booth.update({
    composite: imagePath,
    ready: 1
  }, { where: { companyId: userId }
  }).then(status => res.sendStatus(200));

  mkdirp(`uploads/${userId}`).then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
  })})
};

exports.setColor = (req, res) => {
  Booth.update({
    color: req.body.color
  }, { where: { companyId: req.body.id }
  }).then(status => res.sendStatus(200));
};

exports.updateInfo = (req, res) => {
  User.update({
    name: req.body.name,
    email: req.body.email
  }, { where: { id: req.body.id }
  });

  Com.update({
    phone: req.body.phone,
    address: req.body.address,
    description: req.body.description,
    destination: req.body.destination
  }, { where: { companyId: req.body.id } }).then(status => res.sendStatus(200));
};

exports.updateVisits = (req, res) => {
  var id = req.body.boothId;
  Booth.findAll({ where: { id: id } }).then(function(found) {
    var visits = found[0].dataValues.visits || 0;
    Booth.update({
      visits: visits + 1,
      }, { where: { id: id }
    }).then(status => res.sendStatus(200));
  });
};

exports.updateChats = (req, res) => {
  var companyId = req.body.boothId;
  Booth.findAll({ where: { companyId: companyId } }).then(function(found) {
    var chats = found[0].dataValues.chats || 0;    
    Booth.update({
      chats: chats + 1,
      }, { where: { companyId: companyId }
    }).then(status => res.sendStatus(200));
  });
};

exports.updateVideos = (req, res) => {
  var companyId = req.body.boothId;
  Booth.findAll({ where: { companyId: companyId } }).then(function(found) {    
    var videos = found[0].dataValues.video || 0;
    Booth.update({
      video: videos + 1,
      }, { where: { companyId: companyId }
    }).then(status => {
      console.log(status);
      res.sendStatus(200)
    });
  });
};
