import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useAppContext } from '../../context/AppContext';
import { useLocation } from 'react-router';

const pageTitles: Record<string, { title: string; subtitle?: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Resumen ejecutivo del sistema' },
  '/casos': { title: 'Gestión de Casos', subtitle: 'Registro y seguimiento de casos de trata' },
  '/casos/nuevo': { title: 'Nuevo Caso', subtitle: 'Guía de detección temprana – DIGEMIG Bolivia' },
  '/derivaciones': { title: 'Derivaciones', subtitle: 'Gestión de derivaciones interinstitucionales' },
  '/reportes': { title: 'Reportes y Estadísticas', subtitle: 'Análisis institucional de datos' },
  '/usuarios': { title: 'Gestión de Usuarios', subtitle: 'Administración de cuentas y roles' },
  '/auditoria': { title: 'Auditoría del Sistema', subtitle: 'Logs de acciones e integridad de datos' },
};

export function MainLayout() {
  const { sidebarOpen, setSidebarOpen } = useAppContext();
  const location = useLocation();

  const isNuevo = location.pathname === '/casos/nuevo';
  const isCasoDetail = location.pathname.startsWith('/casos/') && location.pathname !== '/casos/nuevo' && location.pathname !== '/casos';
  
  let pageInfo = pageTitles[location.pathname];
  if (!pageInfo) {
    const key = Object.keys(pageTitles).find(k => location.pathname.startsWith(k));
    pageInfo = key ? pageTitles[key] : { title: 'DIGEMIG' };
  }
  if (isCasoDetail) {
    pageInfo = { title: 'Detalle del Caso', subtitle: 'Información completa del caso' };
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          flex flex-col shrink-0
          transform transition-all duration-200 ease-in-out
          ${sidebarOpen ? 'w-60 translate-x-0' : 'w-0 -translate-x-full lg:-translate-x-0 lg:w-0'}
        `}
        style={{ overflow: 'hidden' }}
      >
        <div className="w-60 h-full">
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header
          title={pageInfo.title}
          subtitle={pageInfo.subtitle}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}