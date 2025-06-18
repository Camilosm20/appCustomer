const customer = require('../../domain/customer');

/**
 * Casos de Uso para la entidad usuario.
 * Contiene la lógica de negocio específica de la aplicación para operaciones CRUD.
 */
class customerUseCase {
    /**
     * @param {object} customerRepository - Instancia del repositorio de usuario (interfaz).
     */
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    /**
     * Crea un nuevo usuario.
     * @param {string} name - Nombre del usuario.
     * @param {string} email - Correo electrónico del usuario.
     * @returns {Promise<object>} El usuario creado.
     * @throws {Error} Si faltan datos o el email es inválido.
     */
    async create(name, email) {
        if (!name || !email) {
            throw new Error("El nombre y el correo electrónico del usuario son obligatorios.");
        }
        const newCustomer = new customer(null, name, email);
        if (!newCustomer.isValidEmail()) {
            throw new Error("Formato de correo electrónico inválido.");
        }
        return await this.customerRepository.create(newCustomer);
    }

    /**
     * Busca y retorna un usuario por su ID.
     * @param {number} id - ID del usuario.
     * @returns {Promise<object|null>} El usuario encontrado o null.
     * @throws {Error} Si el ID no está definido.
     */
    async findById(id) {
        if (id === null || typeof id === "undefined") {
            throw new Error("error, id no definido");
        }
        return await this.customerRepository.findById(id);
    }

    /**
     * Recupera una lista de todos los usuarios.
     * @returns {Promise<Array<object>>} Lista de usuarios.
     */
    async findAll() {
        return await this.customerRepository.findAll();
    }

    /**
     * Actualiza un usuario existente.
     * @param {number} id - ID del usuario a actualizar.
     * @param {string} [name=null] - Nuevo nombre del usuario.
     * @param {string} [email=null] - Nuevo correo electrónico del usuario.
     * @returns {Promise<object|null>} El usuario actualizado o null si no se encuentra.
     * @throws {Error} Si el usuario no se encuentra o el email es inválido.
     */
    async update(id, name = null, email = null) {
        const updateCustomer = await this.findById(id);

        if (updateCustomer === null) {
            throw new Error("Usuario no encontrado");
        }
        if (name !== null) {
            updateCustomer.setName(name);
        }

        if (email !== null) {
            updateCustomer.setEmail(email);
        }

        if (!updateCustomer.isValidEmail()) {
            console.log(updateCustomer.email);

            throw new Error("Formato de correo electrónico inválido.");
        }
        return await this.customerRepository.update(updateCustomer);
    }

    /**
     * Elimina un usuario por su ID.
     * @param {number} id - ID del usuario a eliminar.
     * @returns {Promise<boolean>} True si el usuario fue eliminado, false en caso contrario.
     */
    async delete(id) {
        return await this.customerRepository.delete(id);
    }
}

module.exports = customerUseCase;