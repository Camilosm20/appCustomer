/**
 * @file respuesta de la API de Usuarios.
 * @description respuestas enviadas al cliente,
 * incluyendo datos, estado y un mensaje.
 */
class customerResponseDTO {
    /**
     * Crea una instancia de customerResponseDTO.
     * @param {object|Array|null} data - Los datos a retornar.
     * @param {string} status - Estado de la operación.
     * @param {string} message - Mensaje descriptivo de la operación o error.
     */
    constructor(data, status, message) {
        this.data = data;
        this.status = status;
        this.message = message;
    }
}

module.exports = customerResponseDTO;