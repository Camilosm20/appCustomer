const express = require('express');
const bodyParser = require('body-parser');

// Repositorios
const MySQLCustomerRepository = require('./infrastructure/database/repositories/mysqlCustomerRepository');

// Casos de Uso
const CustomerUseCase = require('./application/useCases/customerUseCase');

// Controladores
const CustomerController = require('./infrastructure/api/customerController');

// Rutas
const CustomerRoutes = require('./infrastructure/api/routes/customerRoutes');

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
app.use('/user', CustomerRoutes(customerController));

module.exports = app;