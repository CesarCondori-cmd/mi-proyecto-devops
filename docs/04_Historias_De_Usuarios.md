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