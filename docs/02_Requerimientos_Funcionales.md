# 2. Requerimientos Funcionales

## Módulo de Autenticación

### RF-AUTH-01: Inicio de sesión
**Como** funcionario autorizado  
**Quiero** iniciar sesión con usuario y contraseña  
**Para** acceder al sistema de registro de casos  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Bloqueo tras 3 intentos fallidos
- [ ] Contraseña enmascarada
- [ ] Redirección al panel principal

---

### RF-AUTH-02: Gestión de usuarios
**Como** administrador  
**Quiero** crear y gestionar usuarios  
**Para** controlar accesos al sistema  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Crear, editar y desactivar usuarios
- [ ] Asignar roles
- [ ] Registrar auditoría

---

## Módulo Registro de Casos

### RF-CASO-01: Registrar posible víctima
**Como** funcionario migratorio  
**Quiero** registrar datos del caso  
**Para** iniciar seguimiento  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Genera ID único
- [ ] Guarda datos personales y contexto
- [ ] Estado inicial “Registrado”

---

### RF-CASO-02: Adjuntar evidencia
**Como** funcionario  
**Quiero** subir documentos o fotos  
**Para** respaldar el caso  

**Prioridad:** Should  

**Criterios de Aceptación:**
- [ ] Permite PDF e imágenes
- [ ] Archivos asociados al caso

---

## Módulo Derivación

### RF-DER-01: Derivar caso
**Como** funcionario  
**Quiero** derivar el caso a otra institución  
**Para** activar atención especializada  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Selección de institución
- [ ] Registro de fecha
- [ ] Cambio de estado a “Derivado”

---

## Módulo Seguimiento

### RF-SEG-01: Actualizar estado
**Como** operador  
**Quiero** actualizar el estado del caso  
**Para** mantener trazabilidad  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Historial de cambios
- [ ] Registro de usuario y fecha

---

### RF-SEG-02: Consultar historial
**Como** institución  
**Quiero** ver el historial del caso  
**Para** conocer su evolución  

**Prioridad:** Must  

**Criterios de Aceptación:**
- [ ] Visualizar eventos
- [ ] Orden cronológico

---

## Módulo Reportes

### RF-REP-01: Generar reportes
**Como** administrador  
**Quiero** generar reportes estadísticos  
**Para** apoyar decisiones  

**Prioridad:** Should  

**Criterios de Aceptación:**
- [ ] Filtros por fecha y ubicación
- [ ] Exportación PDF/Excel

---

## Exclusiones (Won’t have)

- Aplicación móvil nativa en primera versión
- Inteligencia artificial predictiva
- Registro público de denuncias