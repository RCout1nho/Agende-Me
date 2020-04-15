const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const CompanyController = require('./controllers/CompanyController');
const BookingController = require('./controllers/BookingController');
const UserDashboardController = require('./controllers/UserDashboardController');
const CompanyDashboardController = require('./controllers/CompanyDashboardController');

const upload = multer(uploadConfig);


routes.post('/user', UserController.store);
routes.get('/user', UserController.index);

routes.post('/company', upload.single('photo'), CompanyController.store);
routes.get('/company', CompanyController.index);

routes.post('/company/:company_id/bookings', BookingController.store);

routes.get('/user_dashboard', UserDashboardController.show);
routes.get('/company_dashboard', CompanyDashboardController.show);

module.exports = routes;