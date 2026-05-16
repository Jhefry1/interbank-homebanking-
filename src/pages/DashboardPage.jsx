import { useNavigate } from 'react-router-dom';
import { obtenerSesion, cerrarSesion } from '../services/authService';

export default function DashboardPage() {
  const navigate = useNavigate();
  const sesion = obtenerSesion();
  const usuario = sesion?.usuario;

  function handleLogout() {
    cerrarSesion();
    navigate('/');
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>

      {/* Navbar */}
      <nav style={{
        background: '#00A651', padding: '1rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white'
      }}>
        <strong style={{ fontSize: '1.3rem' }}>interbank — Mi Cuenta</strong>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem' }}>{usuario?.email}</span>
          <button onClick={handleLogout} style={{
            background: 'transparent', border: '1px solid white', color: 'white',
            padding: '0.4rem 1rem', borderRadius: 6, cursor: 'pointer', fontWeight: 600
          }}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Contenido */}
      <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>
          ¡Bienvenido, {usuario?.nombre || usuario?.email}! 👋
        </h2>
        <p style={{ color: '#636e72', marginBottom: '2rem' }}>Aquí tienes un resumen de tus cuentas</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { titulo: 'Cuenta Ahorros', valor: 'S/ 4,250.00', color: '#00A651' },
            { titulo: 'Tarjeta de Crédito', valor: 'S/ 2,000.00', color: '#0066cc' },
            { titulo: 'Próxima cuota', valor: '15/06/2026', color: '#e17055' },
          ].map((t) => (
            <div key={t.titulo} style={{
              background: 'white', borderRadius: 10,
              padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              borderLeft: `4px solid ${t.color}`
            }}>
              <p style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '0.4rem' }}>{t.titulo}</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: t.color }}>{t.valor}</p>
            </div>
          ))}
        </div>

        {/* Datos de sesión */}
        <div style={{
          marginTop: '2rem', background: 'white', borderRadius: 10,
          padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.07)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#007a3c' }}>Datos de sesión</h3>
          <p><strong>Email:</strong> {usuario?.email}</p>
          <p style={{ marginTop: '0.5rem' }}><strong>ID:</strong> {sesion?.usuario?.id}</p>
        </div>
      </div>

    </div>
  );
}