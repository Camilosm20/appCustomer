/**
 * @file Entidad usuario.
 * @description Representa la estructura de un registro de usuario tal como se almacena en la tabla 'customers'.
 */
class MySQLCustomerEntity {
    /**
     * Crea una instancia de usuario entity.
     * @param {number|null} id - ID del usuario en la base de datos.
     * @param {string} name - Nombre del usuario.
     * @param {string} email - Correo electrónico del usuario.
     */
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

module.exports = MySQLCustomerEntity;