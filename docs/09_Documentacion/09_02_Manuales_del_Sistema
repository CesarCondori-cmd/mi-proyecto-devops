# **Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas \- DIGEMIG**

# **MANUAL DE USUARIO Y OPERACIÓN DE NEGOCIO**

## **1\. Introducción**

Este sistema es el escudo tecnológico de DIGEMIG contra la trata de personas. Cada segundo cuenta al identificar a una víctima en frontera. Esta herramienta ha sido diseñada para ser intuitiva y robusta, permitiendo que el Agente Migratorio se concentre en la persona, mientras la tecnología gestiona la evidencia y la alerta temprana.

### **1.1 Guía de inicio rápido**

Primeros Pasos:

* **Ingreso:** Acceda con su usuario institucional y contraseña.  
* **Apertura:** Pulse "Nuevo Registro" al detectar comportamientos o documentos sospechosos.  
* **Captura:** Utilice el escáner para el documento (QR/OCR). Si falla, ingrese los datos manualmente.  
* **Perfilado:** Complete las 5 variables principales y las 8 variables de perfilamiento obligatorio.  
* **Finalización:** Guarde el caso. Si el riesgo es Medio o Alto, el sistema derivará el caso a la Policía automáticamente.

## **2\. Flujos de trabajo operativos (Workflows)**

### **2.1 Registro integral de indicadores (Agente migratorio)**

El sistema guía al Agente a través de la identificación de señales físicas, conductuales y documentales.

* **Identificación:** Marque en el sistema los indicadores que observe (ej. la persona no conoce su destino o muestra miedo hacia su acompañante).  
* **Evaluación de riesgo:** Al terminar el registro, el sistema le indicará inmediatamente si el riesgo es Bajo, Medio o Alto basándose en reglas expertas.  
* **Uso Offline:** Si no tiene internet en su puesto de control, puede llenar el formulario normalmente. El sistema guardará la información y la enviará al servidor central  
* automáticamente en cuanto recupere la conexión.  
* **Variables de perfilamiento:** Es obligatorio completar las 8 variables adicionales  
* de perfilamiento (incluyendo origen, destino, acompañante y medios de contacto) para que el motor de riesgo sea preciso.  
* **Geolocalización:** El sistema capturará automáticamente las coordenadas del puesto fronterizo para mapear el incidente.

### **2.2 Evaluación de riesgo y derivación automática (Supervisor / Institución receptora)**

Al guardar el registro, el sistema aplica una lógica interna de evaluación.

* **Tiempo de respuesta:** El cálculo se realiza en menos de 1 segundo.  
* **Niveles:** Bajo (Verde), Medio (Amarillo), Alto (Rojo).  
* **Derivación:** Si el caso es Medio o Alto, se envía una notificación electrónica a la Policía y Fiscalía en menos de 5 segundos. El Agente recibirá una confirmación visual del envío exitoso.  
* **Seguimiento:** Usted podrá ver en el historial si la Policía ya intervino el caso o si este ha pasado a una etapa judicial.  
* **Cierre de caso:** Una vez concluidas las acciones de protección, el caso se marcará como "Cerrado" para mantener estadísticas limpias.

### **2.3 Operación en zonas de baja conectividad (Modo Offline)**

El sistema está diseñado para puestos fronterizos con señal inestable.

* **¿Dónde están mis datos?:** Si pierde la conexión, sus registros se guardarán de forma segura en el almacenamiento interno del navegador (IndexedDB).  
* **Sincronización:** Una vez que el sistema detecte conexión a internet, los datos se enviarán automáticamente al servidor central. No cierre la pestaña del navegador hasta ver el ícono de "Sincronizado".

## **3\. Gestión de evidencias y seguimiento**

El éxito de una investigación depende de la calidad de la prueba recolectada.

### **3.1 Carga de evidencias**

Puede adjuntar PDFs de documentos, fotografías de la víctima/sospechoso o videos de entrevistas. Cada archivo tiene un límite de 10MB para asegurar la rapidez del sistema.

### **3.2 Seguimiento**

En la bandeja de casos, podrá ver el estado actualizado por instituciones externas (Ej: "En proceso por Fiscalía" o "Judicializado"). Esto permite saber que la víctima está recibiendo atención.

## **4\. Roles de supervisión y análisis de datos**

Los Supervisores tienen herramientas adicionales para gestionar la operación regional.

* **Dashboards:** Acceso a mapas de calor en tiempo real para identificar rutas de trata activas.  
* **Reportes:** Exportación de estadísticas en PDF/Excel para reuniones interinstitucionales.  
* **Reapertura de Casos:** Si surge nueva información sobre un caso cerrado, el Supervisor puede reabrirlo. Nota: El sistema rechazará la reapertura si la justificación escrita es inferior a 50 caracteres; se requiere un sustento sólido para la auditoría.

## **5\. Seguridad y confidencialidad**

* **Privacidad:** Toda la información de las víctimas está cifrada. Solo el personal autorizado puede ver datos sensibles.  
* **Trazabilidad:** Recuerde que cada búsqueda o modificación que realice queda  
* registrada en un libro de auditoría digital inalterable que se conserva por 10 años.

## **6\. Glosario y resolución de problemas (FAQ)**

### **6.1 Glosario**

* **IndexedDB:** Memoria temporal del navegador donde vive el registro cuando no hay internet.  
* **Derivación Electrónica:** Proceso automático de envío de información legal a la Policía.  
* **Trazabilidad Forense:** Registro inalterable de quién, cuándo y qué se modificó en un caso.

### **6.2  FAQ**

¿Qué hago si falla el escaneo de un código QR? El sistema le permite ingresar los datos de forma manual para no detener el proceso.

* ¿Qué hago si falla el inicio de sesión? La causa probable es el uso de credenciales incorrectas o VPN inactiva. Verifique que su conexión VPN esté activa antes de  
* intentar ingresar.  
* ¿Por qué me aparece un icono de "Nube Tachada"? Falta de conexión al Data Center. Continúe trabajando, el sistema usará el modo Offline (IndexedDB) automáticamente.  
* ¿Puedo reabrir un caso cerrado? Solo los supervisores pueden hacerlo, proporcionando una justificación obligatoria que quedará registrada en el historial.  
* ¿Por qué me rechaza al guardar reapertura? Justificación insuficiente. Redacte una explicación más detallada del motivo de la reapertura (mínimo 50 caracteres).

# **MANUAL DE INSTALACIÓN Y CONFIGURACIÓN**

## **1\. Introducción**

El despliegue del sistema es un acto de soberanía tecnológica que permite a la DIGEMIG de Bolivia controlar de forma absoluta los datos sobre trata de personas. La integridad de esta información es una obligación legal para proteger a las víctimas y procesar a los delincuentes. Por ello, el manual establece reglas técnicas obligatorias para preparar un entorno de hardware y software que sea seguro, estable y escalable.

### **1.1 Audiencia**

Este documento está dirigido al personal encargado de la instalación, configuración y puesta en marcha del sistema en el Data Center de DIGEMIG o en entornos de desarrollo locales.

## **2\. Requisitos del sistema: Hardware, SO y dependencias**

### **2.1 Hardware (Mínimo recomendado)**

* **Procesador:** 4 núcleos de 2.5 GHz o superior.  
* **Memoria RAM:** 8 GB para entornos locales; 16 GB para entornos de producción (para manejar Spring Boot, Angular y PostgreSQL simultáneamente).  
* **Almacenamiento:** 50 GB de espacio libre (escalable para evidencias multimedia). 

### **2.2 Software y Dependencias**

* **Sistema Operativo:** Basado en Linux (Ubuntu 22.04 LTS) o Windows con WSL2  
* **Lenguaje de Programación:** Java 17+  
* **Framework de Backend:** Spring Boot 3.x  
* **Framework de Frontend:** Angular  
* **Base de Datos:** PostgreSQL  
* **Contenerización:** Docker y Docker Compose para orquestación modular

## **3\. Pasos de configuración: Variables de entorno y servicios**

La arquitectura modular requiere la inyección de parámetros de configuración específicos para activar los servicios de integración y el gestor de sincronización.

### **3.1 PASO 1: Clonación y Preparación**

Clonar el repositorio desde GitHub e ingresar al directorio raíz para verificar la presencia del *Dockerfile* y *pom.xml*.

### **3.2 PASO 2: Inicialización de Base de Datos**

* Cree la base de datos digemig\_trata con codificación UTF-8.  
* **Configure el acceso restringido:** el usuario del sistema solo debe tener permisos sobre el esquema de la aplicación y las tablas de auditoría.

### **3.3 PASO 3: Configuración de variables de entorno**

Configure obligatoriamente las siguientes variables en el entorno del servidor de aplicaciones para minimizar errores de conexión y asegurar el cumplimiento de los tiempos de respuesta:

\# Conexión Base de Datos  
DB\_URL=jdbc:postgresql://\[HOST\]:5432/digemig\_trata  
DB\_USER=\[SISTEMA\_USER\]  
DB\_PASS=\[SECURE\_PASSWORD\]

\# Seguridad OAuth2/JWT  
JWT\_SECRET=\[LLAVE\_MIN\_64\_CHARS\]  
TOKEN\_EXPIRATION=28800 \# 8 horas

\# Integración Interinstitucional (API REST)  
POLICIA\_API\_URL=https://api.policia.gob.bo/v1/derivacion  
FISCALIA\_API\_URL=https://api.fiscalia.gob.bo/v1/casos

\# Sync Manager (Estrategia Offline-First)  
SYNC\_INTERVAL\_MS=60000  
SYNC\_BATCH\_SIZE=50  
OFFLINE\_STORAGE\_LIMIT\_MB=500

\# Archivos y Evidencias  
STORAGE\_PATH=/opt/digemig/evidencias/  
MAX\_FILE\_SIZE=10MB

**Backend:** Configure obligatoriamente las siguientes variables en el entorno del servidor de aplicaciones para minimizar errores de conexión y asegurar el cumplimiento de los tiempos de respuesta:

### **3.4 PASO 4: Despliegue con docker**

Para un despliegue local:

* Ejecutar docker build \-t mi-proyecto-devops, para generar la imagen basada en el Dockerfile.  
* Levantar los servicios mediante Docker Compose, asegurando que el servidor Nginx o Apache esté configurado para servir el frontend.

### **3.5 PASO 5: Configuración del API Gateway**

Centralice las llamadas a servicios externos mediante el módulo de integración. Verifique que el firewall permita tráfico saliente hacia los endpoints de la Policía y Fiscalía en menos de 5  
segundos. Una vez validada la configuración de servicios, proceda a la verificación operativa mediante el protocolo de pruebas de humo.

## **4\. Verificación: Pruebas de humo**

Utilice la siguiente lista de verificación para validar la integridad del despliegue en el ambiente de producción:

* **Conectividad DB:** Ejecutar ping al puerto 5432 y validar respuesta del repositorio.  
* **Carga de Frontend:** El Dashboard de Angular debe ser accesible vía HTTPS sin errores 404 en recursos estáticos.  
* **Token JWT:** Validar que el endpoint /auth/login emite un token firmado y que los interceptores permiten el acceso.  
* **Motor de Riesgo (KPI):** Validar mediante un caso de prueba que el cálculo de riesgo se ejecuta en menos de 1 segundo (HU-03).  
* **Sync Manager:** Verificar en logs que el servicio de sincronización está en estado "Listening" para procesar datos de IndexedDB.  
* **Interoperabilidad:** Validar handshake exitoso con los servicios de la Policía y Fiscalía.Si alguna de estas pruebas falla, se debe aplicar inmediatamente el protocolo de recuperación.

## **5\. Rollback y Procedimientos de recuperación**

La estabilidad del sistema es crítica. No se permiten despliegues fallidos en producción por más de 15 minutos.

### **5.1 Procedimiento de Rollback**

* Detenga el servicio actual (systemctl stop digemig-backend).   
* Identifique la última versión estable (Tag de Git) en el repositorio de despliegue.  
* Reemplace el artefacto (.jar / archivos estáticos) por la versión estable previa.  
* Reinicie los servicios y ejecute nuevamente el Checklist de Pruebas de Humo.

###  **5.2 Respaldos y Petención de auditoría**

* Respaldos Semanales: Configure un cronjob para ejecutar el respaldo automático de la DB y evidencias cada domingo a las 02:00 AM.  
* Retención Obligatoria: Los logs de auditoría (acciones, accesos, cambios) deben ser archivados y permanecer disponibles por un periodo de 10 años . No se deben purgar datos de auditoría sin autorización expresa de la Dirección de TI.

# **MANUAL TÉCNICO DE ARQUITECTURA Y DISEÑO DE SOFTWARE**

**Entidad Ejecutora:** Dirección General de Migración (DIGEMIG)  
**Metodología de Documentación:** Docs-as-Code  
**Especificación:** Diseño e Ingeniería Base Sincronizada (v1.0.0)  
**Estado:** Liberado para Implementación / Fase de Diseño Homologada

## **1\. Control de Documento y Stakeholders**

### **1.1 Historial de versiones**

| Versión | Fecha | Autor | Descripción | Estado |
| :---- | :---- | :---- | :---- | :---- |
| v1.0.0 | Junio 2026 | Equipo de Ingeniería DIGEMIG | Consolidación de Arquitectura, Diccionario de Datos Físico, Diagramas de Persistencia, Planes de QA y Continuidad de Operaciones. | Aprobado |

### **1.2 Matriz de responsabilidades del equipo técnico**

Para asegurar el cumplimiento de las normativas de desarrollo institucionales y la transparencia en la gestión del proyecto, se homologa el siguiente equipo de trabajo:

| Stakeholder / Ingeniero | Rol asignado | Responsabilidad técnica en el proyecto |
| :---- | :---- | :---- |
| Isaac Eleazar Surci Cuti | Customer / Product Owner | Definición estricta de requerimientos institucionales, validación de criterios de aceptación y priorización del Product Backlog. |
| Doris Neyza Baltazar Torrez | Programmer / Dev Core | Diseño arquitectónico general, codificación de componentes funcionales en el backend y cumplimiento de estándares de código limpio. |
| Cesar Daniel Condori Malpartida | Programmer / Dev Core | Modelado, normalización y optimización de la persistencia de datos relacionales físicos, tunning de consultas complejas y seguridad del motor. |
| Luis Alberto Chura Zegarra | Programmer / QA Integration | Desarrollo de sub-sistemas de integración externa (Interoperabilidad), automatización de pruebas unitarias y validación lógica del negocio. |
| Jazmin Cielo Canaviri Mamani | Programmer / Support & DevOps | Implementación de la interfaz SPA frontend, configuraciones de infraestructura institucional y soporte evolutivo continuo. |

## **2\. Filosofía Arquitectónica y Capas del Sistema**

Para soportar las restricciones operativas del entorno institucional y responder eficazmente a las deficiencias de conectividad de los puestos fronterizos, el sistema adopta un estilo de **Arquitectura modular en capas**. Este modelo proporciona un desacoplamiento estricto de responsabilidades, facilitando el mantenimiento y la escalabilidad del sistema sin comprometer los módulos transaccionales críticos.

### **2.1 Descripción de las capas**

1. **Capa de presentación (Frontend SPA):** Desarrollada sobre Angular utilizando Angular Material para una interfaz estandarizada y flujos asíncronos mediante RxJS. Incluye el motor de persistencia local en navegador a través de W3C IndexedDB para dar soporte a la estrategia *Offline-First*.  
2. **Capa de integración y seguridad:** Centraliza los mecanismos de autenticación stateless mediante JSON Web Tokens (JWT) sobre HTTPS con TLS 1.3, aislando el núcleo del backend de accesos no autorizados.  
3. **Capa de negocio (Backend Core):** Construida en Java 17 empleando el framework Spring Boot 3.x. Orquesta las reglas del negocio, el procesamiento analítico de indicadores y delega las tareas transaccionales de fondo.  
4. **Capa de persistencia (Acceso a Datos):** Abstrae la manipulación del motor de base de datos relacional PostgreSQL mediante interfaces genéricas provistas por Spring Data JPA y el mapeo objeto-relacional de Hibernate.

### **2.2 Patrones de diseño aplicados**

* **Strategy (Motor de riesgo):** Intercambia dinámicamente los algoritmos y ponderaciones de los indicadores de riesgo sin alterar los servicios base del sistema.  
* **State (Ciclo de vida del caso):** Restringe de forma rígida los flujos de estado del expediente (Detectado, Derivado, En Seguimiento, Cerrado, Reabierto), impidiendo mutaciones de datos inválidas.  
* **Repository (Aislamiento de datos):** Desacopla la lógica de negocio de las consultas directas SQL, centralizando el acceso a las entidades mediante abstracciones de Spring Data.  
* **Facade / Gateway (Interoperabilidad):** Unifica y simplifica la interfaz de comunicación asíncrona hacia las APIs REST protegidas de la Policía Boliviana y la Fiscalía General del Estado.

## **3\. Diccionario de Datos en PostgreSQL** 

### **3.1 Tabla: ROLES**

Catálogo maestro para la tipificación jerárquica de accesos de seguridad.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_rol** | INT / SERIAL | PRIMARY KEY | Identificador único autoincremental del rol. |
| **nombre** | VARCHAR(50) | NOT NULL | Nombre del nivel de acceso (AGENTE, SUPERVISOR, ADMIN). |
| **descripción** | VARCHAR(255) | NOT NULL | Detalle formal del alcance operativo asignado al rol. |

### **3.2 Tabla: USUARIOS**

Resguarda las credenciales criptográficas y las cuentas del personal de DIGEMIG.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_usuario** | INT / SERIAL | PRIMARY KEY | Identificador de cuenta único del operador. |
| **nombre** | VARCHAR(100) | NOT NULL | Nombre completo del funcionario migratorio. |
| **email** | VARCHAR(100) | UNIQUE, NOT NULL | Correo electrónico institucional (Login del sistema). |
| **password** | VARCHAR(255) | NOT NULL | Contraseña protegida bajo el hashing adaptativo BCrypt. |
| **id\_rol** | INT | FOREIGN KEY (ROLES) | Relación obligatoria al catálogo maestro de roles. |

### **3.3 Tabla: NIVELES\_RIESGO**

Matriz paramétrica utilizada por el motor analítico del patrón Strategy.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_nivel\_riesgo** | INT / SERIAL | PRIMARY KEY | Identificador único del nivel de alerta. |
| **nombre** | VARCHAR(50) | NOT NULL | Clasificación cualitativa calculada (BAJO, MEDIO, ALTO). |
| **puntaje\_min** | INT | NOT NULL | Límite inferior del espectro matemático de la alerta. |
| **puntaje\_max** | INT | NOT NULL | Límite superior ponderado para el disparo de alertas. |

### **3.4 Tabla: CASOS**

Entidad transaccional central que registra el expediente del posible escenario de trata.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_caso** | INT / SERIAL | PRIMARY KEY | Código interno de indexación de la transacción. |
| **codigo\_unico** | VARCHAR(50) | UNIQUE, NOT NULL | Correlativo institucional inalterable para auditorías. |
| **fecha\_registro** | TIMESTAMP | NOT NULL | Estampa de tiempo atómica de la creación física del caso. |
| **estado** | VARCHAR(30) | NOT NULL | Estado lógico en el ciclo de vida (Patrón State). |
| **id\_usuario** | INT | FOREIGN KEY (USUARIOS) | Funcionario responsable de la apertura del expediente. |
| **id\_nivel\_riesgo** | INT | FOREIGN KEY (NIVELES\_RIESGO) | Evaluación de salida del motor inteligente de riesgo. |

### **3.5 Tabla: INDICADORES**

Maestro normado de factores de riesgo físicos, conductuales y documentales.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_indicador** | INT / SERIAL | PRIMARY KEY | Identificador único del factor de la guía de detección. |
| **nombre** | VARCHAR(100) | NOT NULL | Nombre corto o glosa de la anomalía estandarizada. |
| **tipo** | VARCHAR(50) | NOT NULL | Categoría rígida (FÍSICO, CONDUCTUAL, DOCUMENTAL). |
| **puntaje** | NUMERIC(5,2) | NOT NULL | Peso numérico sumatorio para el cómputo de la alerta. |

### **3.6 Tabla: CASOS\_INDICADORES**

*Tabla intermedia relacional (Muchos a Muchos) entre Casos e Indicadores.*

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_caso** | INT | PRIMARY KEY, FOREIGN KEY | Asociación vinculada al expediente transaccional. |
| **id\_indicador** | INT | PRIMARY KEY, FOREIGN KEY | Referencia directa al indicador detectado en la entrevista. |

### **3.7 Tabla: DERIVACIONES**

Entidad operativa de interoperabilidad para transferencias automáticas por API REST.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_derivacion** | INT / SERIAL | PRIMARY KEY | Identificador único del flujo de salida. |
| **institucion** | VARCHAR(100) | NOT NULL | Entidad destino competente (Policía / Fiscalía). |
| **fecha\_envio** | DATE | NOT NULL | Hito cronológico del despacho electrónico de datos. |
| **estado** | VARCHAR(50) | NOT NULL | Estado del flujo externo (ENVIADO, RECIBIDO, EN\_PROCESO). |
| **id\_caso** | INT | FOREIGN KEY (CASOS) | Relación directa con el caso matriz de origen. |

### **3.8 Tabla: SEGUIMIENTOS**

Historial de actuaciones institucionales y de protección posteriores.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_seguimiento** | INT / SERIAL | PRIMARY KEY | Código único correlativo de la actuación. |
| **fecha** | DATE | NOT NULL | Fecha de ejecución de la actividad en campo. |
| **observación** | TEXT | NOT NULL | Bitácora narrativa detallada de los avances o estado. |
| **id\_caso** | INT | FOREIGN KEY (CASOS) | Vinculación directa con el expediente evaluado. |
| **id\_usuario** | INT | FOREIGN KEY (USUARIOS) | Operador a cargo del registro técnico de seguimiento. |

### **3.9 Tabla: EVIDENCIAS**

Resguardo y control de metadatos de los archivos binarios adjuntos.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_evidencia** | INT / SERIAL | PRIMARY KEY | Identificador único de la evidencia digital. |
| **archivo** | VARCHAR(255) | NOT NULL | Nombre lógico original del binario cargado. |
| **tipo** | VARCHAR(100) | NOT NULL | Tipo MIME verificado en backend (PDF, PNG, JPG). |
| **id\_caso** | INT | FOREIGN KEY (CASOS) | Relación de pertenencia jerárquica con el caso. |

### **3.10 Tabla: VARIABLES\_CASO**

Almacenamiento flexible para propiedades dinámicas extras (Geolocalización, OCR/QR).

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_variable** | INT / SERIAL | PRIMARY KEY | Identificador del parámetro dinámico de control. |
| **nombre** | VARCHAR(100) | NOT NULL | Nombre clave de la variable extendida. |
| **valor** | TEXT | NOT NULL | Payload de datos o contenido textual asignado. |
| **id\_caso** | INT | FOREIGN KEY (CASOS) | Dependencia uno a muchos con el caso transaccional. |

### **3.11 Tabla: LOGS\_AUDITORIA**

Bitácora forense de auditoría inalterable e indexada para no repudiar.

| Nombre del campo | Tipo de dato | Restricciones y llaves | Descripción / Regla de negocio |
| :---- | :---- | :---- | :---- |
| **id\_log** | INT / SERIAL | PRIMARY KEY | Código único e incremental del rastreo forense. |
| **acción** | VARCHAR(100) | NOT NULL | Operación CRUD ejecutada (CREATE, UPDATE, DELETE, VIEW). |
| **fecha** | DATE | NOT NULL | Fecha e hito cronológico del disparo del log. |
| **ip** | VARCHAR(45) | NOT NULL | Dirección IP (IPv4/IPv6) de origen de la petición. |
| **id\_usuario** | INT | FOREIGN KEY (USUARIOS) | Operador responsable de la mutación o consulta de datos. |

## **4\. Diagrama de Clases UML** 

La estructura orientada a objetos que el equipo de desarrollo debe implementar en Spring Boot de forma mandatoria se detalla en el siguiente diseño conceptual:

![][image1]

## **5\. Protocolo de Sincronización y Estrategia Offline-First**

Para mitigar los cortes frecuentes de internet en los puestos fronterizos remotos (Mapeo, el sistema opera bajo una arquitectura distribuida tolerante a fallos:

1. **Aislamiento local inmediato:** Al fallar las llamadas HTTP hacia la API central de DIGEMIG, los interceptores de Angular conmutan la persistencia hacia **W3C IndexedDB**. Los JSON de CASOS e INDICADORES se encolan con la propiedad temporal PENDIENTE\_SINCRO.  
2. **Monitoreo asíncrono de red (Heartbeat):** El componente *Sync Manager* despacha un paquete ping ligero cada 30 segundos evaluando el retorno de la red de datos institucional.  
3. **Vaciado estricto FIFO (First-In, First-Out):** Una vez restablecido el canal TLS 1.3, el cliente envía las transacciones acumuladas en lotes optimizados hacia el backend.  
4. **Resolución concurrente basada en tiempos:** Para evitar colisiones lógicas, el servidor aplica una estrategia de ordenamiento cronológico absoluto: *La marca de tiempo atómica generada localmente en la terminal fronteriza prevalece sobre el estado del servidor*, mutando el registro final a estado SINCRONIZADO.

## **6\. Plan de Aseguramiento de la Calidad (QA)**

### **6.1 Pruebas unitarias y cobertura lógica**

* **Línea base tecnológica:** Automatización mediante **JUnit 5** y **Mockito** en capas Core.  
* **Criterio de aceptación:** Es obligatorio alcanzar un **Coverage mínimo 80%** en todas las clases controladoras, adaptadores de repositorios y servicios de lógica del negocio. Los pipelines de CI/CD bloquearán el empaquetado del archivo JAR ante cualquier caída del porcentaje de cobertura o fallas unitarias.

### **6.2 Criterios de estrés y rendimiento** 

Ejecución semestral programada en **Apache JMeter** utilizando los siguientes perfiles de carga transaccional:

| Métrica de control | Criterio de aceptación rígido |
| :---- | :---- |
| **Usuarios concurrentes (Threads)** | 500 hilos de inyección simultánea continua. |
| **Volumen del dataset de base de datos** | Simulación sobre base de datos poblada con un mínimo de 10,000 registros transaccionales relacionales. |
| **Tiempo de respuesta objetivo (Target)** | Inferior a 1,000 milisegundos (1 Segundo de latencia máxima de API). |
| **Uso de recursos del servidor (CPU)** | Consumo de CPU menor al 65% en el nodo del backend de Spring Boot. |
| **Tasa de error máxima permitida** | 0.00% de peticiones fallidas o excepciones HTTP devueltas. |

## **7\. Plan De Mantenimiento y Continuidad De Operaciones**

### **7.1 Estrategia de respaldos (Backups automatizados)**

* **Frecuencia operativa:** Respaldos automáticos programados **semanalmente, todos los domingos a las 02:00 AM UTC**, garantizando una disponibilidad anual proyectada superior al **99%**.  
* **Alcance del backup:** Vaciado en caliente de la base de datos PostgreSQL, esquemas relacionales, logs forenses de auditoría y almacenamiento de los archivos binarios de la tabla EVIDENCIAS.  
* **Estándar de cifrado:** Empaquetado comprimido y **encriptado mandatoriamente en reposo con el estándar AES-256**. Las llaves maestras residen aisladas en un módulo criptográfico de hardware (HSM) institucional controlado por el Administrador de Seguridad de TI.  
* **Aislamiento geográfico:** Dispersión y guardado de copias de seguridad en un nodo secundario remoto de almacenamiento seguro fuera del Data Center principal.

### **7.2 Protocolo de rollback automatizado ante despliegues fallidos**

Durante las ventanas de mantenimiento e implementación de parches evolutivos por CI/CD, las herramientas de telemetría institucional monitorearán los contenedores del ecosistema de software. Si el servidor registra fallos críticos de inicialización en Spring Boot o caídas de conexión con PostgreSQL en los **primeros 10 minutos** post-despliegue, el pipeline de infraestructura abortará la operación de inmediato.

El clúster ejecutará un **Rollback automatizado hacia la última versión de software estable conocida en menos de 120 segundos**, restaurando punteros físicos y contenedores. La anomalía se registrará automáticamente en la bitácora técnica de criticidad alta, aislando los entornos para mantener las terminales fronterizas en producción continua.

# **PLAN DE PRUEBAS DE SOFTWARE**

## **1\. Alcance de las pruebas**

El plan contempla la verificación integral del sistema, asegurando el cumplimiento de las reglas del negocio, la seguridad de la información y la resiliencia técnica de la plataforma bajo criterios de aceptación medibles.

## **2\. Niveles de pruebas aplicados (Según estrategia)**

Alineado con su documento guía, las pruebas se estructuran en los siguientes niveles, detallando el objetivo, el responsable y el contexto de ejecución:

* **Pruebas unitarias**  
  * **Objetivo:** Validar de forma aislada la lógica interna de los métodos y funciones del sistema (por ejemplo, algoritmos matemáticos de ponderación) usando Mocks para dependencias externas.  
  * **Ejecutor:** Desarrollador.  
  * **Contexto:** Automatizado dentro del Pipeline de CI (en cada Commit).  
* **Pruebas de integración**  
  * **Objetivo:** Verificar que los diferentes módulos o servicios interactúen correctamente, validando contratos de API REST y protocolos de red entre el Frontend y el Backend.  
  * **Ejecutor:** Desarrollador / QA.  
  * **Contexto:** Entorno Local / Desarrollo.  
* **Pruebas de sistema**  
  * **Objetivo:** Evaluar el flujo completo del negocio "Caja Negra" simulando el entorno real del cliente, abarcando flujos End-to-End (E2E) desde la UI hasta la base de datos.  
  * **Ejecutor:** QA / Tester.  
  * **Contexto:** Entorno de Staging.  
* **Pruebas de aceptación (UAT)**  
  * **Objetivo:** Validación final del negocio y confirmación del cumplimiento de expectativas operativas.  
  * **Ejecutor:** Cliente Final / Usuarios designados.  
  * **Contexto:** Entorno Beta / Pre-Producción.

## **3\. Matriz de diseño de casos de prueba (Mapeo de requerimientos)**

Para garantizar la cobertura total, dividiremos el testing en **Pruebas funcionales** y **Pruebas no funcionales (Atributos de calidad)**.

1. **Pruebas funcionales** (Validando que el sistema haga lo que debe hacer)

| ID Prueba | Requerimiento relacionado | Escenario de prueba | Criterio de aceptación a verificar |
| :---: | :---: | :---: | :---: |
| **CP-F-0 1** | **RF-01** | Registro de indicadores mediante formulario digital. | Almacenamiento en BD en **\< 2 segundos** con confirmación visual. |
| **CP-F-0 2** | **RF-02** | Captura de variables (geolocalización, perfilamiento) e ingreso manual si falla escaneo QR/OCR. | Verificación de 5 variables principales y 8 de perfilamiento; inserción manual habilitada ante fallos. |
| **CP-F-0 3** | **RF-03** | Clasificación automática del nivel de riesgo. | El sistema asigna automáticamente nivel Bajo, Medio o Alto basado en las reglas predefinidas al guardar. |
| **CP-F-0 4** | **RF-04** | Envío automático de alertas institucionales. | Casos con riesgo Medio o Alto envían alertas a Policía/Fiscalía en **\< 5 segundos** con acuse de confirmación. |
| **CP-F-0 5** | **RF-05** | Gestión de accesos por roles diferenciados. | Validación y restricción estricta de permisos según rol (Agente, Supervisor, Institución, Admin). |

| CP-F-0 6 | RF-06 | Persistencia y almacenamiento de logs de auditoría. | Registro inalterable de cada acción efectuada en el sistema para resguardo (definido a 10 años). |
| :---: | :---: | :---: | :---: |
| **CP-F-0 7** | **RF-07** | Operación y sincronización en modo offline. | Registro de datos sin conexión a internet y sincronización automática al reconectarse, sin pérdida de información. |
| **CP-F-0 8** | **RF-08** | Seguimiento e historial por instituciones externas. | Actualización del estado del caso por Policía/Fiscalía reflejada en **\< 2 segundos** en el historial. |
| **CP-F-0 9** | **RF-09** | Adjuntar archivos de evidencia documental. | Carga exitosa de archivos (PDF, imágenes, video) de hasta **10MB** asociados correctamente al caso. |
| **CP-F-1 0** | **RF-10** | Generación de reportes e indicadores estadísticos. | Reportes consolidados exportables en formatos estándar (PDF/Excel). |
| **CP-F-11** | **RF-11** | Visualización de Dashboards en tiempo real. | Gráficos y mapas de calor analíticos actualizados de manera dinámica. |

| CP-F-1 2 | RF-12 | Reapertura justificada de casos cerrados. | Flujo de reapertura habilitado solo al ingresar obligatoriamente una justificación, guardada en auditoría. |
| :---: | :---: | :---: | :---: |

2. **Pruebas no funcionales** (Atributos de calidad y DevOps)  
   Estas pruebas se enfocan en cómo responde el sistema bajo presión, su infraestructura y sus mecanismos de defensa.

| ID Prueba | Tipo de NFR PPTX | Requerimiento relacionado | Escenario de prueba | Criterio de aceptación a verificar |
| :---: | :---: | :---: | :---: | :---: |
| **CP-N F-01** |  **Seguridad** | **RNF-01** | Validación de mecanismos de control de acceso. | Autenticación segura mediante OAuth2 o JWT; denegación de accesos sin token válido; forzado de uso de HTTPS. |
| **CP-N F-02** |  **Seguridad** | **RNF-02** | Protección contra inyecciones y fugas de información. | Cifrado estricto de datos sensibles (identidad, ubicación, estado) y restricción exclusiva a usuarios autorizados. |
| **CP-N F-03** |  **Rendimiento** | **RNF-03** | Pruebas de velocidad y estrés sobre grandes volúmenes de datos. | Consultas masivas (de hasta 10,000 registros) completadas en **\< 1 segundo**, optimizando CPU y memoria. |

| CP-N F-04 |  Mantenibilidad | RNF-04 | Revisión de arquitectura de software y código limpio. | Arquitectura modular que permita realizar modificaciones/actualizaciones sin afectar colateralmente otros módulos. |
| :---: | :---: | :---: | :---: | :---: |
| **CP-N F-05** |  **Soporte** | **RNF-05** | Auditoría de entregables de documentación. | Disponibilidad completa de manuales (usuario, técnico, plan de contingencia) y código fuente comentado. |
| **CP-N F-06** |  **Infraestructura** | **RNF-06** | Evaluación de disponibilidad en el entorno institucional. | Despliegue correcto en el Data Center de DIGEMIG manteniendo una tasa de disponibilidad mínima del **99%**. |

## **4\.  Criterios de aceptación y rechazo de las pruebas**

* **Criterio de aprobación:** Para proceder al cierre de una fase o ciclo de pruebas, el 100% de los casos de prueba con prioridad "Must" (Críticos) deben estar ejecutados con éxito. Los tiempos de respuesta de almacenamiento y consulta deben ceñirse estrictamente a los umbrales determinados (\< 1s para consultas, \< 2s para formularios).  
* **Criterio de rechazo (Bloqueo):** Cualquier fallo que comprometa el cifrado de datos sensibles (RNF-02), la autenticación segura (RNF-01), o la pérdida de datos en la sincronización offline (RF-07) detendrá inmediatamente el proceso de pruebas y bloqueará el pipeline de despliegue.

# **MANUAL DE MANTENIMIENTO DE SOFTWARE**

**Responsable de Recepción:** Equipo de Operaciones de TI / Administradores de Sistemas de la Institución

**Estado:** Documento Técnico Oficial de Transferencia

## **1\. Alcance y objetivos del mantenimiento**

### **1.1 Objetivos estratégicos**

El objetivo principal de este documento es transferir formalmente la estrategia operativa, las políticas de soporte técnico y los procedimientos de mantenimiento necesarios para garantizar la longevidad, disponibilidad y seguridad del Sistema DIGEMIG una vez entregado en su totalidad a las entidades encargadas.

Este plan busca:

* Minimizar los tiempos de inactividad en los puestos de control migratorio fronterizos.  
* Proteger la información altamente sensible de las víctimas y garantizar su estricta confidencialidad.  
* Definir la gobernanza del sistema para que el equipo técnico receptor pueda intervenir el software de forma segura y estandarizada.

### **1.2 Activos y elementos bajo mantenimiento**

El equipo técnico institucional asumirá la responsabilidad del ciclo de vida operativo de los siguientes componentes del sistema:

* **Estructura y Lógica de Negocio (Componentes de Software):** Módulos del backend en Java / Spring Boot (incluyendo el procesamiento por lotes) y la interfaz de usuario desarrollada en Angular.  
* **Base de Datos Relacional:** Estructuras, índices, restricciones de integridad y políticas de acceso granular dentro del motor PostgreSQL.  
* **Esquema de Integración e Interoperabilidad:** APIs REST expuestas a través de un componente centralizador (API Gateway / Facade) para la comunicación segura con la Policía y la Fiscalía.

## **2\. Gobernanza del Stack Tecnológico y Arquitectura**

Para intervenir el sistema sin introducir deuda técnica o corromper el diseño original, cualquier labor de mantenimiento evolutivo y adaptativo debe respetar estrictamente la **Arquitectura modular en capas** adoptada y sus patrones asociados.

### **2.1 Backend (Java / Spring Boot)**

* **Procesamiento masivo y diferido:** Las tareas pesadas o que requieren ejecución en segundo plano (como la validación de archivos masivos o la sincronización offline) están aisladas mediante **Spring Batch**. Cualquier cambio en estas rutinas debe realizarse modificando los *Jobs* y *Steps* configurados en este ecosistema.  
* **Estándar de documentación futura:** Debido a que el código fuente se encuentra en fase de consolidación final, el equipo técnico receptor y los desarrolladores que realicen mantenimiento adaptativo quedan obligados a implementar el estándar de **Código autodocumentado mediante Javadoc**. Cada nuevo método o componente modificado deberá incluir sus respectivos comentarios estructurales para garantizar la mantenibilidad inmediata del sistema.

### **2.2 Frontend (Angular)**

* **Gestión de estado complejo:** La interfaz web utiliza Angular Material para la UI y el ecosistema **RxJS / NgRx** para el manejo estructurado de estados.  
* **Formularios reactivos:** El registro de indicadores físicos, conductuales y variables del caso se basa en *Reactive Forms*. Al agregar o modificar un indicador, este debe registrarse obligatoriamente en el estado global de NgRx para asegurar que el flujo dinámico de la interfaz y las validaciones de negocio no se rompan.

### **2.3 Persistencia y Seguridad de datos (PostgreSQL)**

* **Estrategia relacional estricta:** Toda la información operativa se consolida en una base de datos PostgreSQL. Se rechaza el uso de bases de datos híbridas o NoSQL para mitigar la superficie de ataque y asegurar el cumplimiento normativo.  
* **Control granular:** Las labores de mantenimiento de base de datos deben priorizar el control de accesos a nivel de tablas y columnas para salvaguardar las identidades de las víctimas.

## **3\. Procedimientos Operativos por Tipos de Mantenimiento**

El mantenimiento del sistema se divide de acuerdo con la taxonomía técnica para facilitar la asignación de roles y responsabilidades en la entidad receptora.

### **3.1 Mantenimiento correctivo (Resolución de incidentes)**

Se enfoca en el diagnóstico y solución rápida de errores operativos reportados en producción. Las áreas críticas identificadas y sus Acuerdos de Nivel de Servicio (SLA) máximos son:

| ID de Error Relacionado | Componente Afectado | Impacto Operativo | SLA Máximo |
| :---: | :---: | :---: | :---: |
| **RF-07** | Motor de sincronización automática offline. | Los puestos fronterizos pierden la capacidad de encolar datos de forma diferida en baja conectividad. | 4 Horas (Bloqueante) |
| **RF-04** | Módulo de derivación automática e interoperabilidad. | Falla en el envío de alertas automáticas (menor a 5 segundos) hacia la Policía o Fiscalía. | 4 Horas (Bloqueante) |
| **RF-01** | Formulario de registro de indicadores. | Tiempos de respuesta superiores a 2 segundos o pérdida de la confirmación visual de guardado. | 8 Horas (Crítico) |

### **3.2  Mantenimiento preventivo (Monitoreo e Integridad)**

Tareas recurrentes para anticiparse a la degradación del sistema:

* **Monitoreo de rendimiento (RNF-03):** Inspeccionar periódicamente el uso de CPU, memoria y ancho de banda en el Data Center de DIGEMIG. Las consultas complejas que involucren hasta 10,000 registros deben optimizarse mediante índices si superan el tiempo límite de 1 segundo.  
* **Optimización en PostgreSQL:** Ejecutar rutinas mensuales de reindexación (REINDEX) y limpieza de espacio (VACUUM) en las tablas de casos e indicadores para prevenir la degradación de lecturas.  
* **Auditoría de almacenamiento (RF-06):** Supervisar el tamaño físico del búfer de logs. La normativa exige que estas trazas sean inalterables y almacenadas de forma segura durante un periodo de 10 años.

### **3.3 Mantenimiento adaptativo (Seguridad y Entorno)**

* **Gestión de credenciales (RNF-01 / RNF-02):** Renovación semestral de los certificados SSL/TLS para forzar canales HTTPS seguros. Actualizar y rotar periódicamente las claves de firma secreta para los tokens JWT / OAuth2 utilizados en la autenticación segura del sistema.

### **3.4 Mantenimiento evolutivo (Modificaciones sin rediseño)**

Gracias al uso de patrones de diseño específicos, el sistema puede evolucionar sin alterar su estructura base:

* **Modificación de reglas de riesgo (Patrón *Strategy*):** El cálculo automático de riesgo (Bajo, Medio, Alto) está aislado mediante el patrón *Strategy*. Si las normativas institucionales modifican el peso de los indicadores, el desarrollador solo debe crear una nueva clase de estrategia, inyectarla en el backend y seleccionarla dinámicamente, sin necesidad de un rediseño estructural completo.  
* **Ciclo de vida del caso (Patrón *State*):** Las transiciones de los estados del caso (Detectado, Derivado, En Seguimiento, Cerrado, Reabierto) están controladas por el patrón *State*. Cualquier flujo de negocio nuevo o restricción de paso debe programarse dentro de las clases de estado correspondientes para evitar estados inválidos.

## **4\. Interfaz De Devops, Respaldos y Contingencia (Rollback)**

Para garantizar la disponibilidad mínima del 99% exigida en el Data Center institucional (RNF-06), el mantenimiento operativo se rige bajo un flujo automatizado de Despliegue Continuo (CD) sin corte de servicio.

### **4.1  Protocolo de contingencia operativa ante actualizaciones**

Cuando el equipo técnico aplique un parche de mantenimiento correctivo o evolutivo, se debe seguir estrictamente el siguiente flujo de contingencia:

* **Paso 1: Transferencia de Paquete Validado:** El paquete de actualización (previamente aprobado en el entorno de desarrollo) se transfiere de manera automatizada a la infraestructura de producción.  
* **Paso 2: Ejecución de Pruebas de Humo (Smoke Tests) en Vivo:** Inmediatamente después del despliegue, el equipo de mantenimiento debe ejecutar de forma prioritaria las "Pruebas de Humo" para validar las funciones críticas del sistema (ej. verificar la conectividad con la base de datos PostgreSQL, la disponibilidad de las APIs de integración con Policía/Fiscalía y la carga del formulario de registro).  
* **Paso 3: Punto de Decisión Operativa:**  
  * **Ruta A (Éxito):** Si las Pruebas de Humo son exitosas, se consolida la versión en producción y se registra el cambio.  
  * **Ruta B (Fallo Crítico / Inestabilidad):** Si el sistema falla en alguna prueba de humo o degrada el tiempo de respuesta en los puestos fronterizos, se aborta el despliegue de inmediato.  
* **Paso 4: Rollback Inmediato:** Se ejecuta el plan de contingencia automatizado para revertir el sistema a la última versión estable conocida. El evento se registra de forma obligatoria en la auditoría técnica para su posterior análisis, asegurando que el servicio migratorio nunca se interrumpa.

### **4.2  Política estricta de respaldos (Backups)**

* **Frecuencia:** Se programan respaldos automáticos semanales de toda la base de datos PostgreSQL y del sistema de archivos donde residen las evidencias adjuntas (archivos de hasta 10MB como PDFs, imágenes o videos).

* **Aislamiento:** Las copias de seguridad deben almacenarse de forma cifrada en un almacenamiento seguro, físicamente independiente de los servidores de producción, garantizando su restauración funcional en caso de desastres operacionales.

## **5\.  Entregables, Informes y Filosofía de Actualización**

### **5.1  Filosofía del documento como ecosistema viviente**

En estricto cumplimiento de los principios de ingeniería de software establecidos en la *Guía Maestra*, este manual no debe considerarse un artefacto estático de finalización de proyecto, sino el **inicio de la longevidad del sistema**. El equipo técnico institucional encargado del mantenimiento tiene la obligación de actualizar este documento de forma inmediata cada vez que se realice una modificación en las estrategias de riesgo, estados del caso o políticas de seguridad.

### **5.2  Recomendación de centralización de la documentación**

Para evitar la obsolescencia y la pérdida del conocimiento técnico en archivos estáticos, se recomienda enfáticamente que este Manual de Mantenimiento se aloje y gestione dentro de una **plataforma de documentación centralizada institucional (Wiki interna o repositorio con soporte Markdown y control de versiones)**. Esto garantizará que todo el equipo de TI de DIGEMIG tenga acceso inmediato a la última versión operativa del documento.

### **5.3  Informes de operaciones obligatorios**

El equipo de mantenimiento generará y actualizará periódicamente los siguientes artefactos como evidencia de una gestión óptima:

1. **Bitácora de Incidentes y Mantenimiento Correctivo:** Registro histórico detallado que documente la fecha del fallo, componente afectado, solución técnica implementada y los tiempos de resolución obtenidos (SLA).  
2. **Reporte Semanal de Integridad de Respaldos:** Certificación automatizada que verifique el éxito de la creación de copias de seguridad y simulación periódica de restauración de los datos sensibles.  
3. **Documentación Técnica Actualizada:** Modificación obligatoria de este manual y de los comentarios Javadoc en el código fuente ante cualquier cambio estructural físico realizado en el software.  
4. **Informe Mensual de Métricas de Disponibilidad:** Reporte de rendimiento que demuestre de forma estadística el cumplimiento del uptime mínimo del 99% en la infraestructura institucional de DIGEMIG.

[image1]: <data:image/png;base64,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1FOLP/3pT0F7TG7rGnE57w+xz07QAiqkbw/8WqpiB4bUxZY91tZG7373u4t77723uPPOO4sTTjghaO/Xl7/85eJ3v/tdcdxxx5U/L1mypJz+5Cc/CeadSNfWNQaT8/4Q++wELaBC3/nOd4JaqmIHhtTFlj3WlrIzzjijePnll4vLLrus2GuvvYL2yTj88MPLP2cvWrQoaDN33HFHOT3qqKOCtom0dV1jOHLeH2KfnaAFVOiSSy4JaqmKHRhSF1v2WFvT3va2txXf/OY3iwcffLA47bTTgvZBXXrppcXIyEgxderUoG0YUl7XqJ/tD3ro2r/bbrut7HWqHql6qHeq3/tUD9VWrVpVvsYf168tYr8LBC2gQvPmzQtqqYodGFIXW/ZYW10+9KEPFf/zP/9T3HfffcXf/d3fBe1VOP/884s//OEPlfw5cbJSWNdIh+0PCkw2XIx+tiFjFKj8sfls6A+9xga3teFD2iT2u0DQAio0e/bsoJaq2IEhdbFlj7VVadttty3OPffc8nqn//iP/yh22GGHYJ6q7LvvvuU1Wtddd10xZcqUoL0pda1rtEMv+8N4Y/P54/y1TeyzE7SACh199NFBLVWxA0PqYssea5uMffbZp7jiiiuKF154obb/aX/2s58tx7j66Ec/GrSlpOp1jXbLeX+IfXaCFlChqi5irkPswJC62LLH2sbyzne+s/j5z39erFixojj22GOD9mE655xzimeeeabRP/8Not91jW7LeX+IfXaCFlCh1772tUEtVbEDQ+piyz5em66beuqpp8qLxQ866KCgfdg0XtXSpUuL//qv/wra2mq8dY085bw/xD47QQvIVOzAkLrYsj/22GPFr371q+Liiy8udt5556C9Lscff3x5sfphhx0WtHVFbDsgPznvD7HPTtACOmqi2wHFDgypu/vuu8t79W3YsKE477zztmpr6nPpT49tGketV7H9yF3X413k3BXqHaep3UTbb0dzv3spiH12ghbQMbpgWycDnSDVk0ddptV9WlP7WfPZgWHu3LnBe6TizW9+c3HRRReVA3n+0z/902h9ooOaX6uarqnSifczn/lM0NYF2l+0r2g6UdDSvqZ14QYt289sTCTbH7Vv2v5mHQva0tvMDVqxdZIz7Q+5WrZsWVBzEbSAjNgJQ7/8mjb5v/MDDzywvGZKQyScddZZQft4bNnH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>