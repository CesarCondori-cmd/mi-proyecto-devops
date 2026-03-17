# 3. Listado de Requerimientos No Funcionales (RNF)

| ID     | Descripción del Requerimiento | Prioridad (MoSCoW) | Criterio de Aceptación |
|--------|------------------------------|--------------------|------------------------|
| RNF-01 | El sistema debe garantizar autenticación segura mediante OAuth2 o JWT. | Must | El acceso requiere autenticación válida y las comunicaciones usan HTTPS. |
| RNF-02 | El sistema debe proteger los datos sensibles de los usuarios. | Must | Los datos están protegidos y solo accesibles por usuarios autorizados. |
| RNF-03 | El sistema debe responder consultas en menos de 1 segundo. | Should | Las búsquedas con hasta 10,000 registros se ejecutan en menos de 1 segundo. |
| RNF-04 | El sistema debe ser mantenible y contar con documentación técnica. | Must | Se entrega código fuente y documentación en formatos editables. |

---