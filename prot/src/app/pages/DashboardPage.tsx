import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area,
} from 'recharts';
import { FolderOpen, ShieldX, ShieldAlert, ShieldCheck, Send, Scale, TrendingUp, Users, RefreshCw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { statsData, mockUsers } from '../data/mockData';
import { RiskBadge } from '../components/ui/RiskBadge';
import { CaseStatusBadge } from '../components/ui/StatusBadge';
import { useNavigate } from 'react-router';

const RISK_COLORS = { alto: '#DC2626', medio: '#D97706', bajo: '#16A34A' };
const PIE_COLORS = ['#6366F1', '#3B82F6', '#0EA5E9', '#14B8A6', '#8B5CF6'];
const SEX_COLORS = ['#EC4899', '#3B82F6', '#9CA3AF'];

function StatCard({ title, value, icon: Icon, color, sub }: { title: string; value: string | number; icon: React.ElementType; color: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">{title}</p>
          <p className={`text-3xl mt-1 ${color}`}>{value}</p>
          {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
        </div>
        <div className={`p-2.5 rounded-xl ${color === 'text-red-600' ? 'bg-red-50' : color === 'text-amber-600' ? 'bg-amber-50' : color === 'text-green-600' ? 'bg-green-50' : color === 'text-purple-600' ? 'bg-purple-50' : color === 'text-orange-600' ? 'bg-orange-50' : 'bg-blue-50'}`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { casos } = useAppContext();
  const navigate = useNavigate();

  const recentCasos = [...casos].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()).slice(0, 5);

  const customPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return percent > 0.08 ? (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={500}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard title="Total Casos" value={statsData.totalCasos} icon={FolderOpen} color="text-blue-600" sub="Histórico 2026" />
        <StatCard title="Riesgo Alto" value={statsData.casosAlto} icon={ShieldX} color="text-red-600" sub="Requieren acción" />
        <StatCard title="Riesgo Medio" value={statsData.casosMedio} icon={ShieldAlert} color="text-amber-600" sub="En seguimiento" />
        <StatCard title="Riesgo Bajo" value={statsData.casosBajo} icon={ShieldCheck} color="text-green-600" sub="Preventivo" />
        <StatCard title="Derivados" value={statsData.casosDerivados} icon={Send} color="text-purple-600" sub="A PNC / MP" />
        <StatCard title="Judicializados" value={statsData.casosJudicializados} icon={Scale} color="text-orange-600" sub="Con resolución" />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-gray-800">Tendencia de Casos</h3>
              <p className="text-xs text-gray-500">Últimos 6 meses</p>
            </div>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={statsData.casosMes} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCasos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="casos" stroke="#3B82F6" fill="url(#colorCasos)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="mb-4">
            <h3 className="text-gray-800">Modalidades de Trata</h3>
            <p className="text-xs text-gray-500">Distribución porcentual</p>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={statsData.modalidades} cx="50%" cy="50%" outerRadius={70} dataKey="value" labelLine={false} label={customPieLabel}>
                {statsData.modalidades.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1 mt-2">
            {statsData.modalidades.map((m, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                  <span className="text-gray-600 truncate max-w-[140px]">{m.name}</span>
                </span>
                <span className="text-gray-800">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="mb-4">
            <h3 className="text-gray-800">Distribución Semanal por Riesgo</h3>
            <p className="text-xs text-gray-500">Semana actual (Lun–Dom)</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={statsData.tendenciaSemanal} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="dia" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="alto" fill={RISK_COLORS.alto} name="Alto" radius={[2, 2, 0, 0]} />
              <Bar dataKey="medio" fill={RISK_COLORS.medio} name="Medio" radius={[2, 2, 0, 0]} />
              <Bar dataKey="bajo" fill={RISK_COLORS.bajo} name="Bajo" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="mb-4">
            <h3 className="text-gray-800">Víctimas por Sexo</h3>
            <p className="text-xs text-gray-500">Total histórico 2026</p>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={statsData.porSexo} cx="50%" cy="50%" outerRadius={65} innerRadius={30} dataKey="value" labelLine={false} label={customPieLabel}>
                {statsData.porSexo.map((_, i) => (
                  <Cell key={i} fill={SEX_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-3">
            {statsData.porSexo.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SEX_COLORS[i] }} />
                  {s.name}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${(s.value / statsData.totalCasos) * 100}%`, backgroundColor: SEX_COLORS[i] }} />
                  </div>
                  <span className="text-xs text-gray-800 w-6">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departamentos */}
      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
        <div className="mb-4">
          <h3 className="text-gray-800">Casos por Departamento</h3>
          <p className="text-xs text-gray-500">Puntos de mayor incidencia</p>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={statsData.porDepartamento} layout="vertical" margin={{ top: 0, right: 20, left: 60, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="dept" tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="casos" fill="#3B82F6" radius={[0, 4, 4, 0]} name="Casos" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-gray-800">Casos Recientes</h3>
            <p className="text-xs text-gray-500">Últimos registros en el sistema</p>
          </div>
          <button onClick={() => navigate('/casos')} className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
            Ver todos <RefreshCw className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">Código</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Fecha</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Punto de Control</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Riesgo</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Estado</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Agente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentCasos.map(caso => (
                <tr key={caso.id} className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => navigate(`/casos/${caso.id}`)}>
                  <td className="px-5 py-3 text-sm text-blue-600 font-medium">{caso.codigo}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{caso.fecha} {caso.hora}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{caso.puntoControl}</td>
                  <td className="px-4 py-3"><RiskBadge level={caso.riesgo} size="sm" /></td>
                  <td className="px-4 py-3"><CaseStatusBadge status={caso.estado} /></td>
                  <td className="px-4 py-3 text-xs text-gray-600">{caso.agente.split(' ').slice(0, 2).join(' ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <Users className="w-3.5 h-3.5" />
        <span>Sistema conectado · {mockUsers.filter(u => u.activo).length} usuarios activos · Datos sincronizados hace 2 minutos</span>
      </div>
    </div>
  );
}
