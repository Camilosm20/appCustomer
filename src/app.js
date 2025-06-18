const express = require('express');
const bodyParser = require('body-parser');

// Repositorios
const MySQLCustomerRepository = require('./infrastructure/database/repositories/mysqlCustomerRepository');

// Casos de Uso
const CustomerUseCase = require('./application/useCases/customerUseCase');

// Controladores
const CustomerController = require('./infrastructure/api/customerController');

/**
 * @file Configuración principal de la aplicación Express.
 * @description Configura middlewares, inyección de dependencias y define las rutas de la API para la gestión de usuarios.
 */
const app = express();

// Middleware para parsear cuerpos de solicitud JSON
app.use(bodyParser.json());

// --- Inyección de Dependencias ---
// Instanciación de la implementación concreta del repositorio de usuarios
const customerRepository = new MySQLCustomerRepository();

// Instanciación de los casos de uso de usuarios, inyectando el repositorio
const customerUseCase = new CustomerUseCase(customerRepository);

// Instanciación del controlador de usuarios, inyectando los casos de uso
const customerController = new CustomerController(
    customerUseCase
);

// --- Rutas de la API ---
// Ruta para crear un nuevo usuario
app.post('/user/create', (req, res) => customerController.createCustomer(req, res));
// Ruta para obtener un usuario por su ID
app.get('/user/:id', (req, res) => customerController.getCustomer(req, res));
// Ruta para listar todos los usuarios
app.get('/users', (req, res) => customerController.listCustomers(req, res));
// Ruta para actualizar un usuario por su ID
app.put('/user/update/:id', (req, res) => customerController.updateCustomer(req, res));
// Ruta para eliminar un usuario por su ID
app.delete('/user/delete/:id', (req, res) => customerController.deleteCustomer(req, res));

module.exports = app;