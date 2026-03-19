import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronRight, MapPin, User, ClipboardList, ShieldAlert, Send, AlertTriangle, Info, Loader } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { indicadoresFisicos, indicadoresConductuales, indicadoresDocumentales, modalidadesTrata, puntosControl, departamentosGuatemala, nacionalidades, calcularRiesgo } from '../data/indicadores';
import { RiskBadge } from '../components/ui/RiskBadge';
import type { Caso, IndicadoresSet } from '../types';
import { toast } from 'sonner';

const STEPS = [
  { id: 1, label: 'Datos del Caso', icon: MapPin },
  { id: 2, label: 'Perfil Personal', icon: User },
  { id: 3, label: 'Indicadores', icon: ClipboardList },
  { id: 4, label: 'Evaluación', icon: ShieldAlert },
];

function StepIndicator({ steps, current }: { steps: typeof STEPS; current: number }) {
  return (
    <div className="flex items-center justify-between mb-8 relative">
      <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-200 z-0">
        <div
          className="h-full bg-[#1B3A6B] transition-all duration-500"
          style={{ width: `${((current - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
      {steps.map(step => {
        const Icon = step.icon;
        const done = step.id < current;
        const active = step.id === current;
        return (
          <div key={step.id} className="flex flex-col items-center z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${done ? 'bg-[#1B3A6B] border-[#1B3A6B]' : active ? 'bg-white border-[#1B3A6B]' : 'bg-white border-gray-300'}`}>
              {done ? <Check className="w-4 h-4 text-white" /> : <Icon className={`w-4 h-4 ${active ? 'text-[#1B3A6B]' : 'text-gray-400'}`} />}
            </div>
            <p className={`text-xs mt-1.5 hidden sm:block ${active ? 'text-[#1B3A6B] font-medium' : done ? 'text-gray-600' : 'text-gray-400'}`}>{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function IndicadorItem({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: (id: string, v: boolean) => void }) {
  return (
    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${checked ? 'border-blue-400 bg-blue-50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${checked ? 'bg-[#1B3A6B] border-[#1B3A6B]' : 'border-gray-300'}`}
        onClick={() => onChange(id, !checked)}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="text-sm text-gray-700 leading-snug">{label}</span>
    </label>
  );
}

export default function NuevoCasoPage() {
  const navigate = useNavigate();
  const { currentUser, casos, setCasos } = useAppContext();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);

  // Step 1: Datos del caso
  const [puntoControl, setPuntoControl] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [fechaHora] = useState(() => {
    const now = new Date();
    return {
      fecha: now.toISOString().split('T')[0],
      hora: now.toTimeString().slice(0, 5),
    };
  });
  const [useGeo, setUseGeo] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [observaciones, setObservaciones] = useState('');

  // Step 2: Perfil
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState<'masculino' | 'femenino' | 'otro' | ''>('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [docTipo, setDocTipo] = useState('');
  const [docNumero, setDocNumero] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [procedencia, setProcedencia] = useState('');
  const [destino, setDestino] = useState('');
  const [transporte, setTransporte] = useState('');
  const [acompanantes, setAcompanantes] = useState('');

  // Step 3: Indicadores
  const [indicadores, setIndicadores] = useState<IndicadoresSet>({
    fisicos: {},
    conductuales: {},
    documentales: {},
  });
  const [indicatorTab, setIndicatorTab] = useState<'fisicos' | 'conductuales' | 'documentales'>('fisicos');

  const handleIndicador = (cat: keyof IndicadoresSet, id: string, val: boolean) => {
    setIndicadores(prev => ({ ...prev, [cat]: { ...prev[cat], [id]: val } }));
  };

  const getRiskResult = () => calcularRiesgo(indicadores);
  const riskResult = getRiskResult();

  const handleGeoCapture = () => {
    setGeoLoading(true);
    setTimeout(() => {
      setCoords({ lat: 14.6407 + (Math.random() * 0.1 - 0.05), lng: -90.5133 + (Math.random() * 0.1 - 0.05) });
      setUseGeo(true);
      setGeoLoading(false);
      toast.success('Ubicación capturada correctamente');
    }, 1500);
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 1500));

    const riskCalc = calcularRiesgo(indicadores);
    const now = new Date();
    const codigo = `DIGEMIG-2026-${String(casos.length + 1).padStart(3, '0')}`;

    const newCaso: Caso = {
      id: `c${Date.now()}`,
      codigo,
      fecha: fechaHora.fecha,
      hora: fechaHora.hora,
      agente: currentUser?.nombre || 'Sistema',
      agenteId: currentUser?.id || '',
      puntoControl,
      departamento,
      municipio,
      latitud: coords?.lat,
      longitud: coords?.lng,
      riesgo: riskCalc.nivel,
      estado: riskCalc.nivel === 'bajo' ? 'nuevo' : 'derivado',
      modalidad,
      persona: {
        nombre: nombre || undefined,
        edad: edad ? parseInt(edad) : undefined,
        sexo,
        nacionalidad,
        documentoTipo: docTipo,
        documentoNumero: docNumero,
        ocupacion,
        lugarProcedencia: procedencia,
        destinoDeclarado: destino,
        medioTransporte: transporte,
        acompanantes,
        contactoEmergencia: '',
      },
      indicadores,
      indicadoresPositivos: riskCalc.total,
      observaciones,
      derivacion: riskCalc.nivel !== 'bajo' ? {
        id: `d${Date.now()}`,
        casoId: `c${Date.now()}`,
        casoCodigo: codigo,
        institucion: 'ambas',
        fecha: now.toISOString(),
        estado: 'enviado',
        funcionarioReceptor: 'Por asignar',
        numeroOficio: `OF-AUTO-${Date.now()}`,
        notas: `Derivación automática por riesgo ${riskCalc.nivel.toUpperCase()}.`,
      } : undefined,
      historial: [
        {
          id: `h${Date.now()}`,
          fecha: now.toISOString(),
          usuario: currentUser?.nombre || 'Sistema',
          rol: 'Agente',
          accion: 'Registro de caso',
          detalle: `Caso creado en ${puntoControl}, ${departamento}.`,
          institucion: 'DIGEMIG',
        },
        {
          id: `h${Date.now() + 1}`,
          fecha: now.toISOString(),
          usuario: 'Sistema',
          rol: 'Sistema',
          accion: 'Clasificación automática',
          detalle: `Nivel de riesgo ${riskCalc.nivel.toUpperCase()} asignado. ${riskCalc.total} indicadores positivos.`,
          institucion: 'DIGEMIG',
        },
        ...(riskCalc.nivel !== 'bajo' ? [{
          id: `h${Date.now() + 2}`,
          fecha: now.toISOString(),
          usuario: 'Sistema',
          rol: 'Sistema',
          accion: 'Derivación automática',
          detalle: `Notificaciones enviadas a PNC y MP por riesgo ${riskCalc.nivel.toUpperCase()}.`,
          institucion: 'DIGEMIG',
        }] : []),
      ],
      evidencias: [],
      fechaUltimaActualizacion: now.toISOString(),
    };

    setCasos([newCaso, ...casos]);
    toast.success(`Caso ${codigo} registrado exitosamente`);
    navigate(`/casos/${newCaso.id}`);
    setSaving(false);
  };

  const canProceed = () => {
    if (step === 1) return puntoControl && departamento && municipio && modalidad;
    if (step === 2) return sexo && nacionalidad;
    if (step === 3) return true;
    return true;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <StepIndicator steps={STEPS} current={step} />

        {/* Step 1: Datos del Caso */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-gray-800">Paso 1: Datos del Caso</h2>
              <p className="text-sm text-gray-500 mt-1">Registre las variables principales del evento.</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
              <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-700">
                <p className="font-medium mb-1">Fecha y Hora de Registro</p>
                <p>{fechaHora.fecha} a las {fechaHora.hora} horas — capturado automáticamente.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Punto de Control <span className="text-red-500">*</span></label>
                <select value={puntoControl} onChange={e => setPuntoControl(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Seleccionar...</option>
                  {puntosControl.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Departamento <span className="text-red-500">*</span></label>
                <select value={departamento} onChange={e => setDepartamento(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Seleccionar...</option>
                  {departamentosGuatemala.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Municipio <span className="text-red-500">*</span></label>
                <input value={municipio} onChange={e => setMunicipio(e.target.value)} placeholder="Ej. Ayutla" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Modalidad de Trata Detectada <span className="text-red-500">*</span></label>
                <select value={modalidad} onChange={e => setModalidad(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Seleccionar...</option>
                  {modalidadesTrata.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>

            {/* Geolocation */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-700">Geolocalización Automática</p>
                  <p className="text-xs text-gray-500">Capture la ubicación GPS del punto de registro</p>
                </div>
                <button
                  type="button"
                  onClick={handleGeoCapture}
                  disabled={geoLoading || useGeo}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${useGeo ? 'bg-green-100 text-green-700' : 'bg-[#1B3A6B] text-white hover:bg-[#2d5499]'} disabled:opacity-60`}
                >
                  {geoLoading ? <Loader className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
                  {useGeo ? 'Capturado' : geoLoading ? 'Capturando...' : 'Capturar GPS'}
                </button>
              </div>
              {coords && (
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-xs text-green-700">
                  Lat: {coords.lat.toFixed(6)} · Lng: {coords.lng.toFixed(6)}
                </div>
              )}
            </div>

            {/* Observaciones */}
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Observaciones Iniciales</label>
              <textarea value={observaciones} onChange={e => setObservaciones(e.target.value)} rows={3} placeholder="Descripción del contexto inicial del caso..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 resize-none" />
            </div>
          </div>
        )}

        {/* Step 2: Perfil Personal */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-gray-800">Paso 2: Perfil de la Persona</h2>
              <p className="text-sm text-gray-500 mt-1">Variables de perfilamiento de la posible víctima.</p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-700">
                <p className="font-medium mb-1">Protección de Datos</p>
                <p>Los datos personales son tratados con máxima confidencialidad conforme a la normativa de protección de víctimas. Solo campos marcados con (*) son obligatorios.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Nombre (Opcional)</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Solo si hay consentimiento" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Edad Estimada (años)</label>
                <input type="number" value={edad} onChange={e => setEdad(e.target.value)} min={0} max={120} placeholder="Ej. 25" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Sexo <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-3 gap-2">
                  {(['femenino', 'masculino', 'otro'] as const).map(s => (
                    <button key={s} type="button" onClick={() => setSexo(s)}
                      className={`py-2.5 rounded-xl text-sm border transition-all capitalize ${sexo === s ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                      {s === 'femenino' ? 'Femenino' : s === 'masculino' ? 'Masculino' : 'Otro'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Nacionalidad <span className="text-red-500">*</span></label>
                <select value={nacionalidad} onChange={e => setNacionalidad(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Seleccionar...</option>
                  {nacionalidades.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Tipo de Documento</label>
                <select value={docTipo} onChange={e => setDocTipo(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Sin documento / No porta</option>
                  <option value="DPI">DPI (Bolivia)</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Partida de nacimiento">Partida de Nacimiento</option>
                  <option value="Carné de residente">Carné de Residente</option>
                  <option value="Otro">Otro Documento</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Número de Documento</label>
                <input value={docNumero} onChange={e => setDocNumero(e.target.value)} placeholder="Número parcial o completo" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Ocupación Declarada</label>
                <input value={ocupacion} onChange={e => setOcupacion(e.target.value)} placeholder="Ej. Agricultor, Estudiante..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Lugar de Procedencia</label>
                <input value={procedencia} onChange={e => setProcedencia(e.target.value)} placeholder="Ciudad, Departamento, País" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Destino Declarado</label>
                <input value={destino} onChange={e => setDestino(e.target.value)} placeholder="Ciudad, País de destino" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">Medio de Transporte</label>
                <select value={transporte} onChange={e => setTransporte(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="">Seleccionar...</option>
                  <option value="Pie">A pie</option>
                  <option value="Bus">Bus / Transporte público</option>
                  <option value="Vehículo privado">Vehículo privado</option>
                  <option value="Aéreo">Aéreo</option>
                  <option value="Marítimo">Marítimo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700 mb-1.5">Acompañantes</label>
                <input value={acompanantes} onChange={e => setAcompanantes(e.target.value)} placeholder="Ej. Solo, Con esposo, Grupo de 5 personas..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Indicadores */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-gray-800">Paso 3: Indicadores de Detección</h2>
              <p className="text-sm text-gray-500 mt-1">Marque todos los indicadores presentes según la Guía de Detección Temprana.</p>
            </div>

            {/* Risk preview */}
            {riskResult.total > 0 && (
              <div className={`rounded-xl p-3 flex items-center gap-3 text-sm ${riskResult.nivel === 'alto' ? 'bg-red-50 border border-red-200' : riskResult.nivel === 'medio' ? 'bg-amber-50 border border-amber-200' : 'bg-green-50 border border-green-200'}`}>
                <RiskBadge level={riskResult.nivel} size="sm" />
                <span className={riskResult.nivel === 'alto' ? 'text-red-700' : riskResult.nivel === 'medio' ? 'text-amber-700' : 'text-green-700'}>
                  {riskResult.total} indicadores positivos — {riskResult.descripcion.split(':')[0]}
                </span>
              </div>
            )}

            {/* Tabs */}
            <div className="flex rounded-xl border border-gray-200 overflow-hidden">
              {([
                { key: 'fisicos', label: `Físicos (${Object.values(indicadores.fisicos).filter(Boolean).length}/${indicadoresFisicos.length})` },
                { key: 'conductuales', label: `Conductuales (${Object.values(indicadores.conductuales).filter(Boolean).length}/${indicadoresConductuales.length})` },
                { key: 'documentales', label: `Documentales (${Object.values(indicadores.documentales).filter(Boolean).length}/${indicadoresDocumentales.length})` },
              ] as const).map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setIndicatorTab(tab.key)}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-medium transition-colors ${indicatorTab === tab.key ? 'bg-[#1B3A6B] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {indicatorTab === 'fisicos' && indicadoresFisicos.map(ind => (
                <IndicadorItem key={ind.id} id={ind.id} label={ind.label} checked={!!indicadores.fisicos[ind.id]} onChange={(id, v) => handleIndicador('fisicos', id, v)} />
              ))}
              {indicatorTab === 'conductuales' && indicadoresConductuales.map(ind => (
                <IndicadorItem key={ind.id} id={ind.id} label={ind.label} checked={!!indicadores.conductuales[ind.id]} onChange={(id, v) => handleIndicador('conductuales', id, v)} />
              ))}
              {indicatorTab === 'documentales' && indicadoresDocumentales.map(ind => (
                <IndicadorItem key={ind.id} id={ind.id} label={ind.label} checked={!!indicadores.documentales[ind.id]} onChange={(id, v) => handleIndicador('documentales', id, v)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Evaluación y Derivación */}
        {step === 4 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-gray-800">Paso 4: Evaluación y Derivación</h2>
              <p className="text-sm text-gray-500 mt-1">Clasificación automática del nivel de riesgo y derivación.</p>
            </div>

            {/* Risk Result */}
            <div className={`rounded-2xl p-6 text-center ${riskResult.nivel === 'alto' ? 'bg-red-50 border-2 border-red-300' : riskResult.nivel === 'medio' ? 'bg-amber-50 border-2 border-amber-300' : 'bg-green-50 border-2 border-green-300'}`}>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Nivel de Riesgo Calculado</p>
              <RiskBadge level={riskResult.nivel} size="lg" />
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl text-gray-800">{Object.values(indicadores.fisicos).filter(Boolean).length}</p>
                  <p className="text-xs text-gray-500">Físicos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-gray-800">{Object.values(indicadores.conductuales).filter(Boolean).length}</p>
                  <p className="text-xs text-gray-500">Conductuales</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-gray-800">{Object.values(indicadores.documentales).filter(Boolean).length}</p>
                  <p className="text-xs text-gray-500">Documentales</p>
                </div>
              </div>
              <p className={`text-sm mt-4 ${riskResult.nivel === 'alto' ? 'text-red-700' : riskResult.nivel === 'medio' ? 'text-amber-700' : 'text-green-700'}`}>{riskResult.descripcion}</p>
            </div>

            {/* Derivation Action */}
            {riskResult.nivel !== 'bajo' && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Send className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-purple-800 font-medium">Derivación Automática Activada</p>
                    <p className="text-xs text-purple-600 mt-1">Se generarán notificaciones electrónicas a:</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-lg">Policía Nacional Civil (PNC)</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-lg">Ministerio Público (MP)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <p className="text-sm text-gray-700 font-medium">Resumen del Registro</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div><span className="text-gray-400">Punto:</span> {puntoControl}</div>
                <div><span className="text-gray-400">Depto:</span> {departamento}</div>
                <div><span className="text-gray-400">Municipio:</span> {municipio}</div>
                <div><span className="text-gray-400">Modalidad:</span> {modalidad}</div>
                <div><span className="text-gray-400">Sexo:</span> {sexo || 'No indicado'}</div>
                <div><span className="text-gray-400">Nac.:</span> {nacionalidad || 'No indicada'}</div>
                <div><span className="text-gray-400">Indicadores:</span> {riskResult.total} positivos</div>
                <div><span className="text-gray-400">Agente:</span> {currentUser?.nombre.split(' ').slice(0, 2).join(' ')}</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={() => step > 1 ? setStep(step - 1) : navigate('/casos')}
            className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {step === 1 ? 'Cancelar' : 'Atrás'}
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            {STEPS.map(s => (
              <div key={s.id} className={`w-2 h-2 rounded-full ${step === s.id ? 'bg-[#1B3A6B]' : step > s.id ? 'bg-blue-300' : 'bg-gray-200'}`} />
            ))}
          </div>

          {step < 4 ? (
            <button
              type="button"
              disabled={!canProceed()}
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#2d5499] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuar <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={saving}
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-xl text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {saving ? <><Loader className="w-4 h-4 animate-spin" /> Guardando...</> : <><Check className="w-4 h-4" /> Guardar Caso</>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
