class CustomerController {
    constructor(customerUseCase) {
        this.customerUseCase = customerUseCase;
    }

    async createCustomer(req, res) {
        console.log(req.body);
        
        try {
            const { name, email } = req.body;
            const customer = await this.customerUseCase.create(name, email);
            res.status(201).json(customer);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: error.message });
        }
    }

    async getCustomer(req, res) {
        try {
            const { id } = req.params;
            const customer = await this.customerUseCase.findById(parseInt(id));
            if (!customer) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(customer);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async listCustomers(req, res) {
        try {
            const customers = await this.customerUseCase.findAll();
            res.json(customers);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async updateCustomer(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const customer = await this.customerUseCase.update(parseInt(id), name, email);
            if (!customer) {
                return res.status(404).json({ message: 'Usuario no encontrado o sin cambios realizados' });
            }
            res.json(customer);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCustomer(req, res) {
        try {
            const { id } = req.params;
            const response = await this.customerUseCase.delete(parseInt(id));
            if (!response) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

module.exports = CustomerController;