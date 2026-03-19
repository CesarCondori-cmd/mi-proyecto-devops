import { useState } from 'react';
import { Search, Shield, Filter, Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import { mockAuditLogs } from '../data/mockData';

const moduleColors: Record<string, string> = {
  Autenticación: 'bg-blue-100 text-blue-700',
  Casos: 'bg-indigo-100 text-indigo-700',
  Derivaciones: 'bg-purple-100 text-purple-700',
  Usuarios: 'bg-orange-100 text-orange-700',
  Reportes: 'bg-teal-100 text-teal-700',
  Sistema: 'bg-gray-100 text-gray-600',
};

export default function AuditoriaPage() {
  const [search, setSearch] = useState('');
  const [filterModule, setFilterModule] = useState('');
  const [filterResult, setFilterResult] = useState<'' | 'exitoso' | 'fallido'>('');

  const modules = [...new Set(mockAuditLogs.map(l => l.modulo))];

  const filtered = mockAuditLogs.filter(log => {
    const q = search.toLowerCase();
    const matchSearch = !q || log.usuario.toLowerCase().includes(q) || log.accion.toLowerCase().includes(q) || log.recurso.toLowerCase().includes(q) || log.detalle.toLowerCase().includes(q);
    const matchModule = !filterModule || log.modulo === filterModule;
    const matchResult = !filterResult || log.resultado === filterResult;
    return matchSearch && matchModule && matchResult;
  });

  return (
    <div className="space-y-5">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
        <Shield className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-blue-800 font-medium">Logs de Auditoría Inalterable</p>
          <p className="text-xs text-blue-600 mt-1">Todas las acciones son registradas automáticamente y almacenadas por un período mínimo de 10 años conforme a la normativa institucional. Los registros no pueden modificarse.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <Clock className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-xs text-gray-500">Total Registros</p>
            <p className="text-2xl text-blue-600">{mockAuditLogs.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-xs text-gray-500">Exitosas</p>
            <p className="text-2xl text-green-600">{mockAuditLogs.filter(l => l.resultado === 'exitoso').length}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <XCircle className="w-5 h-5 text-red-500" />
          <div>
            <p className="text-xs text-gray-500">Fallidas</p>
            <p className="text-2xl text-red-600">{mockAuditLogs.filter(l => l.resultado === 'fallido').length}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por usuario, acción, recurso..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400"
          />
        </div>
        <select value={filterModule} onChange={e => setFilterModule(e.target.value)} className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
          <option value="">Todos los módulos</option>
          {modules.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select value={filterResult} onChange={e => setFilterResult(e.target.value as '' | 'exitoso' | 'fallido')} className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
          <option value="">Todos los resultados</option>
          <option value="exitoso">Exitoso</option>
          <option value="fallido">Fallido</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap">
          <Download className="w-4 h-4" /> Exportar CSV
        </button>
      </div>

      {/* Audit Log Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">Fecha/Hora</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Usuario</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Módulo</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Acción</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Recurso</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">IP</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(log => (
                <tr key={log.id} className={`hover:bg-gray-50 transition-colors ${log.resultado === 'fallido' ? 'bg-red-50/30' : ''}`}>
                  <td className="px-5 py-3">
                    <p className="text-xs text-gray-800">{log.fecha}</p>
                    <p className="text-xs text-gray-400">{log.hora}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs text-gray-700 truncate max-w-[160px]">{log.usuario}</p>
                    <p className="text-xs text-gray-400">{log.rol}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${moduleColors[log.modulo] || 'bg-gray-100 text-gray-600'}`}>{log.modulo}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700">{log.accion}</td>
                  <td className="px-4 py-3 text-xs text-gray-500 truncate max-w-[160px]">{log.recurso}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 font-mono">{log.ip}</td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1 text-xs font-medium ${log.resultado === 'exitoso' ? 'text-green-600' : 'text-red-600'}`}>
                      {log.resultado === 'exitoso' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {log.resultado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="lg:hidden divide-y divide-gray-50">
          {filtered.map(log => (
            <div key={log.id} className={`p-4 ${log.resultado === 'fallido' ? 'bg-red-50/40' : ''}`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-gray-700 font-medium">{log.accion}</p>
                  <p className="text-xs text-gray-500">{log.usuario}</p>
                </div>
                <span className={`flex items-center gap-1 text-xs font-medium ${log.resultado === 'exitoso' ? 'text-green-600' : 'text-red-600'}`}>
                  {log.resultado === 'exitoso' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-xs px-2 py-0.5 rounded-full ${moduleColors[log.modulo] || 'bg-gray-100 text-gray-600'}`}>{log.modulo}</span>
                <span className="text-xs text-gray-400">{log.fecha} {log.hora}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{log.detalle}</p>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Filter className="w-6 h-6 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No se encontraron registros con los filtros aplicados.</p>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-400 text-center">Mostrando {filtered.length} de {mockAuditLogs.length} registros · Período de retención: 10 años · Cifrado: AES-256</p>
    </div>
  );
}
