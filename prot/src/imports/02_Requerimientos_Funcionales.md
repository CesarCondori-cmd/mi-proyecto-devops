# 2. Listado de Requerimientos Funcionales (RF)

**Prioridad: MoSCoW (Must = Debe tener, Should = Debería, Could = Podría, Won’t = No tendrá)**

| ID    | Descripción del Requerimiento | Prioridad (MoSCoW) | Criterio de Aceptación |
|-------|------------------------------|--------------------|------------------------|
| RF-01 | El sistema debe permitir registrar indicadores físicos, conductuales y documentales según la guía de detección. | Must | El agente registra indicadores mediante un formulario y los datos se almacenan correctamente en el sistema. |
| RF-02 | El sistema debe permitir registrar variables del caso como geolocalización, perfilamiento y escaneo QR/OCR. | Must | Se registran al menos 5 variables principales y 8 de perfilamiento incluyendo ubicación automática. |
| RF-03 | El sistema debe clasificar automáticamente el nivel de riesgo del caso. | Must | El sistema asigna niveles Bajo, Medio o Alto en base a los indicadores registrados. |
| RF-04 | El sistema debe enviar automáticamente casos de riesgo medio o alto a instituciones correspondientes. | Must | Se generan alertas y formularios enviados a Policía/Fiscalía cuando el riesgo es medio o alto. |
| RF-05 | El sistema debe gestionar usuarios con roles diferenciados. | Must | Cada usuario accede al sistema según su rol con permisos definidos (Agente, Supervisor, Institución, Admin). |
| RF-06 | El sistema debe registrar todas las acciones en logs de auditoría. | Must | Se registran acciones de usuarios y se almacenan de forma inalterable durante 10 años. |
| RF-07 | El sistema debe funcionar en modo offline. | Must | El agente puede registrar información sin conexión y el sistema sincroniza automáticamente al reconectarse. |
| RF-08 | El sistema debe permitir el seguimiento del caso por instituciones externas. | Should | Policía/Fiscalía actualizan estados del caso y se guarda historial de cambios. |
| RF-09 | El sistema debe permitir adjuntar evidencias al caso. | Should | El usuario puede subir archivos (PDF, imágenes, video) asociados al caso. |
| RF-10 | El sistema debe generar indicadores estadísticos para análisis institucional. | Should | El sistema genera reportes con datos agregados para apoyar la toma de decisiones. |
| RF-11 | El sistema debe mostrar dashboards analíticos en tiempo real. | Could | Se visualizan gráficos y mapas de calor actualizados dinámicamente. |
| RF-12 | El sistema debe permitir la reapertura de casos cerrados. | Could | El usuario puede reabrir casos con justificación registrada en auditoría. |

---