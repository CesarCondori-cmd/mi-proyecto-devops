# Documento de Arquitectura de Software - Sistema DIGEMIG

[cite_start]Este documento describe la arquitectura técnica del **Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas**[cite: 1, 2]. [cite_start]Se fundamenta en una estructura modular diseñada para garantizar escalabilidad, seguridad y alta disponibilidad[cite: 3].

---

## 1. Visión General de la Arquitectura
[cite_start]El sistema adopta una **Arquitectura de N-Capas desacoplada**, lo que facilita el mantenimiento y la evolución independiente de la interfaz de usuario y la lógica de negocio[cite: 4, 5].

### 1.1 Capa de Presentación (Frontend)
* [cite_start]**Tecnología:** Angular SPA (Single Page Application)[cite: 7].
* **Responsabilidades:**
    * [cite_start]Interacción con el usuario y validaciones reactivas en el cliente[cite: 8].
    * [cite_start]Gestión de estado local mediante **RxJS**[cite: 8].
    * [cite_start]Soporte para **operación offline** mediante persistencia en el navegador con **IndexedDB**[cite: 8].
* [cite_start]**Comunicación:** Consumo de servicios RESTful mediante HTTPS y tokens JWT[cite: 10].

### 1.2 Capa de Negocio (Backend)
* [cite_start]**Tecnología:** Java 17+ con Spring Boot 3.x[cite: 12].
* [cite_start]**Responsabilidades:** Orquestación de procesos, ejecución del Motor de Riesgo, control de acceso y gestión del ciclo de vida de los casos[cite: 13, 14].
* **Módulos Principales:**
    * [cite_start]**Auth Service:** Gestión de seguridad y emisión de tokens[cite: 16].
    * [cite_start]**Case Engine:** Lógica de registro y estados[cite: 17].
    * [cite_start]**Risk Manager:** Cálculo de indicadores de riesgo[cite: 18].
    * [cite_start]**Sync Manager:** Sincronización de datos diferidos desde zonas de frontera[cite: 19].

### 1.3 Capa de Persistencia e Integración
* [cite_start]**Base de Datos:** **PostgreSQL** (Relacional) para asegurar la integridad de los datos y facilitar la auditoría[cite: 21].
* [cite_start]**Almacenamiento de Objetos:** Sistema de archivos institucional o S3 para evidencias como documentos e imágenes[cite: 23].
* [cite_start]**Integración Externa:** Servicios REST para la interoperabilidad con la Policía y la Fiscalía[cite: 24].

---

## 2. Patrones de Diseño Aplicados

| Patrón | Aplicación en el Sistema |
| :--- | :--- |
| **Strategy** | [cite_start]**Motor de Riesgo:** Permite intercambiar algoritmos de evaluación según indicadores físicos, conductuales o documentales sin alterar el flujo principal[cite: 50, 51, 52]. |
| **State** | [cite_start]**Ciclo de Vida del Caso:** Controla las transiciones de estado (ej. de "Cerrado" a "En Seguimiento"), exigiendo justificaciones y roles específicos[cite: 53, 54, 55]. |
| **Repository** | [cite_start]**Acceso a Datos:** Aísla la lógica de negocio de la base de datos, facilitando pruebas unitarias y la escalabilidad de PostgreSQL[cite: 56, 57, 58]. |
| **Facade / Gateway** | [cite_start]**Interoperabilidad:** Centraliza llamadas a sistemas externos (Fiscalía), protegiendo al sistema de cambios en contratos de APIs externas[cite: 59, 60]. |

---

## 3. Seguridad y Auditoría
* **Autenticación:** Sistema *Stateless* basado en **JWT**. [cite_start]Las credenciales nunca se almacenan en el cliente[cite: 63].
* [cite_start]**Autorización:** Control de Acceso Basado en Roles (**RBAC**), validado tanto en el Frontend como en cada endpoint del Backend[cite: 64].
* [cite_start]**Trazabilidad:** Interceptor global que registra: `UsuarioID`, `Acción`, `Timestamp`, `IP` y `Datos Afectados`[cite: 65].
* [cite_start]**Logs:** Los registros de auditoría son inalterables y se almacenan en tablas separadas[cite: 66].

---

## 4. Estrategia Offline First (Baja Conectividad)
[cite_start]Diseñado específicamente para puestos fronterizos con conectividad inestable[cite: 68]:

1.  [cite_start]**Almacenamiento Local:** Los formularios se guardan en **IndexedDB** o LocalStorage si se pierde la señal[cite: 69].
2.  [cite_start]**Sincronización:** Un proceso de fondo en Angular detecta la recuperación de red y envía los datos al **Sync Manager**[cite: 70].
3.  [cite_start]**Resolución de Conflictos:** Uso de **Timestamps** en el backend para evitar que datos locales antiguos sobrescriban actualizaciones recientes en el servidor[cite: 71].

---
> [cite_start]**Estado del Sistema:** Confiable, auditable y operativo en condiciones críticas de frontera[cite: 72].