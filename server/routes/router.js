const route = require('express').Router();
const controller = require('../controller/controller');
const store = require('../middleware/multer');

// routes
route.get('/',controller.home);

// route to store user image into the uploads folder
route.post('/uploadmultiple',store.array('images',12),controller.uploads)

module.exports = route;