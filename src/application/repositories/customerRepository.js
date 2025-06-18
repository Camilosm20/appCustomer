/**
 * Interfaz del repositorio de usario.
 */
class customerRepository {
    /**
     * Crea un nuevo usuario.
     * @param {object} customer - Objeto usuario a crear.
     */
    async create(customer) {
        throw new Error('El método "create" sin establecer');
    }

    /**
     * Busca y retorna un usuario por su ID.
     * @param {number} id - El ID único del cliente a buscar.
     */
    async findById(id) {
        throw new Error('El método "findById" sin establecer.');
    }

    /**
     * Recupera una lista de todos los usuarios.
     */
    async findAll() {
        throw new Error('El método "findAll" debe ser establecido.');
    }

    /**
     * Actualiza un usuario existente.
     * @param {object} customer - Objeto usuario con los datos actualizados (debe incluir el ID).
     */
    async update(customer) {
        throw new Error('El método "update" sin establecer.');
    }

    /**
     * Elimina un usuario por su ID.
     * @param {number} id - El ID único del cliente a eliminar.
     */
    async delete(id) {
        throw new Error('El método "delete" debe ser establecido.');
    }
}

module.exports = customerRepository;