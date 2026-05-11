# Documento de Arquitectura de Software - Sistema DIGEMIG

Este documento describe la arquitectura técnica del **Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas**. Se fundamenta en una estructura modular diseñada para garantizar escalabilidad, seguridad y alta disponibilidad.

---

## 1. Visión General de la Arquitectura
El sistema adopta una **Arquitectura de N-Capas desacoplada**, lo que facilita el mantenimiento y la evolución independiente de la interfaz de usuario y la lógica de negocio.

### 1.1 Capa de Presentación (Frontend)
* **Tecnología:** Angular SPA (Single Page Application)[cite: 7].
* **Responsabilidades:**
    * Interacción con el usuario y validaciones reactivas en el cliente[cite: 8].
    * Gestión de estado local mediante **RxJS**[cite: 8].
    * Soporte para **operación offline** mediante persistencia en el navegador con **IndexedDB**[cite: 8].
* **Comunicación:** Consumo de servicios RESTful mediante HTTPS y tokens JWT[cite: 10].

### 1.2 Capa de Negocio (Backend)
* **Tecnología:** Java 17+ con Spring Boot 3.
* **Responsabilidades:** Orquestación de procesos, ejecución del Motor de Riesgo, control de acceso y gestión del ciclo de vida de los casos.
* **Módulos Principales:**
    * **Auth Service:** Gestión de seguridad y emisión de tokens[cite: 16].
    * **Case Engine:** Lógica de registro y estados[cite: 17].
    * **Risk Manager:** Cálculo de indicadores de riesgo[cite: 18].
    * **Sync Manager:** Sincronización de datos diferidos desde zonas de frontera[cite: 19].

### 1.3 Capa de Persistencia e Integración
* **Base de Datos:** **PostgreSQL** (Relacional) para asegurar la integridad de los datos y facilitar la auditoría[cite: 21].
* **Almacenamiento de Objetos:** Sistema de archivos institucional o S3 para evidencias como documentos e imágenes[cite: 23].
* **Integración Externa:** Servicios REST para la interoperabilidad con la Policía y la Fiscalía[cite: 24].

---

## 2. Patrones de Diseño Aplicados

| Patrón | Aplicación en el Sistema |
| :--- | :--- |
| **Strategy** | **Motor de Riesgo:** Permite intercambiar algoritmos de evaluación según indicadores físicos, conductuales o documentales sin alterar el flujo principal. |
| **State** | **Ciclo de Vida del Caso:** Controla las transiciones de estado (ej. de "Cerrado" a "En Seguimiento"), exigiendo justificaciones y roles específicos. |
| **Repository** | **Acceso a Datos:** Aísla la lógica de negocio de la base de datos, facilitando pruebas unitarias y la escalabilidad de PostgreSQL. |
| **Facade / Gateway** | **Interoperabilidad:** Centraliza llamadas a sistemas externos (Fiscalía), protegiendo al sistema de cambios en contratos de APIs externas. |

---

## 3. Seguridad y Auditoría
* **Autenticación:** Sistema *Stateless* basado en **JWT**. Las credenciales nunca se almacenan en el cliente.
* **Autorización:** Control de Acceso Basado en Roles (**RBAC**), validado tanto en el Frontend como en cada endpoint del Backend.
* **Trazabilidad:** Interceptor global que registra: `UsuarioID`, `Acción`, `Timestamp`, `IP` y `Datos Afectados`.
* **Logs:** Los registros de auditoría son inalterables y se almacenan en tablas separadas.

---

## 4. Estrategia Offline First (Baja Conectividad)
Diseñado específicamente para puestos fronterizos con conectividad inestable:

1.  **Almacenamiento Local:** Los formularios se guardan en **IndexedDB** o LocalStorage si se pierde la señal.
2.  **Sincronización:** Un proceso de fondo en Angular detecta la recuperación de red y envía los datos al **Sync Manager**.
3.  **Resolución de Conflictos:** Uso de **Timestamps** en el backend para evitar que datos locales antiguos sobrescriban actualizaciones recientes en el servidor.

---
> **Estado del Sistema:** Confiable, auditable y operativo en condiciones críticas de frontera.