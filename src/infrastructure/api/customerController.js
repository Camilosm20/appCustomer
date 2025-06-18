/**
 * @file Controlador de la API para la gestión de usuarios.
 * @description Maneja las solicitudes HTTP y coordina con los casos de uso para operaciones CRUD de usuarios.
 */
const CustomerResponseDTO = require('./dtos/customerResponseDTO');

class CustomerController {
    /**
     * @param {object} customerUseCase - Instancia del caso de uso de usuarios.
     */
    constructor(customerUseCase) {
        this.customerUseCase = customerUseCase;
    }

    /**
     * Crea un nuevo usuario.
     * @param {object} req - Objeto de solicitud de Express.
     * @param {object} res - Objeto de respuesta de Express.
     */
    async createCustomer(req, res) {
        console.log(req.body);

        try {
            const { name, email } = req.body;
            const customer = await this.customerUseCase.create(name, email);
            res.status(201).json(new CustomerResponseDTO(customer, 'SUCCESS', 'Usuario creado exitosamente.'));
        } catch (error) {
            console.error(error);
            res.status(400).json(new CustomerResponseDTO(null, 'ERROR', error.message));
        }
    }

    /**
     * Obtiene un usuario por su ID.
     * @param {object} req - Objeto de solicitud de Express.
     * @param {object} res - Objeto de respuesta de Express.
     */
    async getCustomer(req, res) {
        try {
            const { id } = req.params;
            const customer = await this.customerUseCase.findById(parseInt(id));
            if (!customer) {
                return res.status(404).json(new CustomerResponseDTO(null, 'ERROR', 'Usuario no encontrado.'));
            }
            res.json(new CustomerResponseDTO(customer, 'SUCCESS', 'Usuario encontrado.'));
        } catch (error) {
            console.error(error);
            res.status(500).json(new CustomerResponseDTO(null, 'ERROR', 'Error interno del servidor.'));
        }
    }

    /**
     * Lista todos los usuarios.
     * @param {object} req - Objeto de solicitud de Express.
     * @param {object} res - Objeto de respuesta de Express.
     */
    async listCustomers(req, res) {
        try {
            const customers = await this.customerUseCase.findAll();
            res.json(new CustomerResponseDTO(customers, 'SUCCESS', 'Lista de usuarios recuperada exitosamente.'));
        } catch (error) {
            console.error(error);
            res.status(500).json(new CustomerResponseDTO(null, 'ERROR', 'Error interno del servidor.'));
        }
    }

    /**
     * Actualiza un usuario existente.
     * @param {object} req - Objeto de solicitud de Express.
     * @param {object} res - Objeto de respuesta de Express.
     */
    async updateCustomer(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const customer = await this.customerUseCase.update(parseInt(id), name, email);
            if (!customer) {
                return res.status(404).json(new CustomerResponseDTO(null, 'ERROR', 'Usuario no encontrado o sin cambios realizados.'));
            }
            res.json(new CustomerResponseDTO(customer, 'SUCCESS', 'Usuario actualizado exitosamente.'));
        } catch (error) {
            console.error(error);
            res.status(400).json(new CustomerResponseDTO(null, 'ERROR', error.message));
        }
    }

    /**
     * Elimina un usuario por su ID.
     * @param {object} req - Objeto de solicitud de Express.
     * @param {object} res - Objeto de respuesta de Express.
     */
    async deleteCustomer(req, res) {
        try {
            const { id } = req.params;
            const response = await this.customerUseCase.delete(parseInt(id));
            if (!response) {
                return res.status(404).json(new CustomerResponseDTO(null, 'ERROR', 'Usuario no encontrado.'));
            }
            res.status(204).json(new CustomerResponseDTO(null, 'SUCCESS', 'Usuario borrado con éxito.'));
        } catch (error) {
            console.error(error);
            res.status(500).json(new CustomerResponseDTO(null, 'ERROR', 'Error interno del servidor.'));
        }
    }
}

module.exports = CustomerController;