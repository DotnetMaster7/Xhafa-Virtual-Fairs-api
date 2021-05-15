require('dotenv').config();

var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var http = require('http');
var path = require('path');
var fileUpload = require('express-fileupload')

var router = require('./src/router');
var syncServiceDetails = require('./src/sync_service_details');

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.static(path.join(__dirname,'uploads')))

app.use(router);

app.use(fileUpload());

require('dotenv').config();

// Get Sync Service Details for lazy creation of default service if needed
syncServiceDetails();

const db = require("./app/models");
const User = db.user;
const Booth = db.booth;
const Program = db.program;
const Graphics = db.graphics;

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => { initiate(); });

const initiate = () => {
  User.create({
    role: 'admin',
    email: 'admin@xhafa.com',
    password: 'admin',
    name: 'Xhafa Administrator Name',
    logo: 'assets/images/avatars/profile.jpg'
  });

};

// require('./app/routes/auth')(app);
require('./app/routes/banners')(app);
require('./app/routes/booth')(app);
require('./app/routes/comBooth')(app);
require('./app/routes/company')(app);
require('./app/routes/dest')(app);
require('./app/routes/fairs')(app);
require('./app/routes/graphics')(app);
require('./app/routes/joins')(app);
require('./app/routes/materials')(app);
require('./app/routes/menus')(app);
require('./app/routes/program')(app);
require('./app/routes/reps')(app);
require('./app/routes/users')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

module.exports = app;
