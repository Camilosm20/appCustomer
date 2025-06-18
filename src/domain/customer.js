/**
 * @file Entidad de dominio usuario (Customer).
 * @description Representa las propiedades y reglas de negocio fundamentales de un usuario.
 */
class Customer {
    /**
     * Crea una instancia de usuario.
     * @param {number|null} id - ID único del usuario (null para nuevos usuarios).
     * @param {string} name - Nombre del usuario.
     * @param {string} email - Correo electrónico del usuario.
     */
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    /**
     * Retorna el nombre del usuario.
     * @returns {string} Nombre del usuario.
     */
    getName() {
        return this.name;
    }

    /**
     * Establece el nombre del usuario.
     * @param {string} name - Nuevo nombre.
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Retorna el correo electrónico del usuario.
     * @returns {string} Correo electrónico.
     */
    getEmail() {
        return this.email;
    }

    /**
     * Establece el correo electrónico del usuario.
     * @param {string} email - Nuevo correo electrónico.
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * Valida el formato del correo electrónico.
     * @returns {boolean} True si el email es válido, false en caso contrario.
     */
    isValidEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
}

module.exports = Customer;