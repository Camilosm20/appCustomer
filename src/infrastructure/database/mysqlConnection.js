const mysql = require('mysql2/promise'); // Usando la API basada en promesas
require('dotenv').config();

/**
 * @file Configuración de la conexión a la base de datos MySQL.
 * @description Crea y exporta un pool de conexiones MySQL para una gestión eficiente
 * de las conexiones a la base de datos, utilizando variables de entorno.
 */
const pool = mysql.createPool({
    host: process.env.DB_HOST,      // Host de la base de datos.
    user: process.env.DB_USER,      // Usuario de la base de datos.
    password: process.env.DB_PASSWORD, // Contraseña del usuario.
    database: process.env.DB_NAME,  // Nombre de la base de datos.
    waitForConnections: true,       // Esperar si no hay conexiones disponibles.
    connectionLimit: 10,            // Máximo de conexiones en el pool.
    queueLimit: 0                   // Cola ilimitada para conexiones pendientes.
});

module.exports = pool;