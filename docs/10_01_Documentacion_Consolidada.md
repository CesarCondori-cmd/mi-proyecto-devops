# Documento de Especificacion de requerimientos (SRS)
## Proyecto
Sistema de informacion para el Registro, Derivacion y Seguimiento de Casos de trata y Trafico de Personas - DIGEMIG


## Indice
1. [Introduccion y Contexto](01_Introduccion_y_Contexto.md)  
2. [Requerimientos Funcionales](02_Requerimientos_Funcionales.md)  
3. [Requerimientos No Funcionales (DevOps)](03_Requerimientos_No_Funcionales_DevOps.md)  
4. [Historias de Usuarios](04_Historias_De_Usuarios.md) 
5. [Arquitectura del Sistema](05_Arquitectura_del_Sistema.md)
6. [Stack Tecnologico](06_Stack_Tecnologico.md)
7. [Diagramas UML](07_Diseño_UML/)
8. [Cronograma](08_Cronograma/08_01_Cronograma.png)
9. [Documentacion](09_Documentacion/)

# 1. Introducción y Contexto

## 1.1 Propósito

Definir los requerimientos funcionales y no funcionales del sistema de información que permitirá registrar, derivar, realizar seguimiento y analizar posibles casos de trata de personas detectados en puestos de control migratorio, en el marco de las funciones de la Dirección General de Migración (DIGEMIG).

Este documento se gestiona bajo el enfoque **Docs-as-Code**, utilizando Markdown y control de versiones con Git, facilitando la trazabilidad, versionado y colaboración en el desarrollo del sistema.

## 1.2 Alcance del Sistema

El sistema permitirá:

- Registrar información de posibles casos de trata detectados en puestos fronterizos  
- Almacenar y consultar datos relacionados a víctimas, indicadores de riesgo y acciones realizadas  
- Permitir la derivación de casos a instituciones competentes mediante servicios web (API REST)  
- Realizar el seguimiento del estado de cada caso  
- Generar reportes e indicadores para análisis y formulación de políticas públicas  
- Integrarse con sistemas externos institucionales  
- Gestionar usuarios, roles y permisos del sistema  
- Registrar logs de acceso, consultas y acciones realizadas  
- Proveer documentación técnica, manual de usuario y manual de administración  

## 1.3 Stakeholders del Sistema

| Stakeholder | Rol | Interés en el sistema | Necesidades principales |
|------------|-----|----------------------|------------------------|
| DIGEMIG | Entidad ejecutora | Gestión y control del sistema | Información consolidada, toma de decisiones |
| OIM | Organismo cooperante | Apoyo técnico y supervisión | Datos confiables, reportes e indicadores |
| Agente Migratorio | Usuario operativo | Registro de casos | Interfaz sencilla, rapidez, funcionamiento offline |
| Supervisor | Control y seguimiento | Monitoreo de casos | Visualización de estados, reportes |
| Policía / Fiscalía | Instituciones receptoras | Atención de casos derivados | Notificaciones oportunas, acceso a información |
| Analista | Evaluación | Análisis de datos | Reportes e indicadores estadísticos |
| Administrador TI | Gestión técnica | Mantenimiento del sistema | Control de accesos, seguridad, logs |
| Stakeholder | Rol | Interés en el sistema | Necesidades principales |
| Isaac Eleazar Surci Cuti | Customer| Definir funcionalidades del sistema | Priorización de requerimientos, validación de funcionalidades |
| Doris Neyza Baltazar Torrez | Programmer | Implementación del sistema | Desarrollo de funcionalidades, código limpio y cumplimiento de requerimientos |
| Cesar Daniel Condori Malpartida | Programmer | Implementación del sistema | Desarrollo de funcionalidades, código limpio y cumplimiento de requerimientos |
| Luis Alberto Chura Zegarra | Programmer | Implementación del sistema | Desarrollo, pruebas técnicas y validación de funcionalidades |
| Jazmin Cielo Canaviri Mamani | Programmer | Implementación del sistema | Desarrollo, soporte técnico y mejora continua del sistema |  
## 1.4 Problema

La gestión de información sobre posibles casos de trata de personas en puestos fronterizos presenta limitaciones en el registro, seguimiento y análisis de los casos, lo que dificulta la coordinación interinstitucional y la generación de información confiable para la toma de decisiones.

## 1.5 Objetivo del Sistema

Desarrollar un sistema de información que permita registrar, almacenar, consultar, derivar y analizar información sobre posibles casos de trata de personas, fortaleciendo la toma de decisiones y la implementación de políticas migratorias basadas en evidencia.

# 2. Listado de Requerimientos Funcionales (RF)

**Prioridad: MoSCoW (Must = Debe tener, Should = Debería, Could = Podría, Won’t = No tendrá)**


| ID    | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|-------|------------------------------|----------|------------------------|
| RF-01 | El sistema debe permitir identificar y registrar indicadores físicos, conductuales y documentales según la guía de detección. | Must | El agente registra indicadores mediante un formulario y los datos se almacenan en la base de datos en menos de 2 segundos con confirmación visual. |
| RF-02 | El sistema debe permitir registrar variables del caso como geolocalización, perfilamiento y escaneo QR/OCR. | Must | Se registran al menos 5 variables principales y 8 de perfilamiento, incluyendo ubicación automática; si falla el escaneo, permite ingreso manual. |
| RF-03 | El sistema debe clasificar automáticamente el nivel de riesgo del caso. | Must | El sistema asigna niveles Bajo, Medio o Alto automáticamente en base a reglas definidas al guardar el caso. |
| RF-04 | El sistema debe enviar automáticamente casos de riesgo medio o alto a instituciones correspondientes. | Must | Las alertas se envían en menos de 5 segundos a Policía/Fiscalía y se registra confirmación de envío. |
| RF-05 | El sistema debe gestionar usuarios con roles diferenciados. | Must | El sistema valida permisos por rol (Agente, Supervisor, Institución, Admin) y restringe accesos no autorizados en cada operación. |
| RF-06 | El sistema debe registrar todas las acciones en logs de auditoría. | Must | Todas las acciones se registran de forma inalterable y se almacenan durante 10 años. |
| RF-07 | El sistema debe funcionar en modo offline. | Must | El agente puede registrar información sin conexión y el sistema sincroniza automáticamente al reconectarse sin pérdida de datos. |
| RF-08 | El sistema debe permitir el seguimiento del caso por instituciones externas. | Should | Policía/Fiscalía actualizan estados del caso y los cambios se reflejan en menos de 2 segundos con historial registrado. |
| RF-09 | El sistema debe permitir adjuntar evidencias al caso. | Should | El usuario puede subir archivos (PDF, imágenes, video) de hasta 10MB por archivo, asociados correctamente al caso. |
| RF-10 | El sistema debe generar indicadores estadísticos para análisis institucional. | Should | El sistema genera reportes con datos agregados exportables en formatos estándar (PDF/Excel). |
| RF-11 | El sistema debe mostrar dashboards analíticos en tiempo real. | Could | Se visualizan gráficos y mapas de calor actualizados dinámicamente con datos en tiempo real. |
| RF-12 | El sistema debe permitir la reapertura de casos cerrados. | Could | El usuario puede reabrir casos con justificación obligatoria registrada en auditoría. |

# 3. Listado de Requerimientos No Funcionales (RNF)

| ID     | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|--------|------------------------------|----------|------------------------|
| RNF-01 | El sistema debe garantizar autenticación segura mediante OAuth2 o JWT. | Must | El acceso requiere autenticación válida y todas las comunicaciones utilizan HTTPS. |
| RNF-02 | El sistema debe proteger los datos sensibles de los usuarios. | Must | Los datos sensibles (identidad, ubicación y estado del caso) están cifrados y solo accesibles por usuarios autorizados. |
| RNF-03 | El sistema debe responder consultas en menos de 1 segundo. | Should | Las consultas con hasta 10,000 registros se ejecutan en menos de 1 segundo, optimizando uso de CPU, memoria y ancho de banda. |
| RNF-04 | El sistema debe ser mantenible. | Must | El sistema utiliza código limpio, arquitectura modular y escalable, facilitando modificaciones sin afectar otros módulos. |
| RNF-05 | El sistema debe contar con documentación técnica completa. | Must | Se dispone de manual de usuario, manual técnico, plan de contingencia y documentación en el código fuente. |
| RNF-06 | El sistema debe desplegarse en infraestructura institucional. | Must | El sistema se ejecuta en el Data Center de DIGEMIG con disponibilidad mínima del 99%. |

#  4. Historias de Usuario
## Sistema de Registro, Derivación y Seguimiento de Trata de Personas (DIGEMIG)

Sistema de Registro, Derivación y Seguimiento de Trata de Personas (DIGEMIG)

## Registro y Evaluación de Casos

### HU-01
**Como** agente migratorio  
**Quiero** identificar y registrar indicadores físicos, conductuales y documentales  
**Para** detectar posibles casos de trata de personas  

**Criterios de aceptación:**
- Registro mediante formulario digital  
- Almacenamiento en menos de 2 segundos  
- Permite edición antes de confirmar  

### HU-02
**Como** agente migratorio  
**Quiero** registrar variables del caso  
**Para** mejorar la evaluación del caso  

**Criterios de aceptación:**
- Registro de 5 variables principales y 8 adicionales  
- Captura automática de ubicación  
- Permite ingreso manual si falla QR/OCR  

### HU-03
**Como** agente migratorio  
**Quiero** que el sistema calcule automáticamente el nivel de riesgo  
**Para** tomar decisiones oportunas  

**Criterios de aceptación:**
- Clasificación automática (Bajo, Medio, Alto)  
- Tiempo de cálculo menor a 1 segundo  

## Derivación y Alertas

### HU-04
**Como** agente migratorio  
**Quiero** derivar automáticamente casos críticos  
**Para** activar la intervención de instituciones  

**Criterios de aceptación:**
- Envío en menos de 5 segundos  
- Registro de confirmación  
- Aplica solo para riesgo medio/alto  

## Gestión de Usuarios

### HU-05
**Como** administrador  
**Quiero** gestionar usuarios y roles  
**Para** controlar accesos al sistema  

**Criterios de aceptación:**
- CRUD de usuarios  
- Permisos por rol  
- Acceso restringido  

## Auditoría

### HU-06
**Como** administrador TI  
**Quiero** registrar todas las acciones del sistema  
**Para** garantizar trazabilidad  

**Criterios de aceptación:**
- Logs inalterables  
- Registro de accesos y cambios  
- Almacenamiento por 10 años  

## Operación Offline

### HU-07
**Como** agente migratorio  
**Quiero** registrar casos sin conexión  
**Para** no perder información en campo  

**Criterios de aceptación:**
- Funcionamiento offline  
- Sincronización automática  
- Sin pérdida de datos  

## Seguimiento del Caso

### HU-08
**Como** Policía/Fiscalía  
**Quiero** actualizar el estado del caso  
**Para** dar seguimiento  

**Criterios de aceptación:**
- Cambio de estado  
- Registro en historial  
- Actualización en menos de 2 segundos  

### HU-09
**Como** agente migratorio  
**Quiero** adjuntar evidencias  
**Para** respaldar el caso  

**Criterios de aceptación:**
- Subida de archivos  
- Tamaño máximo 10MB  
- Visualización posterior  

## Análisis

### HU-10
**Como** analista  
**Quiero** generar reportes  
**Para** apoyar la toma de decisiones  

**Criterios de aceptación:**
- Generación en menos de 3 segundos  
- Exportación en PDF/Excel  

### HU-11
**Como** supervisor  
**Quiero** visualizar dashboards  
**Para** analizar tendencias  

**Criterios de aceptación:**
- Gráficos dinámicos  
- Datos en tiempo real  

## Gestión de Casos

### HU-12
**Como** supervisor  
**Quiero** reabrir casos cerrados  
**Para** continuar investigaciones  

**Criterios de aceptación:**
- Justificación obligatoria  
- Registro en auditoría  

## DevOps

### HU-13
**Como** customer  
**Quiero** realizar respaldos automáticos del sistema  
**Para** evitar pérdida de información  

**Criterios de aceptación:**
- Respaldo semanal automático  
- Almacenamiento seguro  
- Restauración funcional  

### HU-14
**Como** desarrollador  
**Quiero** desplegar nuevas versiones del sistema o restaurar versiones anteriores  
**Para** mantener la estabilidad del sistema  

**Criterios de aceptación:**
- Despliegue sin interrupción  
- Rollback disponible  
- Registro de versiones  

# Arquitectura del Sistema - DIGEMIG

Este documento describe la estructura técnica y lógica del **Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas**.

## 1. Filosofía Arquitectónica 
La arquitectura se rige por dos principios fundamentales que guían el diseño del sistema:
* **Protección y trazabilidad**: El sistema prioriza la seguridad del caso, la confidencialidad de la información y el registro inalterable de cada acción institucional.
* **Decisiones basadas en evidencia**: Se enfoca en transformar los datos operativos en información útil para el análisis y la generación de indicadores estadísticos.

## 2. Estilo Arquitectónico
Se ha seleccionado una **Arquitectura Modular en Capas** por las siguientes razones:
* Permite separar de forma clara las responsabilidades de presentación, lógica de negocio, datos e integración.
* Facilita el mantenimiento y la escalabilidad de módulos críticos como el registro de indicadores y el motor de riesgo.
* Mejora la interoperabilidad con sistemas externos y permite el desarrollo independiente de la lógica de sincronización offline.

## 3. Capas del Sistema 
* **Capa de Presentación**: Gestionada mediante una SPA (Single Page Application) que maneja componentes de interfaz y lógica de estado local.
* **Capa de Negocio**: Orquestación de procesos, ejecución del motor de riesgo y control de acceso institucional.
* **Capa de Persistencia**: Gestión de la integridad de los datos transaccionales y almacenamiento de evidencias físicas.
* **Capa de Integración**: Centraliza la interoperabilidad con instituciones como la Policía y la Fiscalía mediante servicios REST.

## 4. Patrones de Diseño Aplicados
* **MVC / MVT**: Utilizado para la organización de la interfaz web y formularios dinámicos.
* **Repository**: Desacopla la lógica de negocio del acceso directo a la base de datos PostgreSQL.
* **Strategy**: Aplicado en el Motor de Reglas de Riesgo para permitir cambios en la clasificación sin rediseñar el sistema.
* **State**: Controla rígidamente el ciclo de vida del caso (Detectado, Derivado, Seguimiento, Cerrado, Reabierto).
* **API Gateway / Facade**: Centraliza y protege la comunicación con sistemas externos de otras instituciones.

## 5. Ciclo de Vida y Estados
El sistema implementa estados estrictos para garantizar la trazabilidad de los casos:
* **Estado del Caso**: Detectado -> Derivado (si el riesgo es >= Medio) -> En Seguimiento -> Judicializado -> Cerrado.
* **Estado de Usuario**: Inactivo -> Activo -> Sesión Iniciada (vía JWT) -> Bloqueado (tras intentos fallidos).
* **Sincronización**: Local -> Sincronizando -> Sincronizado / Conflicto.  

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
| **MVC / MVT** | Interfaz web | Utilizado para la organización de la interfaz web y formularios dinámicos. |
| **Strategy** | Motor de Riesgo | Intercambio de algoritmos de evaluación sin afectar el registro. |
| **State** | Ciclo de Vida del Caso  | Control rígido de transiciones y estados de los casos. |
| **Repository** | Acceso a Datos  | Aislamiento de la lógica de negocio de la base de datos. |
| **Facade** | Interoperabilidad  | Centralización de llamadas a sistemas externos (Fiscalía/Policía). |


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