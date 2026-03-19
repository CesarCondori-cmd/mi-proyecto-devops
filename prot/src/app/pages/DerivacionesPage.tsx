import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Send, Eye, Filter, Search, Clock, CheckCircle, Building2, Scale } from 'lucide-react';
import { mockDerivaciones } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { RiskBadge } from '../components/ui/RiskBadge';
import { DerivacionStatusBadge } from '../components/ui/StatusBadge';
import type { DerivacionStatus } from '../types';
import { toast } from 'sonner';

const statusOptions: { value: '' | DerivacionStatus; label: string }[] = [
  { value: '', label: 'Todos los estados' },
  { value: 'enviado', label: 'Enviado' },
  { value: 'recibido', label: 'Recibido' },
  { value: 'en_proceso', label: 'En Proceso' },
  { value: 'resuelto', label: 'Resuelto' },
];

const instIcon = (inst: string) => {
  if (inst === 'policia') return <Building2 className="w-4 h-4 text-blue-600" />;
  if (inst === 'fiscalia') return <Scale className="w-4 h-4 text-purple-600" />;
  return (
    <div className="flex gap-0.5">
      <Building2 className="w-3.5 h-3.5 text-blue-600" />
      <Scale className="w-3.5 h-3.5 text-purple-600" />
    </div>
  );
};

const instLabel = (inst: string) => {
  if (inst === 'policia') return 'Policía Boliviana';
  if (inst === 'fiscalia') return 'Ministerio Público de Bolivia';
  return 'Policía Boliviana y Ministerio Público de Bolivia';
};

export default function DerivacionesPage() {
  const navigate = useNavigate();
  const { casos, setCasos, currentUser } = useAppContext();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'' | DerivacionStatus>('');

  const derivaciones = casos
    .filter(c => c.derivacion)
    .map(c => ({ ...c.derivacion!, caso: c }))
    .filter(d => {
      const q = search.toLowerCase();
      const matchSearch = !q || d.casoCodigo.toLowerCase().includes(q) || d.funcionarioReceptor.toLowerCase().includes(q) || d.numeroOficio.toLowerCase().includes(q);
      const matchStatus = !filterStatus || d.estado === filterStatus;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  const handleUpdateStatus = (casoId: string, newStatus: DerivacionStatus) => {
    const updated = casos.map(c => {
      if (c.id !== casoId || !c.derivacion) return c;
      const entry = {
        id: `h${Date.now()}`,
        fecha: new Date().toISOString(),
        usuario: currentUser?.nombre || 'Sistema',
        rol: currentUser?.rol === 'institucion' ? 'Institución Receptora' : 'Agente',
        accion: 'Actualización de derivación',
        detalle: `Estado de derivación actualizado a: ${newStatus}`,
        institucion: currentUser?.institucion || 'DIGEMIG Bolivia',
      };
      return {
        ...c,
        derivacion: { ...c.derivacion, estado: newStatus },
        historial: [...c.historial, entry],
      };
    });
    setCasos(updated);
    toast.success('Estado de derivación actualizado');
  };

  const stats = {
    total: casos.filter(c => c.derivacion).length,
    enviado: casos.filter(c => c.derivacion?.estado === 'enviado').length,
    enProceso: casos.filter(c => c.derivacion?.estado === 'en_proceso').length,
    resuelto: casos.filter(c => c.derivacion?.estado === 'resuelto').length,
  };

  return (
    <div className="space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Derivaciones', value: stats.total, icon: Send, color: 'text-blue-600 bg-blue-50' },
          { label: 'Pendientes', value: stats.enviado, icon: Clock, color: 'text-amber-600 bg-amber-50' },
          { label: 'En Proceso', value: stats.enProceso, icon: Filter, color: 'text-indigo-600 bg-indigo-50' },
          { label: 'Resueltas', value: stats.resuelto, icon: CheckCircle, color: 'text-green-600 bg-green-50' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${s.color.split(' ')[1]}`}>
              <s.icon className={`w-5 h-5 ${s.color.split(' ')[0]}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`text-2xl ${s.color.split(' ')[0]}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por código, oficio, funcionario..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value as '' | DerivacionStatus)}
          className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400"
        >
          {statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Derivations List */}
      <div className="space-y-3">
        {derivaciones.map(d => {
          const riskLevel = d.caso.riesgo;
          return (
            <div key={d.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-all">
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <button
                        onClick={() => navigate(`/casos/${d.casoId}`)}
                        className="text-blue-700 font-medium text-sm hover:text-blue-900 hover:underline"
                      >
                        {d.casoCodigo}
                      </button>
                      <RiskBadge level={riskLevel} size="sm" />
                      <DerivacionStatusBadge status={d.estado} />
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        {instIcon(d.institucion)}
                        {instLabel(d.institucion)}
                      </span>
                      <span>Oficio: {d.numeroOficio}</span>
                      <span>Funcionario: {d.funcionarioReceptor}</span>
                      <span>Fecha: {new Date(d.fecha).toLocaleDateString('es-GT')}</span>
                    </div>

                    {d.notas && (
                      <p className="text-xs text-gray-500 mt-2 italic">{d.notas}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => navigate(`/casos/${d.casoId}`)}
                      className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      title="Ver caso"
                    >
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Status Update Actions for instituciones */}
                {(currentUser?.rol === 'institucion' || currentUser?.rol === 'supervisor' || currentUser?.rol === 'admin') && d.estado !== 'resuelto' && (
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                    <p className="text-xs text-gray-500 mr-auto">Actualizar estado:</p>
                    {(['recibido', 'en_proceso', 'resuelto'] as DerivacionStatus[])
                      .filter(s => s !== d.estado)
                      .map(s => (
                        <button
                          key={s}
                          onClick={() => handleUpdateStatus(d.casoId, s)}
                          className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors capitalize"
                        >
                          {s === 'recibido' ? 'Confirmar Recepción' : s === 'en_proceso' ? 'En Proceso' : 'Marcar Resuelto'}
                        </button>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {derivaciones.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
            <Send className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm text-gray-400">No se encontraron derivaciones.</p>
          </div>
        )}
      </div>
    </div>
  );
}
