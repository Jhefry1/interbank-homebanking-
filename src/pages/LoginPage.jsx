import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, guardarSesion } from '../services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Completa todos los campos'); return; }
    setCargando(true);
    try {
      const data = await login(email, password);
      guardarSesion(data.token, data.usuario);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Credenciales incorrectas');
    } finally {
      setCargando(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f6fa' }}>

      {/* Navbar */}
      <nav style={{ background: '#00A651', padding: '1rem 2rem', cursor: 'pointer' }}
        onClick={() => navigate('/')}>
        <strong style={{ color: 'white', fontSize: '1.3rem' }}>interbank</strong>
      </nav>

      {/* Formulario */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{
          background: 'white', borderRadius: 12,
          padding: '2.5rem', width: '100%', maxWidth: 400,
          boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#007a3c', textAlign: 'center', marginBottom: '1.5rem' }}>
            Banca por Internet
          </h2>

          <form onSubmit={handleSubmit}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Correo / Usuario</label>
            <input
              type="text" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              style={{
                display: 'block', width: '100%', padding: '0.7rem',
                margin: '0.4rem 0 1rem', border: '1.5px solid #dfe6e9',
                borderRadius: 6, fontSize: '1rem'
              }}
            />

            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Contraseña</label>
            <input
              type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                display: 'block', width: '100%', padding: '0.7rem',
                margin: '0.4rem 0 1.5rem', border: '1.5px solid #dfe6e9',
                borderRadius: 6, fontSize: '1rem'
              }}
            />

            {error && <p className="error-msg">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={cargando}
              style={{ width: '100%', marginTop: '1rem', opacity: cargando ? 0.7 : 1 }}
            >
              {cargando ? 'Verificando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}