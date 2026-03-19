# 3. Listado de Requerimientos No Funcionales (RNF)

| ID     | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|--------|------------------------------|----------|------------------------|
| RNF-01 | El sistema debe garantizar autenticación segura mediante OAuth2 o JWT. | Must | El acceso requiere autenticación válida y todas las comunicaciones utilizan HTTPS. |
| RNF-02 | El sistema debe proteger los datos sensibles de los usuarios. | Must | Los datos sensibles (identidad, ubicación y estado del caso) están cifrados y solo accesibles por usuarios autorizados. |
| RNF-03 | El sistema debe responder consultas en menos de 1 segundo. | Should | Las consultas con hasta 10,000 registros se ejecutan en menos de 1 segundo, optimizando uso de CPU, memoria y ancho de banda. |
| RNF-04 | El sistema debe ser mantenible. | Must | El sistema utiliza código limpio, arquitectura modular y escalable, facilitando modificaciones sin afectar otros módulos. |
| RNF-05 | El sistema debe contar con documentación técnica completa. | Must | Se dispone de manual de usuario, manual técnico, plan de contingencia y documentación en el código fuente. |
| RNF-06 | El sistema debe desplegarse en infraestructura institucional. | Must | El sistema se ejecuta en el Data Center de DIGEMIG con disponibilidad mínima del 99%. |