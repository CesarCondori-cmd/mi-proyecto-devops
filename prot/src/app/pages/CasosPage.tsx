import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, Plus, ChevronDown, Eye, MapPin, Calendar, User, RefreshCw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RiskBadge } from '../components/ui/RiskBadge';
import { CaseStatusBadge } from '../components/ui/StatusBadge';
import type { RiskLevel, CaseStatus } from '../types';

const statusOptions: { value: '' | CaseStatus; label: string }[] = [
  { value: '', label: 'Todos los estados' },
  { value: 'nuevo', label: 'Nuevo' },
  { value: 'en_proceso', label: 'En Proceso' },
  { value: 'derivado', label: 'Derivado' },
  { value: 'judicializado', label: 'Judicializado' },
  { value: 'cerrado', label: 'Cerrado' },
];

const riskOptions: { value: '' | RiskLevel; label: string }[] = [
  { value: '', label: 'Todos los riesgos' },
  { value: 'alto', label: 'Alto' },
  { value: 'medio', label: 'Medio' },
  { value: 'bajo', label: 'Bajo' },
];

export default function CasosPage() {
  const { casos } = useAppContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'' | CaseStatus>('');
  const [filterRisk, setFilterRisk] = useState<'' | RiskLevel>('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'fecha' | 'riesgo' | 'estado'>('fecha');

  const filtered = casos
    .filter(c => {
      const q = search.toLowerCase();
      const matchSearch = !q || c.codigo.toLowerCase().includes(q) || c.puntoControl.toLowerCase().includes(q) || c.agente.toLowerCase().includes(q) || c.persona.nombre?.toLowerCase().includes(q);
      const matchStatus = !filterStatus || c.estado === filterStatus;
      const matchRisk = !filterRisk || c.riesgo === filterRisk;
      return matchSearch && matchStatus && matchRisk;
    })
    .sort((a, b) => {
      if (sortBy === 'fecha') return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      if (sortBy === 'riesgo') {
        const order = { alto: 0, medio: 1, bajo: 2 };
        return order[a.riesgo] - order[b.riesgo];
      }
      return a.estado.localeCompare(b.estado);
    });

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative flex-1 w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por código, punto, agente..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3 py-2.5 border rounded-xl text-sm transition-colors ${showFilters ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            <Filter className="w-4 h-4" />
            Filtros
            {(filterStatus || filterRisk) && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
          </button>
          <button
            onClick={() => navigate('/casos/nuevo')}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1B3A6B] hover:bg-[#2d5499] text-white rounded-xl text-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nuevo Caso
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Estado del Caso</label>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value as '' | CaseStatus)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400"
            >
              {statusOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Nivel de Riesgo</label>
            <select
              value={filterRisk}
              onChange={e => setFilterRisk(e.target.value as '' | RiskLevel)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400"
            >
              {riskOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Ordenar por</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400"
            >
              <option value="fecha">Fecha (más reciente)</option>
              <option value="riesgo">Nivel de Riesgo</option>
              <option value="estado">Estado</option>
            </select>
          </div>
        </div>
      )}

      {/* Summary chips */}
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span>{filtered.length} caso{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</span>
        {(filterStatus || filterRisk || search) && (
          <button
            onClick={() => { setSearch(''); setFilterStatus(''); setFilterRisk(''); }}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Limpiar filtros
          </button>
        )}
      </div>

      {/* Cases Table - Desktop */}
      <div className="hidden md:block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">
                <button className="flex items-center gap-1 hover:text-gray-700" onClick={() => setSortBy('fecha')}>
                  Código / Fecha <ChevronDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Punto de Control</th>
              <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Modalidad</th>
              <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">
                <button className="flex items-center gap-1 hover:text-gray-700" onClick={() => setSortBy('riesgo')}>
                  Riesgo <ChevronDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">
                <button className="flex items-center gap-1 hover:text-gray-700" onClick={() => setSortBy('estado')}>
                  Estado <ChevronDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Agente</th>
              <th className="text-right px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(caso => (
              <tr key={caso.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-5 py-4">
                  <p className="text-sm text-blue-700 font-medium">{caso.codigo}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{caso.fecha} · {caso.hora}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-gray-700">{caso.puntoControl}</p>
                  <p className="text-xs text-gray-400">{caso.departamento}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-xs text-gray-600">{caso.modalidad}</p>
                </td>
                <td className="px-4 py-4">
                  <RiskBadge level={caso.riesgo} size="sm" />
                  <p className="text-xs text-gray-400 mt-1">{caso.indicadoresPositivos} indicadores</p>
                </td>
                <td className="px-4 py-4">
                  <CaseStatusBadge status={caso.estado} />
                </td>
                <td className="px-4 py-4">
                  <p className="text-xs text-gray-700">{caso.agente.split(' ').slice(0, 2).join(' ')}</p>
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => navigate(`/casos/${caso.id}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B3A6B] text-white text-xs rounded-lg hover:bg-[#2d5499] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Eye className="w-3.5 h-3.5" /> Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No se encontraron casos con los filtros aplicados.</p>
          </div>
        )}
      </div>

      {/* Cases Cards - Mobile */}
      <div className="md:hidden space-y-3">
        {filtered.map(caso => (
          <div
            key={caso.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 cursor-pointer hover:border-blue-200 transition-all"
            onClick={() => navigate(`/casos/${caso.id}`)}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-blue-700 font-medium">{caso.codigo}</p>
                <p className="text-xs text-gray-400">{caso.fecha} · {caso.hora}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <RiskBadge level={caso.riesgo} size="sm" />
                <CaseStatusBadge status={caso.estado} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {caso.puntoControl}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {caso.departamento}</span>
              <span className="flex items-center gap-1 col-span-2"><User className="w-3 h-3" /> {caso.agente}</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-sm">No se encontraron casos.</p>
          </div>
        )}
      </div>
    </div>
  );
}
