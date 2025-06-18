### Objetivo del Proyecto

El objetivo de este proyecto es desarrollar una API RESTful funcional, aplicando principios de buena programación como la Arquitectura Limpia, gestión de bases de datos (MySQL) y uso de control de versiones (Git).

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una entidad `Customer` (Cliente).

### Requisitos Técnicos

**Lenguaje:** Node.js
**Framework:** Express.js
**Base de Datos:** MySQL
**Gestor de Paquetes:** npm

### Arquitectura del Proyecto

Este proyecto está diseñado siguiendo los principios de la **Arquitectura Limpia (Clean Architecture)**. La estructura de carpetas refleja las diferentes capas, asegurando una clara separación de responsabilidades, lo que facilita la mantenibilidad, la escalabilidad y la probabildad del código.

**Patrones de Diseño y Arquitectura Aplicados:**

**Arquitectura Limpia:** Promueve la independencia de frameworks, bases de datos y UI. Las dependencias fluyen desde las capas externas hacia las internas.
**Patrón Repositorio:** Abstrae la lógica de acceso a datos de la lógica de negocio, permitiendo cambiar el almacenamiento de datos sin afectar el resto de la aplicación. Se define una interfaz (`customerRepository.js`) y una implementación concreta (`mysqlCustomerRepository.js`).
**Inyección de Dependencias:** Los componentes (controladores, casos de uso) reciben sus dependencias (casos de uso, repositorios) en lugar de crearlas ellos mismos, lo que mejora la modularidad y la probabildad.

### Configuración del Entorno

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

**Node.js** (versión 18 o superior recomendada)
**npm**
**MySQL Server** (versión 8.0 o superior recomendada)

### Instalación y Ejecución Local

#### Clonar el Repositorio

git clone [https://github.com/](https://github.com/)[Camilosm20]/appCustomer.git
cd appCustomer

#### Configuración de la Base de Datos MySQL

Asegúrate de que tu servidor MySQL esté corriendo.

-- Script de creación de la base de datos y tabla 'customers'
CREATE DATABASE IF NOT EXIST appCustomer;
USE appCustomer;

`CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`

#### Configuración de Variables de Entorno

Crea un archivo llamado .env en la raíz del proyecto (al mismo nivel que package.json).

`PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=[password] # Ejemplo: password
DB_NAME=appCustomer`

#### Instalación de Dependencias

npm install

luego:

npm start
O directamente: node src/server.js

La API estará disponible en http://localhost:3000.

### Endpoints de la API

-- POST --> /user/create --> { "name": "John Doe", "email": "john.doe@example.com" }

-- GET --> /user/:id --> NONE

-- GET --> /users --> NONE

-- PUT --> /user/update/:id --> {"name": "cambio de nombre"} // se puede enviar ambos atributos o uno solo, el sistema valida y hace el propio cambio.

-- DELETE --> /user/delete/:id --> NONE

### Hecho por:

Camilo Sepulveda Madrid <3.

