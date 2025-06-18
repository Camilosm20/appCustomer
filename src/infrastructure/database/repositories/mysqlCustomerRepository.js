const customerRepository = require('../../../application/repositories/customerRepository');
const Customer = require('../../../domain/customer');
const pool = require('../mysqlConnection');

class MySQLCustomerRepository extends customerRepository {
    async create(customer) {
        const [result] = await pool.execute(
            'INSERT INTO customers (name, email) VALUES (?, ?)',
            [customer.name, customer.email]
        );
        return new Customer(result.insertId, customer.name, customer.email);
    }

    async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM customers WHERE id = ?', [id]);
        if (rows.length === 0) {
            return null;
        }
        const row = rows[0];
        return new Customer(row.id, row.name, row.email);
    }

    async findAll() {
        const [rows] = await pool.execute('SELECT * FROM customers');
        return rows.map(row => new Customer(row.id, row.name, row.email));
    }

    async update(customer) {
        const [result] = await pool.execute(
            'UPDATE customers SET name = ?, email = ? WHERE id = ?',
            [customer.name, customer.email, customer.id]
        );
        return result.affectedRows > 0 ? customer : null;
    }

    async delete(id) {
        const [result] = await pool.execute('DELETE FROM customers WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = MySQLCustomerRepository;