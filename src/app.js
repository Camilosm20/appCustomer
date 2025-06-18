const express = require('express');
const bodyParser = require('body-parser');

// Repositorios
const MySQLCustomerRepository = require('./infrastructure/database/repositories/mysqlCustomerRepository');

// Casos de Uso
const CustomerUseCase = require('./application/useCases/customerUseCase');

// Controladores
const CustomerController = require('./infrastructure/api/customerController');

const app = express();
app.use(bodyParser.json());

// --- Inyección de Dependencias ---
const customerRepository = new MySQLCustomerRepository();

const customerUseCase = new CustomerUseCase(customerRepository);

const customerController = new CustomerController(
    customerUseCase
);

// --- Rutas ---
app.post('/user/create', (req, res) => customerController.createCustomer(req, res));
app.get('/user/:id', (req, res) => customerController.getCustomer(req, res));
app.get('/users', (req, res) => customerController.listCustomers(req, res));
app.put('/user/update/:id', (req, res) => customerController.updateCustomer(req, res));
app.delete('/user/delete/:id', (req, res) => customerController.deleteCustomer(req, res));

module.exports = app;