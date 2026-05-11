# Documento Técnico de Arquitectura y Stack Tecnológico - Sistema DIGEMIG

Este documento detalla la arquitectura técnica y el stack tecnológico seleccionado para el **Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas**. El diseño se fundamenta en la escalabilidad, la seguridad institucional y la sostenibilidad a largo plazo.

---

## 1. Arquitectura del Sistema
El sistema adopta una **Arquitectura de N-Capas desacoplada**, facilitando el mantenimiento y la evolución independiente de cada componente.

### 1.1 Capa de Presentación (Frontend)
* **Tecnología:** Angular SPA (Single Page Application)[cite: 7, 96].
* **Responsabilidad:** Gestión de la interacción del usuario, validaciones reactivas y soporte para operación **offline** mediante **IndexedDB**.
* [cite_start]**Comunicación:** Consumo de servicios RESTful mediante HTTPS y tokens JWT[cite: 10].

### 1.2 Capa de Negocio (Backend)
* [cite_start]**Tecnología:** Java 17+ con Spring Boot 3.x[cite: 12, 77, 78].
* [cite_start]**Responsabilidad:** Orquestación de procesos, ejecución del Motor de Riesgo y gestión del ciclo de vida de los casos[cite: 13, 14, 75].

### 1.3 Capa de Persistencia e Integración
* [cite_start]**Base de Datos:** PostgreSQL (Relacional) para asegurar la integridad de datos y auditoría estricta[cite: 21, 112].
* [cite_start]**Integración:** Servicios REST para interoperabilidad con sistemas externos como Policía, Fiscalía, SAP y sistemas Oracle[cite: 24, 143, 146, 147].

---

## 2. Stack Tecnológico Detallado

### 2.1 Backend (Núcleo Pro-Empresarial)
[cite_start]Se selecciona un enfoque robusto para manejar procesos largos y cumplir con estándares gubernamentales[cite: 84, 86, 92].

* [cite_start]**Lenguaje/Framework:** Java con Spring Boot[cite: 77, 78].
* [cite_start]**Seguridad:** JWT / OAuth2 para un sistema *stateless*[cite: 63, 79].
* [cite_start]**Persistencia:** JPA / Hibernate[cite: 81].
* [cite_start]**Procesamiento:** Spring Batch para tareas de sincronización y validación masiva[cite: 82].
* [cite_start]**Reportes:** Soporte para JasperReports e iText para la generación de PDFs[cite: 87].

### 2.2 Frontend (Interfaz Avanzada)
[cite_start]Se opta por Angular para manejar formularios dinámicos complejos y estados avanzados[cite: 94, 100, 101].

* [cite_start]**Framework:** Angular[cite: 96].
* [cite_start]**Gestión de Estado:** RxJS / NgRx para flujos de datos asíncronos[cite: 97, 137].
* [cite_start]**Interfaz de Usuario (UI):** Angular Material para una experiencia de usuario estandarizada[cite: 98, 127].

### 2.3 Persistencia de Datos
* [cite_start]**Motor:** PostgreSQL[cite: 112].
* [cite_start]**Justificación:** Proporciona control granular de accesos a nivel de tablas/columnas y cumple con normativas institucionales de integridad[cite: 115, 117, 118].
* [cite_start]**Archivos:** Almacenamiento de evidencias en File System institucional o S3[cite: 23, 133].

---

## 3. Patrones de Diseño Aplicados

| Patrón | Aplicación | Beneficio |
| :--- | :--- | :--- |
| **Strategy** | [cite_start]Motor de Riesgo [cite: 50] | [cite_start]Intercambio de algoritmos de evaluación sin afectar el registro[cite: 51]. |
| **State** | [cite_start]Ciclo de Vida del Caso [cite: 53] | [cite_start]Control rígido de transiciones y estados de los casos[cite: 54]. |
| **Repository** | [cite_start]Acceso a Datos [cite: 56] | [cite_start]Aislamiento de la lógica de negocio de la base de datos[cite: 57]. |
| **Facade** | [cite_start]Interoperabilidad [cite: 59] | [cite_start]Centralización de llamadas a sistemas externos (Fiscalía/Policía)[cite: 60]. |

---

## 4. Seguridad y Auditoría
* [cite_start]**Autenticación:** Sistema basado en JWT; las credenciales no se almacenan en el cliente[cite: 63].
* [cite_start]**Autorización:** Control de Acceso Basado en Roles (**RBAC**) validado en Frontend y Backend[cite: 64].
* [cite_start]**Trazabilidad:** Interceptor global que registra UsuarioID, Acción, Timestamp, IP y datos afectados en tablas de auditoría inalterables[cite: 65, 66].

---

## 5. Estrategia Offline First
[cite_start]Diseñado para la operación en puestos fronterizos con baja conectividad[cite: 67, 68]:
1.  [cite_start]**Persistencia Local:** Uso de LocalStorage/IndexedDB para guardado temporal de formularios[cite: 69].
2.  [cite_start]**Sincronización:** El **Sync Manager** del backend procesa datos diferidos una vez recuperada la red[cite: 19, 70].
3.  [cite_start]**Conflictos:** Resolución mediante marcas de tiempo (Timestamps) para preservar la versión más reciente[cite: 71].

---
> [cite_start]**Conclusión:** El stack tecnológico combina robustez empresarial con estructuras modernas, garantizando la seguridad y sostenibilidad del sistema DIGEMIG[cite: 148, 149].