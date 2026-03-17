#  Historias de Usuario
## Sistema de Registro, Derivación y Seguimiento de Trata de Personas (DIGEMIG)

Basado en el documento de especificaciones del sistema.

---

#  1. Módulo: Registro y Evaluación de Casos

##  HU-01: Registro de indicadores
**Como** agente migratorio  
**Quiero** registrar indicadores físicos, conductuales y documentales  
**Para** detectar posibles casos de trata de personas  

**Criterios de aceptación:**
- Se pueden marcar indicadores desde un formulario digital  
- Los datos se guardan correctamente en la base de datos  
- Se permite edición antes de enviar  

---

##  HU-02: Registro de variables del caso
**Como** agente  
**Quiero** registrar variables del caso (geolocalización, perfil, etc.)  
**Para** enriquecer la evaluación del posible caso  

**Criterios de aceptación:**
- Se registran al menos 5 variables principales y 8 de perfilamiento  
- Se puede capturar ubicación automáticamente  
- Se permite escaneo QR/OCR  

---

##  HU-03: Clasificación automática de riesgo
**Como** sistema  
**Quiero** calcular automáticamente el nivel de riesgo  
**Para** apoyar la toma de decisiones del agente  

**Criterios de aceptación:**
- Clasifica en Bajo / Medio / Alto  
- Se basa en reglas definidas  
- Se ejecuta automáticamente al guardar  

---

#  2. Módulo: Derivación y Alertas

##  HU-04: Derivación automática
**Como** sistema  
**Quiero** enviar automáticamente casos de riesgo medio o alto  
**Para** alertar a Policía y Fiscalía  

**Criterios de aceptación:**
- Se envía notificación automática  
- Se generan formularios electrónicos  
- Solo aplica para riesgo medio/alto  

---

#  3. Módulo: Gestión de Usuarios

##  HU-05: Gestión de roles
**Como** administrador  
**Quiero** asignar roles a los usuarios  
**Para** controlar accesos al sistema  

**Criterios de aceptación:**
- Roles: Agente, Supervisor, Institución Receptora, Admin TI  
- Permisos diferenciados  
- Acceso seguro  

---

#  4. Módulo: Auditoría y Seguridad

##  HU-06: Registro de auditoría
**Como** sistema  
**Quiero** registrar todas las acciones de los usuarios  
**Para** garantizar trazabilidad y transparencia  

**Criterios de aceptación:**
- Logs inalterables  
- Almacenamiento por 10 años  
- Registro de sesiones y cambios  

---

#  5. Módulo: Operación Offline

##  HU-07: Registro sin conexión
**Como** agente en zona sin internet  
**Quiero** registrar casos sin conexión  
**Para** no perder información en campo  

**Criterios de aceptación:**
- Permite trabajar offline  
- Sincroniza cuando hay conexión  
- No se pierden datos  

---

#  6. Módulo: Seguimiento del Caso

##  HU-08: Seguimiento interinstitucional
**Como** Policía/Fiscalía  
**Quiero** actualizar el estado del caso  
**Para** mantener seguimiento del proceso  

**Criterios de aceptación:**
- Estados como “Judicializado”  
- Acceso por instituciones externas  
- Historial de cambios  

---

##  HU-09: Gestión de evidencias
**Como** agente  
**Quiero** adjuntar documentos y evidencias  
**Para** respaldar el caso  

**Criterios de aceptación:**
- Subida de archivos (PDF, imágenes, video)  
- Asociación al caso  
- Visualización posterior  

---

#  7. Módulo: Análisis y Políticas

##  HU-10: Generación de indicadores
**Como** analista  
**Quiero** generar estadísticas  
**Para** apoyar políticas migratorias  

**Criterios de aceptación:**
- Reportes automáticos  
- Datos agregados  
- Exportación de resultados  

---

##  HU-11: Dashboard analítico
**Como** supervisor  
**Quiero** ver dashboards en tiempo real  
**Para** analizar tendencias  

**Criterios de aceptación:**
- Mapas de calor  
- Gráficos dinámicos  
- Datos actualizados  

---

#  8. Módulo: Gestión de Casos

##  HU-12: Reapertura de casos
**Como** supervisor  
**Quiero** reabrir casos cerrados  
**Para** continuar investigaciones  

**Criterios de aceptación:**
- Se requiere justificación  
- Se registra en auditoría  
- Mantiene historial  

---

#  9. Requerimientos No Funcionales

##  HU-13: Seguridad
**Como** sistema  
**Quiero** autenticar usuarios con OAuth2 o JWT  
**Para** proteger el acceso al sistema  

---

##  HU-14: Privacidad
**Como** sistema  
**Quiero** proteger datos sensibles  
**Para** cumplir con normativas de protección de datos  

---

##  HU-15: Rendimiento
**Como** usuario  
**Quiero** que las consultas respondan en menos de 1 segundo  
**Para** trabajar de forma eficiente  

---

#  Priorización (MoSCoW)

- **Must:** HU-01, HU-02, HU-03, HU-04, HU-05, HU-06, HU-07  
- **Should:** HU-08, HU-09, HU-10  
- **Could:** HU-11, HU-12  

---