import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  ArrowLeft, MapPin, Calendar, User, Clock, FileText, Paperclip,
  History, AlertTriangle, Send, Plus, Download, Eye, RotateCcw,
  ChevronDown, Shield, Check,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RiskBadge } from '../components/ui/RiskBadge';
import { CaseStatusBadge } from '../components/ui/StatusBadge';
import { indicadoresFisicos, indicadoresConductuales, indicadoresDocumentales } from '../data/indicadores';
import type { CaseStatus } from '../types';
import { toast } from 'sonner';

export default function DetalleCasoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { casos, setCasos, currentUser } = useAppContext();
  const caso = casos.find(c => c.id === id);

  const [activeTab, setActiveTab] = useState<'perfil' | 'indicadores' | 'historial' | 'evidencias' | 'derivacion'>('perfil');
  const [showReopenModal, setShowReopenModal] = useState(false);
  const [reopenJustification, setReopenjustification] = useState('');
  const [newStatus, setNewStatus] = useState<CaseStatus | ''>('');

  if (!caso) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Caso no encontrado.</p>
        <button onClick={() => navigate('/casos')} className="mt-4 text-blue-600 hover:underline text-sm">Volver a Casos</button>
      </div>
    );
  }

  const fisicosPos = indicadoresFisicos.filter(i => caso.indicadores.fisicos[i.id]);
  const conductualesPos = indicadoresConductuales.filter(i => caso.indicadores.conductuales[i.id]);
  const documentalesPos = indicadoresDocumentales.filter(i => caso.indicadores.documentales[i.id]);

  const handleStatusChange = () => {
    if (!newStatus) return;
    const updated = casos.map(c => {
      if (c.id !== id) return c;
      const entry = {
        id: `h${Date.now()}`,
        fecha: new Date().toISOString(),
        usuario: currentUser?.nombre || 'Sistema',
        rol: currentUser?.rol === 'institucion' ? 'Institución Receptora' : 'Agente',
        accion: 'Actualización de estado',
        detalle: `Estado cambiado a: ${newStatus}`,
        institucion: currentUser?.institucion || 'DIGEMIG',
      };
      return { ...c, estado: newStatus, historial: [...c.historial, entry], fechaUltimaActualizacion: new Date().toISOString() };
    });
    setCasos(updated);
    toast.success(`Estado actualizado a: ${newStatus}`);
    setNewStatus('');
  };

  const handleReopen = () => {
    if (!reopenJustification.trim()) { toast.error('Ingrese una justificación para reabrir el caso.'); return; }
    const updated = casos.map(c => {
      if (c.id !== id) return c;
      const entry = {
        id: `h${Date.now()}`,
        fecha: new Date().toISOString(),
        usuario: currentUser?.nombre || 'Sistema',
        rol: 'Supervisor',
        accion: 'Reapertura de caso',
        detalle: `Caso reabierto. Justificación: ${reopenJustification}`,
        institucion: currentUser?.institucion || 'DIGEMIG',
      };
      return { ...c, estado: 'en_proceso' as CaseStatus, historial: [...c.historial, entry], fechaUltimaActualizacion: new Date().toISOString() };
    });
    setCasos(updated);
    toast.success('Caso reabierto exitosamente.');
    setShowReopenModal(false);
    setReopenjustification('');
  };

  const tabs = [
    { id: 'perfil', label: 'Perfil', icon: User },
    { id: 'indicadores', label: 'Indicadores', icon: Shield },
    { id: 'derivacion', label: 'Derivación', icon: Send },
    { id: 'evidencias', label: `Evidencias (${caso.evidencias.length})`, icon: Paperclip },
    { id: 'historial', label: 'Historial', icon: History },
  ] as const;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Back + Header */}
      <div className="flex items-start gap-3">
        <button onClick={() => navigate('/casos')} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors mt-0.5">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-gray-900">{caso.codigo}</h1>
            <RiskBadge level={caso.riesgo} />
            <CaseStatusBadge status={caso.estado} />
          </div>
          <div className="flex items-center gap-4 mt-1.5 flex-wrap text-xs text-gray-500">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {caso.fecha} · {caso.hora}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {caso.puntoControl}, {caso.departamento}</span>
            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {caso.agente}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {caso.estado === 'cerrado' && (currentUser?.rol === 'supervisor' || currentUser?.rol === 'admin') && (
            <button onClick={() => setShowReopenModal(true)} className="flex items-center gap-1.5 px-3 py-2 bg-amber-100 text-amber-700 rounded-lg text-xs hover:bg-amber-200 transition-colors">
              <RotateCcw className="w-3.5 h-3.5" /> Reabrir
            </button>
          )}
          <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-3.5 h-3.5" /> Exportar
          </button>
        </div>
      </div>

      {/* Alert Banner for High Risk */}
      {caso.riesgo === 'alto' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div className="text-sm text-red-700">
            <span className="font-medium">Caso de Riesgo Alto — </span>
            <span>{caso.indicadoresPositivos} indicadores positivos detectados. Derivación interinstitucional activada.</span>
          </div>
        </div>
      )}

      {/* Status Update (for institución/supervisor) */}
      {(currentUser?.rol === 'institucion' || currentUser?.rol === 'supervisor' || currentUser?.rol === 'admin') && caso.estado !== 'cerrado' && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-700">Actualizar Estado del Caso</p>
            <p className="text-xs text-gray-500">Como institución receptora, puede actualizar el progreso.</p>
          </div>
          <div className="flex items-center gap-2">
            <select value={newStatus} onChange={e => setNewStatus(e.target.value as CaseStatus | '')} className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400">
              <option value="">Seleccionar estado...</option>
              <option value="en_proceso">En Proceso</option>
              <option value="derivado">Derivado</option>
              <option value="judicializado">Judicializado</option>
              <option value="cerrado">Cerrado</option>
            </select>
            <button disabled={!newStatus} onClick={handleStatusChange} className="px-4 py-2 bg-[#1B3A6B] text-white rounded-lg text-sm disabled:opacity-40 hover:bg-[#2d5499] transition-colors">
              Actualizar
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-100">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id ? 'border-[#1B3A6B] text-[#1B3A6B] bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-5">
          {/* Tab: Perfil */}
          {activeTab === 'perfil' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Nombre', value: caso.persona.nombre || '— Protegido' },
                  { label: 'Edad', value: caso.persona.edad ? `${caso.persona.edad} años` : 'No determinada' },
                  { label: 'Sexo', value: caso.persona.sexo || 'No determinado' },
                  { label: 'Nacionalidad', value: caso.persona.nacionalidad },
                  { label: 'Tipo Documento', value: caso.persona.documentoTipo || 'No porta documentos' },
                  { label: 'N° Documento', value: caso.persona.documentoNumero || '—' },
                  { label: 'Ocupación', value: caso.persona.ocupacion || '—' },
                  { label: 'Procedencia', value: caso.persona.lugarProcedencia || '—' },
                  { label: 'Destino Declarado', value: caso.persona.destinoDeclarado || '—' },
                  { label: 'Medio Transporte', value: caso.persona.medioTransporte || '—' },
                  { label: 'Acompañantes', value: caso.persona.acompanantes || '—' },
                  { label: 'Modalidad Detectada', value: caso.modalidad },
                ].map((f, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl px-4 py-3">
                    <p className="text-xs text-gray-400">{f.label}</p>
                    <p className="text-sm text-gray-700 mt-0.5 capitalize">{f.value}</p>
                  </div>
                ))}
              </div>
              {caso.observaciones && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs text-amber-600 mb-1">Observaciones del Agente</p>
                  <p className="text-sm text-amber-800">{caso.observaciones}</p>
                </div>
              )}
            </div>
          )}

          {/* Tab: Indicadores */}
          {activeTab === 'indicadores' && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <RiskBadge level={caso.riesgo} size="lg" />
                <span className="text-sm text-gray-600">{caso.indicadoresPositivos} indicadores positivos de {indicadoresFisicos.length + indicadoresConductuales.length + indicadoresDocumentales.length} totales</span>
              </div>
              {[
                { title: 'Indicadores Físicos', items: indicadoresFisicos, positivos: fisicosPos, cat: 'fisicos' as const },
                { title: 'Indicadores Conductuales', items: indicadoresConductuales, positivos: conductualesPos, cat: 'conductuales' as const },
                { title: 'Indicadores Documentales', items: indicadoresDocumentales, positivos: documentalesPos, cat: 'documentales' as const },
              ].map(section => (
                <div key={section.cat}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-gray-700">{section.title}</h3>
                    <span className="text-xs text-gray-500">{section.positivos.length} positivos</span>
                  </div>
                  <div className="space-y-1.5">
                    {section.items.map(ind => {
                      const isPos = !!caso.indicadores[section.cat][ind.id];
                      return (
                        <div key={ind.id} className={`flex items-start gap-3 px-3 py-2.5 rounded-lg ${isPos ? 'bg-red-50 border border-red-100' : 'bg-gray-50'}`}>
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${isPos ? 'bg-red-500' : 'bg-gray-200'}`}>
                            {isPos && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm ${isPos ? 'text-red-800' : 'text-gray-500'}`}>{ind.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Derivación */}
          {activeTab === 'derivacion' && (
            <div className="space-y-4">
              {caso.derivacion ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Send className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">Derivación Activa</p>
                      <p className="text-xs text-gray-500">Creada el {new Date(caso.derivacion.fecha).toLocaleString('es-GT')}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Institución Receptora', value: caso.derivacion.institucion === 'ambas' ? 'Policía Boliviana y Ministerio Público de Bolivia' : caso.derivacion.institucion === 'policia' ? 'Policía Boliviana' : 'Ministerio Público de Bolivia' },
                      { label: 'N° de Oficio', value: caso.derivacion.numeroOficio },
                      { label: 'Funcionario Receptor', value: caso.derivacion.funcionarioReceptor },
                      { label: 'Estado', value: caso.derivacion.estado },
                      { label: 'Notas', value: caso.derivacion.notas },
                      ...(caso.derivacion.fechaRespuesta ? [{ label: 'Fecha de Respuesta', value: new Date(caso.derivacion.fechaRespuesta).toLocaleString('es-GT') }] : []),
                    ].map((f, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-xs text-gray-400">{f.label}</p>
                        <p className="text-sm text-gray-700 mt-0.5 capitalize">{f.value}</p>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-purple-200 bg-purple-50 text-purple-700 rounded-xl text-sm hover:bg-purple-100 transition-colors">
                    <FileText className="w-4 h-4" />
                    Generar Formulario de Derivación (PDF)
                  </button>
                </>
              ) : (
                <div className="text-center py-10 text-gray-400">
                  <Send className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Sin derivación activa</p>
                  <p className="text-xs mt-1">Los casos de riesgo Bajo no requieren derivación automática.</p>
                </div>
              )}
            </div>
          )}

          {/* Tab: Evidencias */}
          {activeTab === 'evidencias' && (
            <div className="space-y-4">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#2d5499] transition-colors">
                <Plus className="w-4 h-4" />
                Adjuntar Evidencia
              </button>
              {caso.evidencias.length > 0 ? (
                <div className="space-y-2">
                  {caso.evidencias.map(ev => (
                    <div key={ev.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${ev.tipo === 'pdf' ? 'bg-red-100' : ev.tipo === 'imagen' ? 'bg-blue-100' : 'bg-green-100'}`}>
                          <FileText className={`w-4 h-4 ${ev.tipo === 'pdf' ? 'text-red-500' : ev.tipo === 'imagen' ? 'text-blue-500' : 'text-green-500'}`} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">{ev.nombre}</p>
                          <p className="text-xs text-gray-400">{ev.tamaño} · Subido por {ev.subidoPor.split(' ')[0]} · {new Date(ev.fecha).toLocaleDateString('es-GT')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Eye className="w-3.5 h-3.5 text-gray-500" /></button>
                        <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Download className="w-3.5 h-3.5 text-gray-500" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-400">
                  <Paperclip className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Sin evidencias adjuntas</p>
                </div>
              )}
            </div>
          )}

          {/* Tab: Historial */}
          {activeTab === 'historial' && (
            <div className="space-y-1">
              {caso.historial.map((entry, i) => (
                <div key={entry.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${entry.rol === 'Sistema' ? 'bg-gray-100' : entry.rol === 'Supervisor' ? 'bg-purple-100' : entry.institucion !== 'DIGEMIG' ? 'bg-teal-100' : 'bg-blue-100'}`}>
                      {entry.rol === 'Sistema' ? <Clock className="w-3.5 h-3.5 text-gray-500" /> : <User className="w-3.5 h-3.5 text-blue-600" />}
                    </div>
                    {i < caso.historial.length - 1 && <div className="w-0.5 bg-gray-100 flex-1 my-1" />}
                  </div>
                  <div className="pb-4 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-gray-800">{entry.accion}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-500">{entry.usuario}</span>
                      <span className="text-xs text-gray-400 ml-auto">{new Date(entry.fecha).toLocaleString('es-GT')}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{entry.detalle}</p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">{entry.institucion}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reopen Modal */}
      {showReopenModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
            <h3 className="text-gray-800 mb-2">Reabrir Caso</h3>
            <p className="text-sm text-gray-500 mb-4">Ingrese la justificación para reabrir este caso cerrado. Quedará registrado en auditoría.</p>
            <textarea
              value={reopenJustification}
              onChange={e => setReopenjustification(e.target.value)}
              rows={4}
              placeholder="Justificación obligatoria..."
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 resize-none mb-4"
            />
            <div className="flex gap-3">
              <button onClick={() => setShowReopenModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">Cancelar</button>
              <button onClick={handleReopen} className="flex-1 py-2.5 bg-amber-500 text-white rounded-xl text-sm hover:bg-amber-600">Reabrir Caso</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
