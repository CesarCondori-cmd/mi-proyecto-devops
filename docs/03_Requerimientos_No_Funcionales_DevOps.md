# 3. Requerimientos No Funcionales (Atributos de Calidad)

## 3.1 Seguridad (DevSecOps)

* **RNF-SEC-01 — Cifrado en tránsito:**  
Todo el tráfico debe usar HTTPS con TLS 1.2 o superior.  
**Prioridad:** Must

* **RNF-SEC-02 — Contraseñas seguras:**  
Las contraseñas deben almacenarse con hashing bcrypt.  
**Prioridad:** Must

* **RNF-SEC-03 — Control de acceso:**  
Acceso a información según rol.  
**Prioridad:** Must

---

## 3.2 Rendimiento

* **RNF-REN-01 — Tiempo de respuesta:**  
Consultas ≤ 3 segundos.  
**Prioridad:** Must

* **RNF-REN-02 — Concurrencia:**  
Soportar múltiples usuarios simultáneos.  
**Prioridad:** Should

---

## 3.3 Usabilidad

* **RNF-USA-01 — Facilidad de uso:**  
Registro de caso en menos de 5 minutos.  
**Prioridad:** Should

---

## 3.4 Confiabilidad

* **RNF-CONF-01 — Disponibilidad:**  
Sistema disponible 99%.  
**Prioridad:** Must

* **RNF-CONF-02 — Respaldo:**  
Backups automáticos diarios.  
**Prioridad:** Must

---

## 3.5 Operabilidad y Observabilidad

* **RNF-OPS-01 — Logs:**  
Registrar acciones de usuarios en formato estructurado.  
**Prioridad:** Must

* **RNF-OPS-02 — Métricas:**  
Monitoreo de CPU y memoria.  
**Prioridad:** Could