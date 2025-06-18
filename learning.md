### Aprendizaje:

En base al proceso abarcado en la elaboracion de este proyecto logro identificar varios factores que he mejorado de la arquitectura limpia que he implementado, pero el concepto sigue siendo solido y considero un verdadero reto poder aplicar estos patrones de arquitectura limpia en un lenguaje no tipado, se recordaron conocimientos en el uso de nodejs con expressJs dando asi un fortalecimientos de skills como programador.

A lo largo del desarrollo identifique el uso necesario de mysql2, dotenv y express para la conexion de la base de datos y consumo de las apis creadas para el aplicativo.

**myslq12** enfocado en un cliente seguro para la conexion a la base de datos.

**dotenv**, un modulo de carga de variables de entorno segura como lo es .env donde guardariamos todas las credenciales del aplicativo, este archivo es escencial para la gestion y solucion del app.

**express**, fundamental para definir las rutas y manejo de las peticiones http, https y organizando mejor nuestro codigo.

Hablando de la arquitectura del aplicativo, se uso la arquitectura limpia, la cual se caracteriza por ser basada en la arquitectura hexagonal, donde uno de las principales caracteristicas de esta arquitectura es el uso de los principios SOLID para reflejar la separacion clara de las responsabilidades y una estructura modular, la idea es mantener el codigo lo mas limpio posible, minimizando dependencias y separando las responsabilidades en capas logicas, siendo asi, un aplicativo el cual a futuro puede ser escalada o si se modificara aspectos de la insfraestructura, se puede realizar sin problemas.

### Mejorar:

Investigando y realizando previos analisis, en el aplicativo para mejorar los aspectos descriptivos de la clase customer se podria agregar **Object Values**, esto es muy reconocido en DDD, la cual consiste en representar aspectos descriptivos del dominio sin una identidad conceptual propia. Un ejemplo claro es realizar una clase propia para el atributo Name y ahi validamos los requerimientos de negocio que exista para cumplir con estandares de la empresa.

Otros aspectos a considerar es realizar validaciones de identificacion previa al sistema o realizar pruebas unitarias al codigo como lo es con Jest siendo a mi consideracion el mejor que se acopla con las pruebas que necesito para realizar pruebas del codigo.