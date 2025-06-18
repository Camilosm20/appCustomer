### Configuración de la Base de Datos MySQL

Asegúrate de que tu servidor MySQL esté corriendo.

-- Script de creación de la base de datos y tabla 'customers'

`CREATE DATABASE IF NOT EXIST appCustomer;`

`USE appCustomer;`

`CREATE TABLE IF NOT EXISTS customers (`
    `id INT AUTO_INCREMENT PRIMARY KEY,`
    `name VARCHAR(255) NOT NULL,`
    `email VARCHAR(255) UNIQUE NOT NULL`
`);`