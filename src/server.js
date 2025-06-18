require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const app = require('./app'); // Importa la aplicación Express configurada

/**
 * @file Punto de entrada principal del servidor.
 * @description Configura y arranca la aplicación Express, cargando las variables de entorno.
 */

const PORT = process.env.PORT || 3000; // Define el puerto del servidor, usando la variable de entorno o un valor por defecto

// Inicia el servidor Express y lo pone a escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});