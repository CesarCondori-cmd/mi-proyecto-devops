# 2. Listado de Requerimientos Funcionales (RF)

**Prioridad: MoSCoW (Must = Debe tener, Should = Debería, Could = Podría, Won’t = No tendrá)**


| ID    | Descripción del Requerimiento | Prioridad | Criterio de Aceptación |
|-------|------------------------------|----------|------------------------|
| RF-01 | El sistema debe permitir identificar y registrar indicadores físicos, conductuales y documentales según la guía de detección. | Must | El agente registra indicadores mediante un formulario y los datos se almacenan en la base de datos en menos de 2 segundos con confirmación visual. |
| RF-02 | El sistema debe permitir registrar variables del caso como geolocalización, perfilamiento y escaneo QR/OCR. | Must | Se registran al menos 5 variables principales y 8 de perfilamiento, incluyendo ubicación automática; si falla el escaneo, permite ingreso manual. |
| RF-03 | El sistema debe clasificar automáticamente el nivel de riesgo del caso. | Must | El sistema asigna niveles Bajo, Medio o Alto automáticamente en base a reglas definidas al guardar el caso. |
| RF-04 | El sistema debe enviar automáticamente casos de riesgo medio o alto a instituciones correspondientes. | Must | Las alertas se envían en menos de 5 segundos a Policía/Fiscalía y se registra confirmación de envío. |
| RF-05 | El sistema debe gestionar usuarios con roles diferenciados. | Must | El sistema valida permisos por rol (Agente, Supervisor, Institución, Admin) y restringe accesos no autorizados en cada operación. |
| RF-06 | El sistema debe registrar todas las acciones en logs de auditoría. | Must | Todas las acciones se registran de forma inalterable y se almacenan durante 10 años. |
| RF-07 | El sistema debe funcionar en modo offline. | Must | El agente puede registrar información sin conexión y el sistema sincroniza automáticamente al reconectarse sin pérdida de datos. |
| RF-08 | El sistema debe permitir el seguimiento del caso por instituciones externas. | Should | Policía/Fiscalía actualizan estados del caso y los cambios se reflejan en menos de 2 segundos con historial registrado. |
| RF-09 | El sistema debe permitir adjuntar evidencias al caso. | Should | El usuario puede subir archivos (PDF, imágenes, video) de hasta 10MB por archivo, asociados correctamente al caso. |
| RF-10 | El sistema debe generar indicadores estadísticos para análisis institucional. | Should | El sistema genera reportes con datos agregados exportables en formatos estándar (PDF/Excel). |
| RF-11 | El sistema debe mostrar dashboards analíticos en tiempo real. | Could | Se visualizan gráficos y mapas de calor actualizados dinámicamente con datos en tiempo real. |
| RF-12 | El sistema debe permitir la reapertura de casos cerrados. | Could | El usuario puede reabrir casos con justificación obligatoria registrada en auditoría. |