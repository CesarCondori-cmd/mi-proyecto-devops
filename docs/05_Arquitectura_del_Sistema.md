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