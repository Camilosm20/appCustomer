class customerRepository {
    async create(customer) {
        throw new Error('El método "create" debe ser establecido.');
    }
    async findById(id) {
        throw new Error('El método "findById" debe ser establecido.');
    }
    async findAll() {
        throw new Error('El método "findAll" debe ser establecido.');
    }
    async update(customer) {
        throw new Error('El método "update" debe ser establecido.');
    }
    async delete(id) {
        throw new Error('El método "delete" debe ser establecido.');
    }
}

module.exports = customerRepository;