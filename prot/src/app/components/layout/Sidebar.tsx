import { NavLink, useNavigate } from 'react-router';
import {
  LayoutDashboard, FolderOpen, FilePlus, Send,
  Users, Shield, BarChart2, X, LogOut,
  ChevronRight, Wifi, WifiOff, RefreshCw,
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import type { UserRole } from '../../types';

interface NavItem {
  to: string;
  icon: React.ElementType;
  label: string;
  roles: UserRole[];
  badge?: number;
}

const navItems: NavItem[] = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['agente', 'supervisor', 'institucion', 'admin'] },
  { to: '/casos', icon: FolderOpen, label: 'Gestión de Casos', roles: ['agente', 'supervisor', 'admin'] },
  { to: '/casos/nuevo', icon: FilePlus, label: 'Nuevo Caso', roles: ['agente', 'supervisor', 'admin'] },
  { to: '/derivaciones', icon: Send, label: 'Derivaciones', roles: ['agente', 'supervisor', 'institucion', 'admin'] },
  { to: '/reportes', icon: BarChart2, label: 'Reportes', roles: ['supervisor', 'admin'] },
  { to: '/usuarios', icon: Users, label: 'Usuarios', roles: ['admin'] },
  { to: '/auditoria', icon: Shield, label: 'Auditoría', roles: ['admin', 'supervisor'] },
];

export function Sidebar() {
  const { currentUser, setSidebarOpen, offlineMode, pendingSync } = useAppContext();
  const navigate = useNavigate();

  const visibleItems = navItems.filter(item =>
    currentUser ? item.roles.includes(currentUser.rol) : false
  );

  const handleLogout = () => {
    setSidebarOpen(false);
    navigate('/');
  };

  const roleLabels: Record<string, string> = {
    agente: 'Agente Migratorio',
    supervisor: 'Supervisora/Supervisor',
    institucion: 'Institución Receptora',
    admin: 'Administrador/a TI',
  };

  return (
    <aside className="flex flex-col h-full bg-[#1B3A6B] text-white">
      {/* Logo Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#2d5499]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0">
            <span className="text-[#1B3A6B] text-xs font-black leading-tight text-center">DIG</span>
          </div>
          <div>
            <p className="text-xs font-black tracking-wider text-blue-200 uppercase">DIGEMIG</p>
            <p className="text-[10px] text-blue-300 leading-tight">Sistema de Trata</p>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-1 rounded hover:bg-[#2d5499] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* User Info */}
      {currentUser && (
        <div className="px-4 py-3 border-b border-[#2d5499]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#3B7DD8] flex items-center justify-center text-sm font-semibold shrink-0">
              {currentUser.nombre.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-sm text-white truncate">{currentUser.nombre.split(' ').slice(0, 2).join(' ')}</p>
              <p className="text-[11px] text-blue-300 truncate">{roleLabels[currentUser.rol]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Offline Indicator */}
      {offlineMode && (
        <div className="mx-3 mt-3 px-3 py-2 bg-amber-500/20 border border-amber-500/40 rounded-lg">
          <div className="flex items-center gap-2">
            <WifiOff className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <div>
              <p className="text-xs text-amber-200">Modo Offline</p>
              <p className="text-[10px] text-amber-300">{pendingSync} registros pendientes</p>
            </div>
          </div>
        </div>
      )}

      {!offlineMode && (
        <div className="mx-3 mt-3 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Wifi className="w-3 h-3 text-green-400" />
            <span className="text-[11px] text-green-300">En línea · Sincronizado</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
        <p className="text-[10px] uppercase tracking-widest text-blue-400 px-2 py-1 mb-1">Menú Principal</p>
        {visibleItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => { if (window.innerWidth < 1024) setSidebarOpen(false); }}
            className={({ isActive }) =>
              `flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group
              ${isActive
                ? 'bg-white text-[#1B3A6B] font-medium shadow-sm'
                : 'text-blue-200 hover:bg-[#2d5499] hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-3">
                  <item.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#1B3A6B]' : ''}`} />
                  {item.label}
                </span>
                {isActive
                  ? <ChevronRight className="w-3 h-3 text-[#1B3A6B]/60" />
                  : item.badge
                    ? <span className="bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{item.badge}</span>
                    : null
                }
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4 space-y-1 border-t border-[#2d5499] pt-3">
        {pendingSync > 0 && !offlineMode && (
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-blue-200 hover:bg-[#2d5499] transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span>Sincronizar ({pendingSync})</span>
          </button>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-red-300 hover:bg-red-900/30 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>
        <p className="text-[10px] text-blue-500 px-3 pt-1">
          DIGEMIG v1.0.0 · Software Libre
        </p>
      </div>
    </aside>
  );
}