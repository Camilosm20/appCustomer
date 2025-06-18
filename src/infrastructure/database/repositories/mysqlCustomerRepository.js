const customerRepository = require('../../../application/repositories/customerRepository');
const Customer = require('../../../domain/customer'); // Entidad de dominio
const pool = require('../mysqlConnection');
const CustomerMapper = require('../mappers/customerMapper'); // Importa el Mapper
const MySQLCustomerEntity = require('../entity/mysqlCustomerEntity'); // Importa la Entidad.

/**
 * @file Implementación MySQL del repositorio de usuarios.
 * @description Conecta la interfaz del repositorio de usuarios con la base de datos MySQL.
 * Extiende la interfaz customerRepository para proporcionar las operaciones de entidad concretas.
 * Utiliza CustomerMapper para convertir entre entidades de dominio y entidades.
 */
class MySQLCustomerRepository extends customerRepository {
    /**
     * Crea un nuevo usuario en la base de datos.
     * @param {object} customer - Objeto usuario (entidad de dominio) a crear.
     * @returns {Promise<object>} El usuario creado con el ID generado.
     */
    async create(customer) {
        const entityCustomer = CustomerMapper.toEntity(customer);

        const [result] = await pool.execute(
            'INSERT INTO customers (name, email) VALUES (?, ?)',
            [entityCustomer.name, entityCustomer.email]
        );
        return new Customer(result.insertId, customer.name, customer.email);
    }

    /**
     * Busca y retorna un usuario por su ID.
     * @param {number} id - ID del usuario a buscar.
     * @returns {Promise<object|null>} El usuario encontrado (entidad de dominio) o null.
     */
    async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM customers WHERE id = ?', [id]);
        if (rows.length === 0) {
            return null;
        }
        const row = rows[0];
        return CustomerMapper.toDomain(row, Customer);
    }

    /**
     * Recupera una lista de todos los usuarios.
     * @returns {Promise<Array<object>>} Lista de usuarios (entidades de dominio).
     */
    async findAll() {
        const [rows] = await pool.execute('SELECT * FROM customers');
        return rows.map(row => CustomerMapper.toDomain(row, Customer));
    }

    /**
     * Actualiza un usuario existente.
     * @param {object} customer - Objeto usuario (entidad de dominio) con los datos y ID para actualizar.
     * @returns {Promise<object|null>} El usuario actualizado (entidad de dominio) o null si no se afectaron filas.
     */
    async update(customer) {
        const entityCustomer = CustomerMapper.toEntity(customer);

        const [result] = await pool.execute(
            'UPDATE customers SET name = ?, email = ? WHERE id = ?',
            [entityCustomer.name, entityCustomer.email, entityCustomer.id]
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