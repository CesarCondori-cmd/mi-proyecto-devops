import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line,
} from 'recharts';
import { Download, FileText, BarChart2, TrendingUp, Filter, Calendar } from 'lucide-react';
import { statsData } from '../data/mockData';
import { toast } from 'sonner';

const COLORS_RISK = ['#DC2626', '#D97706', '#16A34A'];
const COLORS_MOD = ['#6366F1', '#3B82F6', '#0EA5E9', '#14B8A6', '#8B5CF6'];
const COLORS_SEX = ['#EC4899', '#3B82F6', '#9CA3AF'];

const monthlyDetailData = [
  { mes: 'Ene', alto: 4, medio: 5, bajo: 2, total: 11 },
  { mes: 'Feb', alto: 5, medio: 6, bajo: 3, total: 14 },
  { mes: 'Mar', alto: 3, medio: 3, bajo: 2, total: 8 },
];

const tendenciaModalidades = [
  { mes: 'Oct', sexual: 3, trabajo: 2, servdomestica: 1 },
  { mes: 'Nov', sexual: 5, trabajo: 3, servdomestica: 1 },
  { mes: 'Dic', sexual: 4, trabajo: 2, servdomestica: 1 },
  { mes: 'Ene', sexual: 5, trabajo: 4, servdomestica: 2 },
  { mes: 'Feb', sexual: 7, trabajo: 5, servdomestica: 2 },
  { mes: 'Mar', sexual: 4, trabajo: 3, servdomestica: 1 },
];

export default function ReportesPage() {
  const [periodoInicio, setPeriodoInicio] = useState('2026-01-01');
  const [periodoFin, setPeriodoFin] = useState('2026-03-31');
  const [activeReport, setActiveReport] = useState('estadistico');

  const handleExport = (tipo: string) => {
    toast.success(`Reporte ${tipo} generado y descargado.`);
  };

  const riskDistData = [
    { name: 'Alto', value: statsData.casosAlto },
    { name: 'Medio', value: statsData.casosMedio },
    { name: 'Bajo', value: statsData.casosBajo },
  ];

  return (
    <div className="space-y-5">
      {/* Period + Actions */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <label className="text-sm text-gray-600">Desde:</label>
              <input type="date" value={periodoInicio} onChange={e => setPeriodoInicio(e.target.value)} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Hasta:</label>
              <input type="date" value={periodoFin} onChange={e => setPeriodoFin(e.target.value)} className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400" />
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1B3A6B] text-white rounded-lg text-sm hover:bg-[#2d5499] transition-colors">
              <Filter className="w-3.5 h-3.5" /> Aplicar
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleExport('PDF')} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <FileText className="w-3.5 h-3.5" /> PDF
            </button>
            <button onClick={() => handleExport('CSV')} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-3.5 h-3.5" /> CSV
            </button>
          </div>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {[
          { id: 'estadistico', label: 'Resumen Estadístico', icon: BarChart2 },
          { id: 'tendencias', label: 'Tendencias', icon: TrendingUp },
          { id: 'indicadores', label: 'Indicadores Clave', icon: FileText },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveReport(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm whitespace-nowrap transition-colors ${activeReport === tab.id ? 'bg-[#1B3A6B] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeReport === 'estadistico' && (
        <div className="space-y-4">
          {/* Summary KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Total Casos', value: statsData.totalCasos, sub: 'Ene–Mar 2026', color: 'text-blue-600' },
              { label: 'Tasa Derivación', value: `${Math.round((statsData.casosDerivados / statsData.totalCasos) * 100)}%`, sub: 'Casos derivados', color: 'text-purple-600' },
              { label: 'Tasa Judicialización', value: `${Math.round((statsData.casosJudicializados / statsData.casosDerivados) * 100)}%`, sub: 'De los derivados', color: 'text-orange-600' },
              { label: 'Riesgo Alto', value: `${Math.round((statsData.casosAlto / statsData.totalCasos) * 100)}%`, sub: 'Del total', color: 'text-red-600' },
            ].map((k, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500">{k.label}</p>
                <p className={`text-2xl mt-0.5 ${k.color}`}>{k.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Risk Distribution */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-gray-800 mb-1">Distribución por Nivel de Riesgo</h3>
              <p className="text-xs text-gray-500 mb-4">Total del período</p>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={riskDistData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`} labelLine={{ stroke: '#9CA3AF', strokeWidth: 1 }}>
                    {riskDistData.map((_, i) => <Cell key={i} fill={COLORS_RISK[i]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Modalidades */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-gray-800 mb-1">Casos por Modalidad</h3>
              <p className="text-xs text-gray-500 mb-4">Tipos de trata detectados</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={statsData.modalidades} margin={{ left: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="value" name="Casos" radius={[4, 4, 0, 0]}>
                    {statsData.modalidades.map((_, i) => <Cell key={i} fill={COLORS_MOD[i % COLORS_MOD.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-gray-800 mb-1">Detalle Mensual por Nivel de Riesgo</h3>
            <p className="text-xs text-gray-500 mb-4">Enero – Marzo 2026</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyDetailData} margin={{ left: -10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="alto" fill="#DC2626" name="Alto" radius={[2, 2, 0, 0]} />
                <Bar dataKey="medio" fill="#D97706" name="Medio" radius={[2, 2, 0, 0]} />
                <Bar dataKey="bajo" fill="#16A34A" name="Bajo" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Dept + Sex */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-gray-800 mb-4">Por Departamento</h3>
              <div className="space-y-2">
                {statsData.porDepartamento.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-28 shrink-0">{d.dept}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="h-2 rounded-full bg-[#1B3A6B]" style={{ width: `${(d.casos / 14) * 100}%` }} />
                    </div>
                    <span className="text-xs text-gray-700 w-6 text-right">{d.casos}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-gray-800 mb-4">Por Sexo de Víctima</h3>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={statsData.porSexo} cx="50%" cy="50%" outerRadius={65} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={{ stroke: '#9CA3AF' }}>
                    {statsData.porSexo.map((_, i) => <Cell key={i} fill={COLORS_SEX[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {activeReport === 'tendencias' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-gray-800 mb-1">Tendencia de Casos por Mes</h3>
            <p className="text-xs text-gray-500 mb-4">Evolución octubre 2025 – marzo 2026</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={statsData.casosMes} margin={{ left: -10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="casos" stroke="#1B3A6B" strokeWidth={2.5} dot={{ r: 4, fill: '#1B3A6B' }} name="Casos" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-gray-800 mb-1">Tendencia por Modalidad</h3>
            <p className="text-xs text-gray-500 mb-4">Principales modalidades en el tiempo</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={tendenciaModalidades} margin={{ left: -10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="sexual" stroke="#6366F1" strokeWidth={2} name="Explot. Sexual" />
                <Line type="monotone" dataKey="trabajo" stroke="#3B82F6" strokeWidth={2} name="Trabajo Forzado" />
                <Line type="monotone" dataKey="servdomestica" stroke="#14B8A6" strokeWidth={2} name="Serv. Doméstica" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeReport === 'indicadores' && (
        <div className="space-y-4">
          {/* Key Indicators Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-gray-800">Indicadores Clave de Desempeño</h3>
              <p className="text-xs text-gray-500">Período: {periodoInicio} al {periodoFin}</p>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase">Indicador</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase">Valor</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase">Meta</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { indicador: 'Casos registrados', valor: statsData.totalCasos, meta: 50, unidad: 'casos' },
                  { indicador: 'Tasa de derivación (riesgo alto)', valor: 100, meta: 100, unidad: '%' },
                  { indicador: 'Tiempo promedio de registro', valor: 12, meta: 15, unidad: 'min' },
                  { indicador: 'Casos judicializados', valor: statsData.casosJudicializados, meta: 10, unidad: 'casos' },
                  { indicador: 'Disponibilidad del sistema', valor: 99.8, meta: 99.5, unidad: '%' },
                  { indicador: 'Registros offline sincronizados', valor: 3, meta: 0, unidad: 'pendientes' },
                ].map((row, i) => {
                  const isGood = row.indicador.includes('pendientes') ? row.valor <= row.meta : row.valor >= row.meta;
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-5 py-3 text-sm text-gray-700">{row.indicador}</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-medium">{row.valor} {row.unidad}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.meta} {row.unidad}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${isGood ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                          {isGood ? '✓ Cumplido' : '⚠ Por mejorar'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
            <p className="font-medium mb-1">Nota metodológica</p>
            <p className="text-xs text-blue-600">Los indicadores son generados automáticamente en base a los datos registrados en el sistema. Para exportar el reporte completo en formato PDF o CSV use los botones de exportación. Los datos son de uso interno y confidencial.</p>
          </div>
        </div>
      )}
    </div>
  );
}
