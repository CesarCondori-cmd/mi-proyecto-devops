import { createBrowserRouter, Navigate } from 'react-router';
import { MainLayout } from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CasosPage from './pages/CasosPage';
import NuevoCasoPage from './pages/NuevoCasoPage';
import DetalleCasoPage from './pages/DetalleCasoPage';
import DerivacionesPage from './pages/DerivacionesPage';
import UsuariosPage from './pages/UsuariosPage';
import AuditoriaPage from './pages/AuditoriaPage';
import ReportesPage from './pages/ReportesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LoginPage,
  },
  {
    Component: MainLayout,
    children: [
      { path: 'dashboard', Component: DashboardPage },
      { path: 'casos', Component: CasosPage },
      { path: 'casos/nuevo', Component: NuevoCasoPage },
      { path: 'casos/:id', Component: DetalleCasoPage },
      { path: 'derivaciones', Component: DerivacionesPage },
      { path: 'reportes', Component: ReportesPage },
      { path: 'usuarios', Component: UsuariosPage },
      { path: 'auditoria', Component: AuditoriaPage },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
