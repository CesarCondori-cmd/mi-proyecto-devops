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
