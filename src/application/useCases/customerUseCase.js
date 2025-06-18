const customer = require('../../domain/customer');

class customerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async create(name, email) {
        if (!name || !email) {
            throw new Error("El nombre y el correo electrónico del usuario son obligatorios.");
        }
        const newCustomer = new customer(null, name, email); // El ID será asigna por la base de datos.
        if (!newCustomer.isValidEmail()) {
            throw new Error("Formato de correo electrónico inválido.");
        }
        return await this.customerRepository.create(newCustomer);
    }

    async findById(id) {
        if (id === null || typeof id === "undefined") {
            throw new Error("error, id dont defined");
        }
        return await this.customerRepository.findById(id);
    }
    
    async findAll() {
        return await this.customerRepository.findAll();
    }

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

    async delete(id) {
        return await this.customerRepository.delete(id);
    }
}

module.exports = customerUseCase;