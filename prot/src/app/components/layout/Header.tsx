import { Menu, Bell, Search, ChevronDown } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { setSidebarOpen, sidebarOpen, currentUser } = useAppContext();
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { id: 1, text: 'Caso BOL-2026-005 requiere derivación', time: 'hace 5 min', type: 'warning' },
    { id: 2, text: 'Policía Boliviana confirmó recepción de caso BOL-2026-002', time: 'hace 1 hora', type: 'success' },
    { id: 3, text: 'Caso BOL-2026-004 judicializado por Ministerio Público de Bolivia', time: 'hace 2 horas', type: 'info' },
  ];

  const roleColors: Record<string, string> = {
    agente: 'bg-blue-500',
    supervisor: 'bg-purple-500',
    institucion: 'bg-teal-500',
    admin: 'bg-orange-500',
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors hidden lg:block"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      <div className="flex-1 min-w-0">
        <h1 className="text-base text-gray-900 truncate">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 truncate">{subtitle}</p>}
      </div>

      <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar caso, código..."
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-44"
        />
      </div>

      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {notifOpen && (
          <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm text-gray-800">Notificaciones</p>
              <p className="text-xs text-gray-500">{notifications.length} sin leer</p>
            </div>
            <div className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
              {notifications.map(n => (
                <div key={n.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${n.type === 'warning' ? 'bg-amber-500' : n.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                    <div>
                      <p className="text-xs text-gray-700">{n.text}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-gray-100">
              <button
                onClick={() => setNotifOpen(false)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Marcar todo como leído
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Menu */}
      {currentUser && (
        <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
          <div className={`w-8 h-8 rounded-full ${roleColors[currentUser.rol] || 'bg-gray-400'} flex items-center justify-center text-white text-sm shrink-0`}>
            {currentUser.nombre.charAt(0)}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-gray-800 leading-tight">{currentUser.nombre.split(' ').slice(0, 2).join(' ')}</p>
            <p className="text-[10px] text-gray-500">{currentUser.institucion}</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:block" />
        </div>
      )}
    </header>
  );
}