/**
 * @file Mapper para convertir entre la entidad de dominio Usuario y la entidad.
 */
class CustomerMapper {
    /**
     * Convierte un objeto de entidad de dominio Usuario a un objeto MySQLCustomerEntity.
     * @param {object} domainCustomer - La instancia de la entidad de dominio Customer.
     * @returns {object} Una instancia de MySQLCustomerEntity.
     */
    static toEntity(domainCustomer) {
        return {
            id: domainCustomer.id,
            name: domainCustomer.name,
            email: domainCustomer.email,
        };
    }

    /**
     * Convierte un objeto entity a una entidad de dominio.
     * @param {object} entityCustomer - La instancia de MySQLCustomerEntity.
     * @param {class} CustomerDomainClass - La clase de la entidad de dominio Customer.
     * @returns {object} Una instancia de la entidad de dominio Customer.
     */
    static toDomain(entityCustomer, CustomerDomainClass) {
        return new CustomerDomainClass(
            entityCustomer.id,
            entityCustomer.name,
            entityCustomer.email
        );
    }
}

module.exports = CustomerMapper;