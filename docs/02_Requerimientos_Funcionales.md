# 2. Requerimientos Funcionales

## Módulo de Autenticación

### RF-AUTH-01: Inicio de sesión
**Como** funcionario autorizado  
**Quiero** iniciar sesión con usuario y contraseña  
**Para** acceder al sistema de registro de casos  

**Criterios de Aceptación:**
- [ ] El sistema debe denegar el acceso tras 3 intentos fallidos
- [ ] El sistema debe enmascarar las contraseñas
- [ ] El sistema debe redireccionarse al panel principal

---

## Módulo de Gestión de Casos

### RF-02: Registro de posibles casos de trata de personas
**Como** operador del sistema
**Quiero** registrar un posible caso ingresando datos personales, lugar de detección y observaciones
**Para** que el caso quede formalmente documentado y pueda recibir seguimiento institucional.

**Criterios de Aceptación:**
- [ ] El sistema debe permitir ingresar datos personales de la víctima.
- [ ] El sistema debe guardar el caso en la base de datos.
- [ ] El sistema debe generar automáticamente un identificador único para cada caso.

---

### RF-03: Derivación de casos a otras instituciones
**Como** operador o administrador
**Quiero** derivar un caso a otra institución mediante un módulo de derivación o servicios web
**Para** que la institución correspondiente pueda continuar con la atención del caso.

**Criterios de Aceptación:**
- [ ] El sistema debe permitir almacenar y seleccionar una institución receptora
- [ ] El sistema debe registrar la fecha y hora de la derivación.

---

### RF-04: Seguimiento del estado del caso
**Como** usuario autorizado
**Quiero** consultar el estado actual de un caso y su historial de cambios
**Para** poder realizar seguimiento adecuado y asegurar su correcta gestión.

**Criterios de Aceptación:**
- [ ] El sistema debe permitir visualizar el estado actual del caso (Registrado, Derivado, En atención, Cerrado).
- [ ] El sistema debe mostrar el historial completo de cambios del caso.

---

## Módulo de Reportes e Indicadores

### RF-05: Generación de reportes e indicadores estadísticos
**Como** administrador o analista
**Quiero** generar reportes e indicadores estadísticos sobre los casos registrados
**Para** analizar tendencias y apoyar la toma de decisiones institucionales.

**Criterios de Aceptación:**
- [ ] El sistema debe permitir filtrar reportes por rango de fechas y estado del caso.
- [ ] El sistema debe permitir exportar los reportes en formato PDF o Excel.