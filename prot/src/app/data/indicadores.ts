export const indicadoresFisicos = [
  { id: 'if01', label: 'Signos de maltrato físico o lesiones visibles' },
  { id: 'if02', label: 'Apariencia de desnutrición o fatiga extrema' },
  { id: 'if03', label: 'Marcas de restricción física (ataduras, quemaduras)' },
  { id: 'if04', label: 'Vestimenta inapropiada para el clima o contexto' },
  { id: 'if05', label: 'Señales de uso o dependencia de sustancias' },
  { id: 'if06', label: 'Heridas o cicatrices que no coinciden con su explicación' },
  { id: 'if07', label: 'Apariencia de haber sido sometido/a a trabajos forzados' },
  { id: 'if08', label: 'Señales evidentes de privación de sueño' },
  { id: 'if09', label: 'Tatuajes o marcas que indiquen propiedad de terceros' },
  { id: 'if10', label: 'Indicios de embarazo forzado o no deseado' },
  { id: 'if11', label: 'Presencia de enfermedades de transmisión sexual' },
  { id: 'if12', label: 'No tiene control sobre sus medicamentos u objetos personales' },
];

export const indicadoresConductuales = [
  { id: 'ic01', label: 'Se muestra asustado/a, ansioso/a o extremadamente sumiso/a' },
  { id: 'ic02', label: 'Evita contacto visual con las autoridades' },
  { id: 'ic03', label: 'Responde con frases memorizadas o guionadas' },
  { id: 'ic04', label: 'Está controlado/a por una persona acompañante dominante' },
  { id: 'ic05', label: 'No puede hablar libremente o sin supervisión de terceros' },
  { id: 'ic06', label: 'Desconoce su ubicación actual o destino final' },
  { id: 'ic07', label: 'Su historia es contradictoria o cambia con las preguntas' },
  { id: 'ic08', label: 'Muestra signos de trauma psicológico o disociación' },
  { id: 'ic09', label: 'Ha sido instruido/a para desconfiar de las autoridades' },
  { id: 'ic10', label: 'No tiene libertad de movimiento propio' },
  { id: 'ic11', label: 'Menciona deudas impuestas por empleador o reclutador' },
  { id: 'ic12', label: 'Parece no tener autonomía en sus propias decisiones' },
];

export const indicadoresDocumentales = [
  { id: 'id01', label: 'No porta documentos de identidad propios' },
  { id: 'id02', label: 'Sus documentos están en posesión de una tercera persona' },
  { id: 'id03', label: 'Documentos de identidad falsificados o alterados' },
  { id: 'id04', label: 'Pasaporte o DPI retenido por otra persona' },
  { id: 'id05', label: 'Múltiples sellos de entrada/salida en corto período de tiempo' },
  { id: 'id06', label: 'Historia migratoria irregular o inexplicable' },
  { id: 'id07', label: 'Posee contrato laboral en idioma que no comprende' },
  { id: 'id08', label: 'Ha firmado documentos sin entender su contenido' },
];

export const modalidadesTrata = [
  'Explotación sexual comercial',
  'Trabajo forzado',
  'Servidumbre doméstica',
  'Mendicidad forzada',
  'Tráfico de órganos',
  'Matrimonio servil',
  'Reclutamiento forzado',
  'Adopción irregular',
  'No determinada',
];

export const puntosControl = [
  'Aeropuerto Internacional Viru Viru',
  'Aeropuerto Internacional El Alto',
  'Paso Fronterizo Desaguadero',
  'Paso Fronterizo Tambo Quemado',
  'Paso Fronterizo Villazón',
  'Puerto Busch',
  'San Antonio de Lomerío',
  'Paso Fronterizo Guayaramerín',
  'Paso Fronterizo Cobija',
  'Paso Fronterizo Bermejo',
  'Otra ubicación',
];

export const departamentosGuatemala = [
  'Chuquisaca', 'La Paz', 'Cochabamba', 'Oruro',
  'Potosí', 'Santa Cruz', 'Beni', 'Tarija',
  'Pando',
];

export const nacionalidades = [
  'Guatemalteca', 'Hondureña', 'Salvadoreña', 'Nicaragüense',
  'Costarricense', 'Mexicana', 'Colombiana', 'Venezolana',
  'Ecuatoriana', 'Peruana', 'Boliviana', 'Cubana',
  'Haitiana', 'Dominicana', 'Estadounidense', 'Otra',
];

export function calcularRiesgo(indicadores: { fisicos: Record<string, boolean>; conductuales: Record<string, boolean>; documentales: Record<string, boolean> }): { nivel: 'bajo' | 'medio' | 'alto'; total: number; descripcion: string } {
  const fisicosPos = Object.values(indicadores.fisicos).filter(Boolean).length;
  const conductualesPos = Object.values(indicadores.conductuales).filter(Boolean).length;
  const documentalesPos = Object.values(indicadores.documentales).filter(Boolean).length;
  const total = fisicosPos + conductualesPos + documentalesPos;

  if (total >= 9) {
    return { nivel: 'alto', total, descripcion: 'Riesgo Alto: Se requiere derivación inmediata a Policía y Fiscalía.' };
  } else if (total >= 4) {
    return { nivel: 'medio', total, descripcion: 'Riesgo Medio: Se recomienda derivación y seguimiento interinstitucional.' };
  } else {
    return { nivel: 'bajo', total, descripcion: 'Riesgo Bajo: Registrar y dar seguimiento preventivo al caso.' };
  }
}
