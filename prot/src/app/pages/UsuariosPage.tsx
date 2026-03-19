import { useState } from 'react';
import { Search, Plus, Edit2, Power, Shield, UserCheck, Building, Key, X, Check } from 'lucide-react';
import { mockUsers } from '../data/mockData';
import type { User, UserRole } from '../types';
import { toast } from 'sonner';

const rolLabels: Record<UserRole, string> = {
  agente: 'Agente Migratorio',
  supervisor: 'Supervisor/a',
  institucion: 'Institución Receptora',
  admin: 'Admin TI',
};

const rolColors: Record<UserRole, string> = {
  agente: 'bg-blue-100 text-blue-700',
  supervisor: 'bg-purple-100 text-purple-700',
  institucion: 'bg-teal-100 text-teal-700',
  admin: 'bg-orange-100 text-orange-700',
};

const permissions: Record<UserRole, string[]> = {
  agente: ['Registrar casos', 'Ver sus propios casos', 'Adjuntar evidencias', 'Trabajar offline'],
  supervisor: ['Todo lo del Agente', 'Ver todos los casos', 'Reabrir casos cerrados', 'Generar reportes', 'Ver auditoría'],
  institucion: ['Ver casos derivados', 'Actualizar estado de casos', 'Adjuntar evidencias', 'Ver derivaciones'],
  admin: ['Acceso completo', 'Gestión de usuarios', 'Configuración del sistema', 'Logs de auditoría completos'],
};

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState<'' | UserRole>('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [showPermsUser, setShowPermsUser] = useState<User | null>(null);

  // New user form
  const [formData, setFormData] = useState({ nombre: '', email: '', rol: 'agente' as UserRole, institucion: 'DIGEMIG Bolivia', cargo: '' });

  const filtered = users.filter(u => {
    const q = search.toLowerCase();
    const match = !q || u.nombre.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.institucion.toLowerCase().includes(q);
    const matchRole = !filterRole || u.rol === filterRole;
    return match && matchRole;
  });

  const handleToggleActive = (id: string) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, activo: !u.activo } : u));
    const u = users.find(u => u.id === id);
    toast.success(`Usuario ${u?.activo ? 'desactivado' : 'activado'}`);
  };

  const handleAddUser = () => {
    if (!formData.nombre || !formData.email) { toast.error('Complete los campos obligatorios'); return; }
    const newUser: User = {
      id: `u${Date.now()}`,
      ...formData,
      activo: true,
      ultimoAcceso: 'Nunca',
      fechaCreacion: new Date().toISOString().split('T')[0],
    };
    setUsers(prev => [...prev, newUser]);
    toast.success('Usuario creado exitosamente');
    setShowAddModal(false);
    setFormData({ nombre: '', email: '', rol: 'agente', institucion: 'DIGEMIG Bolivia', cargo: '' });
  };

  const activeCount = users.filter(u => u.activo).length;

  return (
    <div className="space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500">Total Usuarios</p>
          <p className="text-2xl text-blue-600 mt-0.5">{users.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500">Activos</p>
          <p className="text-2xl text-green-600 mt-0.5">{activeCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500">Inactivos</p>
          <p className="text-2xl text-red-500 mt-0.5">{users.length - activeCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500">Instituciones</p>
          <p className="text-2xl text-purple-600 mt-0.5">{new Set(users.map(u => u.institucion)).size}</p>
        </div>
      </div>

      {/* Search + Add */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400"
          />
        </div>
        <select value={filterRole} onChange={e => setFilterRole(e.target.value as '' | UserRole)} className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
          <option value="">Todos los roles</option>
          {(Object.keys(rolLabels) as UserRole[]).map(r => <option key={r} value={r}>{rolLabels[r]}</option>)}
        </select>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2.5 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#2d5499] transition-colors whitespace-nowrap">
          <Plus className="w-4 h-4" /> Nuevo Usuario
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">Usuario</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Rol</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Institución</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Último Acceso</th>
                <th className="text-left px-4 py-3 text-xs text-gray-500 uppercase tracking-wide">Estado</th>
                <th className="text-right px-5 py-3 text-xs text-gray-500 uppercase tracking-wide">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(u => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${rolColors[u.rol].replace('text-', 'text-white bg-').split(' ')[0].replace('bg-', 'bg-').replace('-100', '-500')}`}
                        style={{ background: u.rol === 'agente' ? '#3B82F6' : u.rol === 'supervisor' ? '#8B5CF6' : u.rol === 'institucion' ? '#14B8A6' : '#F97316' }}>
                        {u.nombre.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">{u.nombre}</p>
                        <p className="text-xs text-gray-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${rolColors[u.rol]}`}>{rolLabels[u.rol]}</span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-xs text-gray-700">{u.institucion}</p>
                    <p className="text-xs text-gray-400">{u.cargo}</p>
                  </td>
                  <td className="px-4 py-4 text-xs text-gray-500">
                    {u.ultimoAcceso === 'Nunca' ? 'Nunca' : new Date(u.ultimoAcceso).toLocaleString('es-GT')}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${u.activo ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                      {u.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button onClick={() => setShowPermsUser(u)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" title="Ver permisos">
                        <Shield className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                      <button onClick={() => setEditUser(u)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" title="Editar">
                        <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                      <button onClick={() => handleToggleActive(u.id)} className={`p-1.5 rounded-lg transition-colors ${u.activo ? 'hover:bg-red-50' : 'hover:bg-green-50'}`} title={u.activo ? 'Desactivar' : 'Activar'}>
                        <Power className={`w-3.5 h-3.5 ${u.activo ? 'text-red-400' : 'text-green-500'}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden divide-y divide-gray-50">
          {filtered.map(u => (
            <div key={u.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-medium"
                  style={{ background: u.rol === 'agente' ? '#3B82F6' : u.rol === 'supervisor' ? '#8B5CF6' : u.rol === 'institucion' ? '#14B8A6' : '#F97316' }}>
                  {u.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-gray-800">{u.nombre}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${rolColors[u.rol]}`}>{rolLabels[u.rol]}</span>
                </div>
              </div>
              <button onClick={() => handleToggleActive(u.id)} className={`w-8 h-4 rounded-full relative transition-colors ${u.activo ? 'bg-green-500' : 'bg-gray-300'}`}>
                <div className={`absolute w-3 h-3 bg-white rounded-full top-0.5 transition-transform ${u.activo ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-gray-800">Nuevo Usuario</h3>
              <button onClick={() => setShowAddModal(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Nombre Completo *</label>
                <input value={formData.nombre} onChange={e => setFormData(p => ({ ...p, nombre: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" placeholder="Nombre completo" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Correo Institucional *</label>
                <input value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" placeholder="usuario@institucion.gob.gt" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Rol *</label>
                <select value={formData.rol} onChange={e => setFormData(p => ({ ...p, rol: e.target.value as UserRole }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  {(Object.keys(rolLabels) as UserRole[]).map(r => <option key={r} value={r}>{rolLabels[r]}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Institución</label>
                <select value={formData.institucion} onChange={e => setFormData(p => ({ ...p, institucion: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400">
                  <option value="DIGEMIG">DIGEMIG</option>
                  <option value="Policía Nacional Civil">Policía Nacional Civil</option>
                  <option value="Ministerio Público">Ministerio Público</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Cargo</label>
                <input value={formData.cargo} onChange={e => setFormData(p => ({ ...p, cargo: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400" placeholder="Cargo o puesto" />
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                <p className="text-xs text-blue-700"><Key className="w-3 h-3 inline mr-1" />Se enviará correo con credenciales temporales al usuario.</p>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAddModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600">Cancelar</button>
              <button onClick={handleAddUser} className="flex-1 py-2.5 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#2d5499] flex items-center justify-center gap-2">
                <Check className="w-4 h-4" /> Crear Usuario
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Permissions Modal */}
      {showPermsUser && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-gray-800">{showPermsUser.nombre.split(' ').slice(0, 2).join(' ')}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${rolColors[showPermsUser.rol]}`}>{rolLabels[showPermsUser.rol]}</span>
              </div>
              <button onClick={() => setShowPermsUser(null)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            <p className="text-xs text-gray-500 mb-3">Permisos asignados a este rol:</p>
            <ul className="space-y-2">
              {permissions[showPermsUser.rol].map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowPermsUser(null)} className="w-full mt-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm hover:bg-gray-200">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
