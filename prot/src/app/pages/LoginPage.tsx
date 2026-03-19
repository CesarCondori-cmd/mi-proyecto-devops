import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { mockUsers } from '../data/mockData';
import type { UserRole } from '../types';

const demo = { email: 'jazmin.canaviri@digemig.gob.bo', nombre: 'Jazmin Canaviri' };

export default function LoginPage() {
  const navigate = useNavigate();
  const { setCurrentUser, setSidebarOpen } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Ingrese su correo institucional.');
      return;
    }
    if (!password) {
      setError('Ingrese su contraseña.');
      return;
    }

    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 1000));

    const user = mockUsers.find(u => u.email.toLowerCase() === email.trim().toLowerCase() && u.activo);
    if (user) {
      setCurrentUser(user);
      setSidebarOpen(true);
      navigate('/dashboard');
    } else {
      setError('Credenciales inválidas o usuario inactivo.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2447] via-[#1B3A6B] to-[#0d4060] flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative">
        {/* Header Card */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <Shield className="w-8 h-8 text-[#1B3A6B]" />
          </div>
          <h1 className="text-white text-2xl">DIGEMIG</h1>
          <p className="text-blue-200 text-sm mt-1">Sistema de Registro, Derivación y Seguimiento</p>
          <p className="text-blue-300 text-xs mt-0.5">Casos de Trata de Personas</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-gray-800 mb-1 text-lg">Iniciar Sesión</h2>
          <p className="text-gray-500 text-sm mb-6">Seleccione su rol e ingrese sus credenciales</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Correo Institucional</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ingrese su correo institucional"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-700 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#1B3A6B] hover:bg-[#2d5499] text-white rounded-xl text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Verificando...
                </span>
              ) : 'Ingresar al Sistema'}
            </button>
          </form>

          {/* Demo hint */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-xs text-blue-700">
              <strong>Demo:</strong> Use cualquiera de las cuentas de ejemplo (por ejemplo {demo.email}) y cualquier contraseña.
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-blue-400 text-xs">
            Sistema desarrollado bajo Software Libre · GNU GPL v3 · DIGEMIG Bolivia 2026
          </p>
        </div>
      </div>
    </div>
  );
}
