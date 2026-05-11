# Stack Tecnológico Oficial - DIGEMIG

Definición del conjunto de herramientas y tecnologías seleccionadas para la implementación del sistema, priorizando la robustez empresarial y la seguridad institucional.

## 1. Backend (Núcleo del Sistema)
* **Lenguaje**: Java 17+.
* **Framework**: Spring Boot 3.x.
* **Seguridad**: JWT (JSON Web Tokens) y OAuth2 para autenticación stateless.
* **ORM**: JPA / Hibernate para la gestión de persistencia.
* **Procesamiento**: Spring Batch para validaciones pesadas de archivos y tareas de fondo.

## 2. Frontend (Interfaz de Usuario)
* **Framework**: Angular.
* **Gestión de Estado**: RxJS / NgRx para el manejo de estados avanzados y flujos de datos asíncronos.
* **Librería UI**: Angular Material para interfaces estandarizadas y responsivas.
* **Operación Offline**: Soporte mediante persistencia en navegador con IndexedDB y LocalStorage.

## 3. Persistencia y Datos 
* **Base de Datos**: PostgreSQL como motor relacional estricto para garantizar la integridad y auditoría.
* **Almacenamiento de Archivos**: Sistema de archivos institucional o almacenamiento S3 para evidencias (PDF e imágenes).
* **Estrategia**: Control granular de accesos a nivel de tablas y columnas para protección de datos sensibles.

## 4. Patrones de Diseño Aplicados

| Patrón | Aplicación | Beneficio |
| :--- | :--- | :--- |
| **Strategy** | Motor de Riesgo [cite: 50] | Intercambio de algoritmos de evaluación sin afectar el registro. |
| **State** | Ciclo de Vida del Caso [cite: 53] | Control rígido de transiciones y estados de los casos. |
| **Repository** | Acceso a Datos [cite: 56] | Aislamiento de la lógica de negocio de la base de datos. |
| **Facade** | Interoperabilidad [cite: 59] | Centralización de llamadas a sistemas externos (Fiscalía/Policía). |


## 5. Seguridad y Auditoría
* **Autenticación:** Sistema basado en JWT; las credenciales no se almacenan en el cliente.
* **Autorización:** Control de Acceso Basado en Roles (**RBAC**) validado en Frontend y Backend.
* **Trazabilidad:** Interceptor global que registra UsuarioID, Acción, Timestamp, IP y datos afectados en tablas de auditoría inalterables.

## 6. Estrategia Offline First
Diseñado para la operación en puestos fronterizos con baja conectividad:
1.  **Persistencia Local:** Uso de LocalStorage/IndexedDB para guardado temporal de formularios.
2.  **Sincronización:** El **Sync Manager** del backend procesa datos diferidos una vez recuperada la red.
3.  **Conflictos:** Resolución mediante marcas de tiempo (Timestamps) para preservar la versión más reciente.

## 7. Infraestructura y Despliegue 
* **Servidor Web**: Nginx o Apache para el servicio de la aplicación frontend.
* **Integración Externa**: Comunicación segura mediante protocolos HTTPS y arquitectura de microservicios o modular conectada vía API REST.
* **Seguridad de Capa**: Cifrado de datos en tránsito y en reposo para cumplir normativas de confidencialidad.


> **Conclusión:** El stack tecnológico combina robustez empresarial con estructuras modernas, garantizando la seguridad y sostenibilidad del sistema DIGEMIG.