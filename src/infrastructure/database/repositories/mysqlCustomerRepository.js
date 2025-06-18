const customerRepository = require('../../../application/repositories/customerRepository');
const Customer = require('../../../domain/customer');
const pool = require('../mysqlConnection');

/**
 * @file Implementación MySQL del repositorio de usuarios.
 * @description Conecta la interfaz del repositorio de usuarios con la base de datos MySQL.
 * Extiende la interfaz `customerRepository` para proporcionar las operaciones de persistencia concretas.
 */
class MySQLCustomerRepository extends customerRepository {
    /**
     * Crea un nuevo usuario en la base de dato.
     * @param {object} customer - Objeto usuario a crear.
     * @returns {Promise<object>} El usuario creado con el ID generado.
     */
    async create(customer) {
        const [result] = await pool.execute(
            'INSERT INTO customers (name, email) VALUES (?, ?)',
            [customer.name, customer.email]
        );
        return new Customer(result.insertId, customer.name, customer.email);
    }

    /**
     * Busca y retorna un usuario por su ID.
     * @param {number} id - ID del usuario a buscar.
     * @returns {Promise<object|null>} El usuario encontrado o null.
     */
    async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM customers WHERE id = ?', [id]);
        if (rows.length === 0) {
            return null;
        }
        const row = rows[0];
        return new Customer(row.id, row.name, row.email);
    }

    /**
     * Recupera una lista de todos los usuarios.
     * @returns {Promise<Array<object>>} Lista de usuarios.
     */
    async findAll() {
        const [rows] = await pool.execute('SELECT * FROM customers');
        return rows.map(row => new Customer(row.id, row.name, row.email));
    }

    /**
     * Actualiza un usuario existente.
     * @param {object} customer - Objeto usuario con los datos y ID para actualizar.
     * @returns {Promise<object|null>} El usuario actualizado o null si no se afectaron filas.
     */
    async update(customer) {
        const [result] = await pool.execute(
            'UPDATE customers SET name = ?, email = ? WHERE id = ?',
            [customer.name, customer.email, customer.id]
        );
        return result.affectedRows > 0 ? customer : null;
    }

    /**
     * Elimina un usuario por su ID.
     * @param {number} id - ID del usuario a eliminar.
     * @returns {Promise<boolean>} True si el usuario fue eliminado, false en caso contrario.
     */
    async delete(id) {
        const [result] = await pool.execute('DELETE FROM customers WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = MySQLCustomerRepository;