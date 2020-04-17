const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const CompanyController = require('./controllers/CompanyController');
const BookingController = require('./controllers/BookingController');
const AuthenticationController = require('./controllers/AuthenticationController');

const upload = multer(uploadConfig);


routes.post('/user', UserController.store);
routes.get('/user', UserController.index);

routes.post('/company', upload.single('photo'), CompanyController.store);
routes.get('/company', CompanyController.index);

routes.post('/booking/:company', BookingController.store);
routes.get('/booking/:user', BookingController.show);
routes.get('/booking', BookingController.index);

routes.get('/auth/user', AuthenticationController.auth);

routes.get('/company/:type', CompanyController.show);
routes.get('/company/find/:_id', CompanyController.getById);

routes.get('/index/company', CompanyController.total);

module.exports = routes;