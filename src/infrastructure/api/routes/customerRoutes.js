const express = require('express');

/**
 * @file Rutas API para la gestión de Usuarios.
 * @description Define los endpoints HTTP y asocia cada uno con el método correspondiente del CustomerController.
 */
module.exports = (customerController) => {
    const router = express.Router();

    // Ruta para crear un nuevo usuario
    router.post('/create', (req, res) => customerController.createCustomer(req, res));

    // Ruta para obtener un usuario por su ID
    router.get('/:id', (req, res) => customerController.getCustomer(req, res));

    // Ruta para listar todos los usuarios
    router.get('/', (req, res) => customerController.listCustomers(req, res));

    // Ruta para actualizar un usuario por su ID
    router.put('/update/:id', (req, res) => customerController.updateCustomer(req, res));

    // Ruta para eliminar un usuario por su ID
    router.delete('/delete/:id', (req, res) => customerController.deleteCustomer(req, res));

    return router;
};