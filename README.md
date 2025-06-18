## Objetivo del Proyecto

El objetivo de este proyecto es desarrollar una API RESTful funcional, aplicando principios de buena programación como la Arquitectura Limpia, gestión de bases de datos (MySQL) y uso de control de versiones (Git).

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una entidad `Customer` (Cliente).

---

## Requisitos Técnicos

**Lenguaje:** Node.js

**Framework:** Express.js

**Base de Datos:** MySQL

**Gestor de Paquetes:** npm

## Arquitectura del Proyecto

Este proyecto está diseñado siguiendo los principios de la **Arquitectura Limpia (Clean Architecture)**. La estructura de carpetas refleja las diferentes capas, asegurando una clara separación de responsabilidades, lo que facilita la mantenibilidad, la escalabilidad y la probabildad del código.

---

#### Patrones de Diseño y Arquitectura Aplicados:

**Arquitectura Limpia:** Promueve la independencia de frameworks, bases de datos y UI. Las dependencias fluyen desde las capas externas hacia las internas.

**Patrón Repositorio:** Abstrae la lógica de acceso a datos de la lógica de negocio, permitiendo cambiar el almacenamiento de datos sin afectar el resto de la aplicación. Se define una interfaz (`customerRepository.js`) y una implementación concreta (`mysqlCustomerRepository.js`).

**Inyección de Dependencias:** Los componentes (controladores, casos de uso) reciben sus dependencias (casos de uso, repositorios) en lugar de crearlas ellos mismos, lo que mejora la modularidad y la probabildad.

**Mappers:** Se implementan para traducir entre las entidades de dominio (`Customer.js`) y las entidades de persistencia específicas de la base de datos (`MySQLCustomerEntity.js`), asegurando que las capas internas no conozcan los detalles de la persistencia.

---

## Configuración del Entorno

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

**Node.js**

**npm**

**MySQL Server**

## Instalación y Ejecución Local

### Clonar el Repositorio

git clone [https://github.com/](https://github.com/)Camilosm20/appCustomer.git

cd appCustomer

### Configuración de la Base de Datos MySQL

Asegúrate de que tu servidor MySQL esté corriendo.

-- Script de creación de la base de datos y tabla 'customers'

`CREATE DATABASE IF NOT EXIST appCustomer;`

`USE appCustomer;`

`CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);`

### Configuración de Variables de Entorno

Crea un archivo llamado .env en la raíz del proyecto (al mismo nivel que package.json).

`PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=[password] # Ejemplo: password
DB_NAME=appCustomer`

### Instalación de Dependencias

npm install

luego:

npm start
O directamente: node src/server.js

La API estará disponible en http://localhost:3000.

### Endpoints de la API

Todas las respuestas de éxito y error siguen el formato de `customerResponseDTO`:

```
{
  "data": {}, // Objeto o array con los datos de la respuesta (puede ser null en errores o eliminaciones)
  "status": "SUCCESS", // o "ERROR"
  "message": "Mensaje descriptivo de la operación."
}
```

### 1.POST Crear un usuario

**URL:** /user/create

**Descripción:** Permite registrar un nuevo usuario en la base de datos.

**Headers:**
Content-Type: application/json

**Body:**

```
{
  "name": "Camilo",
  "email": "camilo1234@example.com"
}
```

### 2.GET Obtener un usuario por ID

**URL:** /user/:id

**Descripción:** Recupera los detalles de un usuario específico utilizando su ID único.

**Respuesta posible:**

```
{
  "data": {
    "id": 1,
    "name": "Camilo",
    "email": "camilo@example.com"
  },
  "status": "SUCCESS",
  "message": "Usuario encontrado."
}
```

### 3.GET Obtener lista de usuarios

**URL:** /user/

**Descripción:** Obtiene una lista de todos los usuarios registrados en la base de datos.

**Respuesta posible:**

```
{
  "data": [
    {
      "id": 1,
      "name": "Camilo Sepulveda",
      "email": "camilo.sepulveda@example.com"
    },
    {
      "id": 2,
      "name": "Otro Usuario",
      "email": "otro@example.com"
    }
  ],
  "status": "success",
  "message": "Lista de usuarios recuperada exitosamente."
}
```

### 4.PUT Actualizar un Usuario Existente

**URL:** /user/update/:id

**Descripción:** Actualiza la información de un usuario existente. Se puede actualizar uno o ambos campos (name, email).

**Headers:**
Content-Type: application/json

**Body:**

```
{
  "name": "Camilo Andrés"
}
```

### 5.DELETE Eliminar un usuario

**URL:** /user/delete/:id

**Descripción:** Elimina un usuario de la base de datos por su ID.

**Respuesta posible:**

```
{
  "data": null,
  "status": "success",
  "message": "Usuario borrado con éxito."
}
```

---

### Hecho por:

Camilo Sepulveda Madrid.

