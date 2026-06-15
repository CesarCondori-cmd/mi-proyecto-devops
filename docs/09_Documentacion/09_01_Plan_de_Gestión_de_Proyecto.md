### **SISTEMA DE INFORMACIÓN PARA EL REGISTRO, DERIVACIÓN Y SEGUIMIENTO DE CASOS DE TRATA DE PERSONAS DE LA DIRECCIÓN GENERAL DE MIGRACIÓN (DIGEMIG)**
##

**Materia:** Gerencia de Proyectos Informáticos

**Docente:** Ing. Ivo Alberto Alabe Perales

**MIEMBROS DEL EQUIPO DE PROYECTO:**

1. **Cesar Daniel Condori Malpartida** – Líder de Proyecto / Consultor Principal (Lead Frontend)  
2. **Isaac Eleazar Surci** **Cuti** – Consultor Especialista en Negocio Migratorio / Enlace Institucional DIGEMIG  
3. **Luis Alberto Chura Zegarra** – Líder de Calidad (QA) / Desarrollador Backend  
4. **Jazmin Cielo Canaviri** **Mamani** – Desarrollador Backend / Soporte de Lógica de Negocio  
5. **Francia Cristal Rengel Quisbert** – Consultora de Implementación / Gestión de Documentación y Capacitación

**FECHA DE PRESENTACIÓN:** 15 de junio de 2026

**COCHABAMBA \- BOLIVIA**

## **ÍNDICE GENERAL**

1. **PARADIGMA Y FILOSOFÍA DE EJECUCIÓN**  
   * 1.1. Paradigma Híbrido Estructurado (Predictivo \- Adaptativo / XP)  
   * 1.2. Filosofía de Ejecución Basada en Valores de XP  
2. **ACTA DE CONSTITUCIÓN DEL PROYECTO (PROJECT CHARTER)**  
   * 2.1. Información General  
   * 2.2. Designación del Equipo y Roles   
3. **GESTIÓN DEL ALCANCE Y TAMAÑO DEL SOFTWARE**  
   * 3.1. Inclusiones y Exclusiones del Proyecto  
   * 3.2. Estimación del Tamaño del Software (Puntos de Función)  
   * 3.3. Gobernanza y Valor Esperado (KPIs)  
   * 3.4. Estructura de Desglose del Trabajo (EDT / WBS)  
   * 3.5. Diccionario de la EDT (Resumen de Paquetes Críticos)  
   * 3.6. Control, Validación y Aceptación Formal del Alcance (DoD)  
4. **GESTIÓN DEL TIEMPO Y CRONOGRAMA**  
   * 4.1. Hitos de Control y Entregables (Línea Base del Cronograma)  
   * 4.2. Gestión de Buffers  
   * 4.3. Ruta Crítica del Sistema  
   * 4.4. Técnicas de Control (EVM \- Earned Value Management)  
   * 4.5. Calendario de Recursos  
5. **GESTIÓN FINANCIERA Y PRESUPUESTO**  
   * 5.1. Estructura Presupuestaria Detallada  
   * 5.2. Línea Base de Costos (BAC) y Reservas de Seguridad  
   * 5.3. Plan de Pagos Vinculado a Entregables  
6. **PLAN DE COMUNICACIÓN E INTERESADOS**  
   * 6.1. Objetivos de la Comunicación  
   * 6.2. Matriz de Comunicación del Proyecto  
   * 6.3. Gestión de Interesados (Stakeholders Management)  
   * 6.4. Protocolo de Gestión de Conflictos y Cambios  
7. **PLAN DE GESTIÓN DE RIESGOS**  
   * 7.1. Metodología de Análisis y Matriz de Riesgos  
   * 7.2. Reservas Financieras para Mitigación de Riesgos  
8. **CONCLUSIÓN Y VIABILIDAD**
## 
## **1\. PARADIGMA Y FILOSOFÍA DE EJECUCIÓN**

### **1.1. Paradigma Híbrido estructurado (Predictivo \- Adaptativo / XP)**

Para garantizar el cumplimiento estricto del contrato con la OIM y responder con la flexibilidad técnica requerida por la DIGEMIG, el proyecto se rige por un enfoque híbrido formal:

* **Enfoque Predictivo (Gobernanza y Restricciones):** Se aplica con rigor matemático a la Línea Base de Alcance, Tiempo y Costo. El presupuesto total es de 493.994,00 Bs. y el plazo inamovible es de 90 días calendario. Estas variables macro se controlan mediante el método de Ruta Crítica y Gestión del Valor Ganado (EVM).  
* **Enfoque Adaptativo (Ingeniería de Software \- XP):** El ciclo de vida del desarrollo técnico se ejecuta mediante Programación Extrema (XP) dentro de iteraciones de tiempo fijas (ciclos cortos de 1 a 2 semanas). Mientras que los macro-objetivos de los 4 Productos institucionales están fijos contractualmente, el diseño fino de pantallas, las lógicas internas del motor de riesgo y la experiencia de usuario evolucionan incrementalmente guiados por la retroalimentación técnica directa.

### **1.2. Filosofía de Ejecución Basada en Valores de XP**

El equipo asume los 5 valores fundamentales de la Programación Extrema para asegurar el éxito del proyecto:

1. **Comunicación:** Interacciones fluidas, diarias y directas entre el equipo de desarrollo, el especialista de negocio (Isaac Surci) y los operadores finales para erradicar suposiciones erróneas sobre los procesos migratorios.  
2. **Simplicidad:** Se diseñará y programará la solución informática más limpia y directa para satisfacer los requerimientos actuales. Se prohíbe la sobreingeniería para facilitar modificaciones normativas futuras.  
3. **Retroalimentación:** Se ejecutarán pruebas e integraciones constantes desde el primer día. Cada incremento de código se somete a validación inmediata para detectar desviaciones a tiempo.  
4. **Coraje (Valor):** Capacidad del equipo para refactorizar código cuando sea necesario, descartar diseños que no funcionen en puestos fronterizos y reportar de manera transparente cualquier impedimento normativo o técnico.  
5. **Respeto:** Valoración de las competencias especializadas de cada uno de los 5 integrantes, asumiendo una responsabilidad compartida sobre el código y el éxito del sistema.

## **2\. ACTA DE CONSTITUCIÓN DEL PROYECTO (PROJECT CHARTER)**

### **2.1. Información General**

| Atributo | Detalle de la Planificación |
| :---- | :---- |
| **Título del Proyecto** | Sistema de Información para el Registro, Derivación y Seguimiento de Casos de Trata de Personas. |
| **Patrocinador** | Programa Eurofront (Financiado por la Unión Europea) / OIM. |
| **Líder de Proyecto** | Cesar Daniel Condori Malpartida |
| **Propósito** | Digitalizar la detección temprana de trata y automatizar la clasificación de riesgo para interoperabilidad con Policía y Fiscalía. |
| **Soberanía Tecnológica** | Uso obligatorio de Software Libre (PostgreSQL, Java/Spring Boot) según Ley N° 370 y lineamientos estatales de la AGETIC. |

### 

### **2.2. Designación del Equipo y Roles**

Se formaliza la autoridad del equipo consultor y técnico con los siguientes roles y responsabilidades:

| Integrante | Rol en el Proyecto | Responsabilidad Principal |
| :---- | :---- | :---- |
| **Cesar Condori** | Líder de Proyecto / Consultor Principal (Lead Frontend) | Responsable de la entrega final del software, gestión del cronograma macro y el diseño e implementación de la interfaz de usuario (UX/UI y PWA). |
| **Isaac Surci** | Consultor Especialista en Negocio Migratorio / Enlace DIGEMIG | Actúa como el ***Product Owner* interno**; valida que el sistema cumpla con la normativa de trata de personas de la DIGEMIG, define la prioridad de las lógicas del negocio y coordina las pruebas piloto. |
| **Luis Chura** | Líder de Calidad (QA) / Desarrollador Backend | Responsable de la seguridad informática (OAuth2/JWT), integridad y optimización de la base de datos relacional y cumplimiento de Requisitos No Funcionales (RNF). |
| **Jazmin Canaviri** | Desarrollador Backend / Soporte de Negocio | Implementación de la lógica interna del motor de riego, arquitectura de servicios web (API REST) y soporte técnico continuo. |
| **Francia Rengel** | Consultora de Implementación y Documentación | Gestión de la documentación técnica, manuales de usuario/administrador, control del plan de comunicación y capacitación teórico-práctica en puestos fronterizos. |

## 

## **3\. GESTIÓN DEL ALCANCE Y TAMAÑO DEL SOFTWARE**

### **3.1. Inclusiones y Exclusiones del proyecto**

* **Inclusiones:**  
  * Registro digitalizado de indicadores físicos, conductuales y documentales de posibles víctimas.  
  * Motor de cálculo automático de niveles de riesgo parametrizado según guías oficiales.  
  * Funcionalidad ***Offline First*** mediante Aplicaciones Web Progresivas (PWA) para puestos fronterizos con baja conectividad.  
  * Interoperabilidad fluida mediante API REST estructuradas con la Policía Boliviana y Fiscalía.  
  * Generación y almacenamiento de logs de auditoría inalterables por un periodo de 10 años.  
* **Exclusiones:**  
  * No incluye la provisión física ni dotación de tablets, laptops o computadoras de escritorio (las cuales serán proporcionadas independientemente por la OIM).  
  * No incluye el mantenimiento de la infraestructura de hardware ni de los servidores físicos pertenecientes al Data Center de DIGEMIG.

### **3.2. Estimación del Tamaño del Software (Puntos de Fusión)**

Para justificar de forma cuantitativa la carga de trabajo, la duración de 90 días y la asignación del personal técnico, se realiza la estimación del tamaño del sistema mediante la metodología estandarizada de **Puntos de Función (PF)**:

* **Entradas Externas (EI):** Formulario parametrizado de registro **(Online/Offline)**, captura automática de geolocalización, pantalla de gestión de usuarios/roles.

* **Salidas Externas (EO):** Dashboard Analítico automatizado, generación de Mapas de Calor interactivos, reportes analíticos consolidados exportables.

* **Consultas Externas (EQ):** Búsqueda de historial de casos de trata y visualización rápida del estado de derivaciones institucionales.

* **Archivos Lógicos Internos (ILF):** Esquema relacional en PostgreSQL optimizado (Tablas de Víctimas, Catálogo de Indicadores, Logs Inalterables, Credenciales Cifradas).

* **Archivos de Interfaz Externos (EIF):** Servicios web consumidos e interoperabilidad nativa vía API REST con los sistemas de la Policía Nacional y el Ministerio Público.

#### **Cuadro Resumen de Estimación de Complejidad**

| Componente del Software | Cantidad | Complejidad Asignada | Puntos de Función (PF) |
| :---- | :---: | :---: | :---: |
| Formularios de Transacción y Captura (EI) | 3 | Media | 12 |
| Dashboards, Reportes y Mapas de Calor (EO) | 3 | Alta | 21 |
| Módulos de Consulta e Historial (EQ) | 2 | Baja | 6 |
| Entidades del Modelo Relacional BD (ILF) | 8 | Media | 80 |
| Endpoints de Interoperabilidad Externa (EIF) | 2 | Alta | 14 |
| **TAMAÑO TOTAL ESTIMADO DEL SOFTWARE** |  |  | **133 PF** |

###  **3.3. Gobernanza y Valor Esperado (KPIs)**

* **Gobernanza (Toma de decisiones):** Las decisiones de negocio se canalizan a través de Isaac Surci en coordinación con la DIGEMIG y la OIM. El diseño de arquitectura e interfaces debe ser rigurosamente validado antes de autorizar cualquier despliegue en el entorno de producción.

* **Enfoque de Desarrollo:** El proyecto se alineará estrictamente con el Plan de Implementación de Software Libre y Estándares Abiertos dictaminado por la AGETIC, resguardando la soberanía tecnológica del Estado Boliviano.

* **Valor Esperado (KPIs):**

  * ***Conectividad:*** Lograr al menos 3 nuevas conexiones operativas entre módulos internos del sistema y 2 asociaciones funcionales con instituciones externas (Policía/Fiscalía).  
  * ***Calidad de Datos:*** Optimizar 5 variables críticas de los registros migratorios existentes e incorporar 8 nuevas variables para análisis prospectivo y predictivo.  
  * ***Despliegue:*** Garantizar el sistema validado, configurado y operando de forma óptima en el 100% de los servidores previstos por la institución.

### **3.4. Estructura de Desglose del Trabajo (EDT / WBS)**

La EDT organiza jerárquicamente las actividades del proyecto en paquetes de trabajo claramente medibles:

* **Nivel 1: Gestión de Proyecto y Negocio**

  * **1.1 Planificación:** Creación y aprobación del Plan de Gestión Integral (PGP).

  * **1.2 Modelado de Procesos:** Levantamiento de las lógicas normativas y de negocio migratorio liderado por Isaac Surci.

  * **1.3 Monitoreo de Desempeño:** Emisión de reportes semanales de rendimiento utilizando métricas de EVM a cargo de César Condori.

* **Nivel 2: Core e Infraestructura Técnica**

  * **2.1 Entorno de Desarrollo:** Orquestación de contenedores Docker y configuración de flujos de CI/CD.

  * **2.2 Base de Datos:** Arquitectura del Modelo Relacional en PostgreSQL (Luis Chura).

  * **2.3 Seguridad y Acceso:** Implementación de OAuth2 / JWT y cifrado de datos sensibles en reposo.

* **Nivel 3: Desarrollo de Módulos Funcionales (Entregables)**

  * **3.1 Módulo de Registro:** Formulario digital dinámico, captura de geolocalización y sincronización para modo offline (César Condori).

  * **3.2 Módulo de Evaluación:** Codificación del algoritmo automatizado para clasificación de riesgo (Jazmín Canaviri).

  * **3.3 Módulo de Derivación:** Construcción de servicios web estables para interoperabilidad con entidades externas.

* **Nivel 4: Interoperabilidad y Control**

  * **4.1 API REST:** Puntos de enlace seguros para derivación inmediata hacía Policía y Fiscalía.

  * **4.2 Gestión de Seguridad:** Control de Usuarios, perfiles basados en Roles y Logs de Auditoría inalterables (retención de 10 años).

  * **4.3 Visualización Analítica:** Configuración del Dashboard Analítico y Mapas de Calor geoespaciales.

* **Nivel 5: Cierre, Transferencia y Capacitación**

  * **5.1 Documentación Técnica:** Redacción de manuales técnicos, manuales de usuario y guías de administración (Francia Rengel).

  * **5.2 Capacitación en Campo:** Transferencia formal de conocimientos teórico-prácticos dirigida a los agentes migratorios en fronteras (Francia Rengel / Isaac Surci).

  * **5.3 Cierre Contractual:** Validación de los entregables con la OIM y DIGEMIG para la firma de actas de conformidad.

### **3.5. Diccionario de la EDT (Resumen de paquetes críticos)**

| Paquete de Trabajo | Descripción y Criterio de Aceptación | Responsable Asignado |
| :---- | :---- | :---- |
| **WP 1.2: Lógica de Negocio y Normativa** | Definición y validación de las matrices de peso para los indicadores de trata de personas. Debe contar con el visto bueno normativo institucional. | **Isaac Surci** |
| **WP 3.1: Modo Offline (PWA)** | Permite el levantamiento de registros sin conectividad a internet y ejecuta una sincronización automática al detectar red, garantizando cero pérdida de datos. | **Cesar Condori** |
| **WP 3.2: Motor de Riesgo Inteligente** | Programación del algoritmo automatizado que calcula el nivel de riesgo en tiempo real basado en los indicadores ingresados. Tiempo de respuesta menor a 1 segundo. | **Jazmin Canaviri** |
| **WP 2.3: Seguridad y Base de Datos** | Arquitectura relacional PostgreSQL con datos cifrados en reposo (AES-256) y control estricto de accesos restringidos mediante perfiles (OAuth2/JWT). | **Luis Chura** |
| **WP 5.1: Documentación e Implementación** | Entrega completa de manuales administrativos y técnicos en formatos estructurados, control del repositorio Git y ejecución del plan de capacitación. | **Francia Rengel** |

### **3.6. Control, Validación y Aceptación Formal del Alcance (DoD)**

El alcance se valida estrictamente mediante el "Definition of Done" (DoD). Ningún paquete de trabajo se considerará formalmente terminado hasta que cumpla el circuito de control de cambios establecidos:

1. **Solicitud de Cambio:** Cualquier interesado presentó un pedido formal y justificado por escrito.

2. **Análisis de Impacto:** El equipo evalúa el impacto sobre los 90 días de plazo, el costo presupuestado y los estándares de calidad del producto.

3. **Decisión del CCB:** El Comité de Control de Cambios (integrado por el equipo de DIGEMIG y OIM) aprueba, rechaza o difiere la solicitud.

## **4\. GESTIÓN DEL TIEMPO Y CRONOGRAMA**

El proyecto contempla una duración total improrrogable de **90 días calendario**. Se utiliza el **Método de Cadena Crítica** para mitigar la incertidumbre en entornos estatales.

### **4.1. Hitos de Control y Entregables (Línea Base del Cronograma)** 

Se establecen de manera fija cuatro hitos de control vinculados directamente a la entrega de productos funcionales y a la liberación de desembolsos económicos:

| Hito | Entregable Base (Producto Contractual) | Duración | Ventana Temporal Planificada | Avance Físico Sincronizado |
| ----- | :---- | :---- | :---- | :---- |
| **Producto 1** | **Diseño y Registro Base:** Cronograma de Actividades detallado, Arquitectura del Sistema, Base de Datos PostgreSQL, Estructura de Indicadores de Negocio (validada por Isaac Surci) y Funcionalidad Offline inicial. | 19 Días | Del 02 de abril al 20 de abril | 10% |
| **Producto 2** | **Inteligencia e Interoperabilidad:** Motor automatizado de cálculo de riesgos, módulo de alertas automáticas, diseño de APIs con Policía/Fiscalía y Mockup interactivo funcional. | 19 Días | Del 21 de abril al 09 de mayo | 20% *(Acumulado 30%)* |
| **Producto 3** | **Análisis, Pruebas y Despliegue Intermedio:** Sistema completamente implementado en ambiente de pruebas (Staging) e Informe Técnico de Avance de Programación al 70%. | 19 Días | Del 10 de mayo al 28 de mayo | 40% *(Acumulado 70%)* |
| **Producto 4** | **Validación, Transferencia y Cierre:** Informe Final de Consultoría, Sistema en Producción funcionando al 100%, entrega total de Códigos Fuente y Manuales de Usuario, etc. | 18 Días | Del 29 de mayo al 15 de junio | 30% *(Acumulado 100%)* |
| **BUFFER** | **Reserva de contingencia de tiempo del proyecto:** Protección estratégica de la ruta crítica ante retrasos burocráticos del cliente o aprobaciones institucionales. | 15 Días | Del 16 de junio al 30 de junio | *Protección de Ruta Crítica* |

###  **4.2. Gestión de Buffers**

El Buffer de Proyecto (15 días) absorbe riesgos de demoras burocráticas estatales en la entrega de certificaciones oficiales de conformidad o retrasos logísticos en el aprovisionamiento técnico del Data Center de DIGEMIG. Si el proyecto experimenta retrasos por causas externas (como falta de respuesta de los servidores de la Policía), se consumirá ordenadamente el buffer sin afectar negativamente el plazo de entrega final.

### **4.3. Ruta Crítica del Sistema**

Compuesta por la secuencia de actividades que no permiten holguras y retrasarían el proyecto en su totalidad:

1. Modelado normativo y optimización del modelo de datos PostgreSQL (Semanas 1 y 2).  
2. Desarrollo y calibración fina del Motor de Cálculo de Riesgo Automatizado (Semanas 5 a 7).  
3. Programación e implementación de esquemas de cifrado avanzado y Logs de Auditoría (Semana 8).  
4. Ejecución de pruebas de estrés y seguridad en ambiente productivo (Semanas 10 y 11).

### **4.4. Técnicas de Control (EVM \- Earned Value Management)** 

Para monitorear la salud del tiempo del proyecto, se utilizará el Índice de Desempeño del Cronograma (SPI). Si el SPI \< 1.0 (alerta de retraso técnico), se activan inmediatamente planes de respuesta: intensificación de horas de desarrollo técnico por parte de los desarrolladores o reajuste en las prioridades de los requerimientos funcionales guiados por Isaac Surci.

### **4.5. Calendario de Recursos**

El equipo trabajará bajo un esquema de dedicación exclusiva para dar cumplimiento al plazo estipulado:

* **Jornada Laboral:** Lunes a Viernes de manera regular (Domingos habilitados de forma excepcional exclusivamente para despliegues críticos en Data Center).

* **Seguimiento:** César Condori auditará de manera diaria el avance de la ruta crítica, reportando las métricas de control directamente a los interesados durante las reuniones semanales de gobernanza.

## **5\. GESTIÓN FINANCIERA Y PRESUPUESTO**

### **5.1 Estructura Presupuestaria Detallada**

El presupuesto total fue diseñado científicamente para garantizar sostenibilidad financiera durante los 90 días de ejecución de alta intensidad:

| Categoría de Costo | Concepto General | Base de Cálculo Técnico | Monto Asignado (Bs) |
| :---- | :---- | :---- | :---- |
| **Recursos Humanos** | Honorarios profesionales de consultoría técnica (Equipo completo de 5 personas) | Sumatoria contractual individualizado | 404.700 |
| **Costos Operativos** | Desplazamientos a puestos fronterizos, viáticos y materiales de campo | Estimación global de logística | 18.000 |
| **Logística y TI** | Materiales e insumos de oficina y documentación técnica formal | Estimación fija de suministros | 5.000 |
| **TOTAL COSTOS DIRECTOS** |  |  | **427.700** |

### 

### **5.2 Línea Base de Costos (BAC) y Reservas de Seguridad** 

Siguiendo las mejores prácticas internacionales de la gerencia de proyectos, el control financiero incorpora reservas de mitigación:

1. **Reserva de Contingencia (10% sobre Costos Directos):** **42.770 Bs.** Destinada exclusivamente a mitigar riesgos técnicos identificados previamente (ej. complicaciones con la sincronización PWA o infraestructura imprevista).

   * **LÍNEA BASE DE COSTOS o PRESUPUESTO AL CONCLUIR (BAC): 470.470 Bs.**

2. **Reserva de Gestión (5% sobre Costos Directos):** **23.524 Bs.** Resguardada exclusivamente para imprevistos fuera del alcance inicial o modificaciones drásticas de la normativa migratoria nacional. No forma parte de la línea base operativa, pero se encuentra disponible bajo autorización para el Líder de Proyecto.

   * **INVERSIÓN FINAL / COSTO TOTAL DEL PROYECTO: 493.994,00 Bs.**

### **5.3 Plan de Pagos Vinculado a Entregables**

Para salvaguardar las directrices de la OIM, los desembolsos financieros están estrictamente condicionados a la entrega de valor ganado. Cada pago se libera exclusivamente contra la firma de conformidad oficial de la contraparte institucional:

| Hito de Pago | Entregable Vinculado | Porcentaje Financiero | Monto en Bolivianos (Bs) |
| :---- | :---- | :---- | :---- |
| **Pago 1** | Aprobación del Producto 1: Plan de Trabajo y Línea Base de Procesos de Negocio. | 10% | 49.399 |
| **Pago 2** | Aprobación del Producto 2: Presentación de Mockups interactivos y 30% de programación del core. | 30% | 148.198 |
| **Pago 3** | Aprobación del Producto 3: Despliegue en ambiente de pruebas (Staging) y 70% de programación. | 30% | 148.198 |
| **Pago 4** | Aprobación del Producto 4: Entrega de Sistema Final funcional, Códigos Fuente y Manuales. | 30% | 148.198 |

## 

## **6\. PLAN DE COMUNICACIÓN E INTERESADOS**

### **6.1 Objetivos de la Comunicación**

Asegurar que la información técnica y administrativa estratégica sea distribuida de forma oportuna, exacta y consistente entre los 5 integrantes del equipo y las entidades patrocinadoras.

### **6.2 Matriz de Comunicación del Proyecto**

Establece los flujos oficiales de información para evitar la saturación y blindar la trazabilidad:

| ¿Qué comunicar? | ¿Quién comunica? | ¿A quién? | Frecuencia | Método / Canal Oficial |
| :---- | :---- | :---- | :---- | :---- |
| Informe de Valor Ganado (EVM) y Estado Macro | Cesar Condori (Líder de Proyecto) | Coordinación OIM / Dirección DIGEMIG | Semanal | Documento PDF formal vía Correo Electrónico |
| Requerimientos, Leyes y Reglas de Negocio | Isaac Surci (Especialista de Negocio) | Todo el Equipo Técnico de Desarrollo | Continuo / Bajo demanda | Sesiones de trabajo XP / Repositorio Git |
| Avance del Motor de Riesgo y Lógica Interna | Jazmin Canaviri (Desarrollador Backend) | Isaac Surci (Especialista de Negocio) | Cada 15 días (En Revisiones de Sprint) | Reunión técnica de demostración (Demo) |
| Sincronización de Base de Datos y Código Core | Jazmin Canaviri y Luis Chura | Entre ellos (Célula de Desarrollo Backend) | Diario | Reunión corta diaria (*Daily Standup* de 15 min) |
| Alertas de Riesgos Críticos e Infraestructura | Luis Chura (Líder QA / Backend) | Cesar Condori e Isaac Surci | Inmediato (Al detectar el evento) | Reunión de Emergencia / Canales de Slack |
| Hitos de Diseño UX y Sincronización Offline | Cesar Condori (Lead Frontend) | Isaac Surci y Operadores de Frontera | Cada 15 días | Pruebas de usabilidad en ambiente de Staging |
| Manuales, Documentación y Plan de Capacitación | Francia Rengel (Consultora de Implementación) | Todo el Equipo / Operadores Finales | Semanal | Shared Google Drive / Markdown en Git |

### 

### **6.3 Gestión de Interesados (Stakeholder Management)**

Clasificación estratégica utilizando la metodología de la Matriz de Poder e Interés:

* **Dirección General de DIGEMIG / OIM (Alto Poder / Alto Interés):** Mantener plenamente satisfechos mediante reportes detallados y precisos de desempeño e hitos financieros.

* **Agentes de Frontera (Bajo Poder / Alto Interés):** Mantener informados y enfocados en la usabilidad del sistema. Canalizado a través de Isaac Surci y Francia Rengel durante las fases de pruebas y capacitación.

### **6.4 Protocolo de Gestión de Conflictos y Cambios**

1. Si se solicita un cambio en un Requerimiento Funcional, este deberá ser analizado técnicamente en conjunto por César Condori (Alcance Técnico) e Isaac Surci (Alcance de Negocio).

2. Se evaluará el impacto sobre la línea base de tiempo y costo.

3. Si el cambio es viable y no afecta negativamente las reservas del proyecto de forma crítica, se aprueba en acta y se actualiza el repositorio Git.

## **7\. PLAN DE GESTIÓN DE RIESGOS**

### **7.1 Metodología de Análisis y Matriz de Riesgos**

Se aplica una matriz analítica de Probabilidad e Impacto. Cada riesgo cuenta con un responsable encargado de la activación de respuestas oportunas:

| Riesgo Identificado | Severidad (Probabilidad / Impacto) | Estrategia de Respuesta | Dueño del Riesgo (Risk Owner) | Justificación Técnica de la Acción |
| :---- | :---- | :---- | :---- | :---- |
| **Baja o nula conectividad en puestos fronterizos** | Alta / Crítico | Mitigación: Desarrollo bajo arquitectura *PWA (Offline First)* con sincronización diferida automatizada al detectar red. | Cesar Condori | Garantiza que el flujo operativo de control migratorio no se detenga ante cortes de internet. |
| **Inconsistencias o desvíos en las reglas lógicas de trata** | Media / Alto | Prevención: Validación diaria y directa del especialista sobre los criterios del algoritmo analítico de riesgo. | Isaac Surci | Evita desvíos técnicos en la programación de los indicadores de riesgo analítico frente a la ley. |
| **Incompatibilidad técnica con APIs externas de Policía/Fiscalía** | Alta / Alto | Mitigación: Desarrollo y ejecución de pruebas de integración temprana (Día 50\) utilizando entornos controlados (*Mocks*). | Jazmin Canaviri | Elimina cuellos de botella críticos en la fase de interoperabilidad y consumo de servicios web externos. |
| **Fuga, alteración o acceso no autorizado a datos de víctimas** | Baja / Catastrófico | Prevención: Encriptación de datos en reposo mediante AES-256 y canales de comunicación protegidos con TLS 1.3. | Luis Chura | Cumplimiento estricto de la Ley N° 370 y blindaje legal/criptográfico de los Derechos Humanos. |
| **Demora burocrática en acceso al Data Center institucional** | Media / Alto | Transferencia: Uso proactivo del Buffer de Contingencia de 15 días y despliegue temporal en infraestructura cloud de respaldo. | Luis Chura | Evita la paralización del cronograma macro por trabas de carácter administrativo o de servidores del Estado. |
| **Resistencia al cambio tecnológico por agentes operativos** | Media / Medio | Mitigación: Ejecución de capacitaciones intensivas in situ y diseño de interfaz UX simplificada y accesible. | Francia Rengel | Asegura que el sistema sea adoptado de forma inmediata y alimentado de manera correcta en las fronteras. |

### 

### **7.2 Reservas Financieras para Mitigación de Riesgos**

* **Reserva de Contingencia (42.770 Bs.):** Destinada de manera exclusiva al financiamiento de planes de respuesta frente a los riesgos técnicos y de conectividad de la matriz.  
* **Reserva de Gestión (23.524 Bs.):** Destinada a cubrir desviaciones de alcance no identificadas ("incógnitas desconocidas"), tales como virajes repentinos en el marco jurídico penal de trata de personas.

## **8\. CONCLUSIÓN Y VIABILIDAD**

El presente Plan de Proyecto para la implementación del Sistema de Trata de Personas de la DIGEMIG se consolida como una hoja de ruta robusta, factible y de alta rigurosidad profesional.

**Puntos Finales de Viabilidad:**

1. **Gobernanza y Sinergia Total:** La estructura organizativa elimina cualquier vacío de responsabilidad. La dirección y desarrollo frontend de César Condori, la especialización en procesos y negocio migratorio de Isaac Surci, la rigurosidad de base de datos y QA de Luis Chura, la programación del motor lógico de Jazmín Canaviri y la gestión de implementación de Francia Rengel garantizan un equipo multidisciplinario altamente solvente.  
2. **Blindaje del Triángulo de Restricciones:** El presupuesto total de 493.994,00 Bs. se encuentra protegido por reservas de seguridad estructuradas, y el cronograma de 90 días cuenta con un buffer de 15 días capaz de absorber las fricciones del entorno estatal.  
3. **Soberanía y Cumplimiento Normativo:** La obligatoriedad del uso de Software Libre y bases de datos PostgreSQL garantiza la alineación total con la Ley Boliviana N° 370 y satisface con solvencia los estándares internacionales exigidos por la OIM, demostrando la factibilidad técnica y operativa de la propuesta.