export type RiskLevel = 'bajo' | 'medio' | 'alto';
export type CaseStatus = 'nuevo' | 'en_proceso' | 'derivado' | 'judicializado' | 'cerrado';
export type UserRole = 'agente' | 'supervisor' | 'institucion' | 'admin';
export type DerivacionStatus = 'enviado' | 'recibido' | 'en_proceso' | 'resuelto';
export type InstitucionReceptora = 'policia' | 'fiscalia' | 'ambas';

export interface PersonProfile {
  nombre?: string;
  edad?: number;
  sexo: 'masculino' | 'femenino' | 'otro' | '';
  nacionalidad: string;
  documentoTipo: string;
  documentoNumero: string;
  ocupacion: string;
  lugarProcedencia: string;
  destinoDeclarado: string;
  medioTransporte: string;
  acompanantes: string;
  contactoEmergencia: string;
}

export interface IndicadoresSet {
  fisicos: Record<string, boolean>;
  conductuales: Record<string, boolean>;
  documentales: Record<string, boolean>;
}

export interface HistoryEntry {
  id: string;
  fecha: string;
  usuario: string;
  rol: string;
  accion: string;
  detalle: string;
  institucion: string;
}

export interface Evidence {
  id: string;
  nombre: string;
  tipo: 'pdf' | 'imagen' | 'video' | 'audio';
  fecha: string;
  tamaño: string;
  subidoPor: string;
}

export interface Derivacion {
  id: string;
  casoId: string;
  casoCodigo: string;
  institucion: InstitucionReceptora;
  fecha: string;
  estado: DerivacionStatus;
  funcionarioReceptor: string;
  numeroOficio: string;
  notas: string;
  fechaRespuesta?: string;
}

export interface Caso {
  id: string;
  codigo: string;
  fecha: string;
  hora: string;
  agente: string;
  agenteId: string;
  puntoControl: string;
  departamento: string;
  municipio: string;
  latitud?: number;
  longitud?: number;
  riesgo: RiskLevel;
  estado: CaseStatus;
  modalidad: string;
  persona: PersonProfile;
  indicadores: IndicadoresSet;
  indicadoresPositivos: number;
  observaciones: string;
  derivacion?: Derivacion;
  historial: HistoryEntry[];
  evidencias: Evidence[];
  fechaUltimaActualizacion: string;
}

export interface User {
  id: string;
  nombre: string;
  email: string;
  rol: UserRole;
  institucion: string;
  cargo: string;
  activo: boolean;
  ultimoAcceso: string;
  fechaCreacion: string;
  avatar?: string;
}

export interface AuditLog {
  id: string;
  fecha: string;
  hora: string;
  usuario: string;
  rol: string;
  accion: string;
  modulo: string;
  recurso: string;
  ip: string;
  resultado: 'exitoso' | 'fallido';
  detalle: string;
}

export interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  casos: Caso[];
  setCasos: (casos: Caso[]) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  offlineMode: boolean;
  pendingSync: number;
}
