import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Navbar */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '1rem 2rem',
        backgroundColor: '#00A651', color: 'white'
      }}>
        <strong style={{ fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
          inter<span style={{ fontWeight: 400 }}>bank</span>
        </strong>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span>Personas</span>
          <span>Empresas</span>
          <span>Productos</span>
          <button className="btn btn-outline" onClick={() => navigate('/login')}>
            Banca por Internet
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #007a3c, #00A651)',
        color: 'white', padding: '5rem 2rem', textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Te acompañamos a alcanzar tus sueños
        </h1>
        <p style={{ maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.9 }}>
          Soluciones financieras digitales pensadas para ti: tarjetas, préstamos, créditos y más.
        </p>
        <button className="btn btn-outline" onClick={() => navigate('/login')}>
          Ingresar a mi cuenta
        </button>
      </section>

      {/* Productos */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem' }}>Nuestros productos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem', maxWidth: 800, margin: '0 auto'
        }}>
          {[
            { titulo: 'Tarjeta de Crédito', desc: 'Hasta 45 días sin intereses y beneficios exclusivos.' },
            { titulo: 'Préstamo Personal', desc: 'Hasta S/ 150,000 con cuotas fijas.' },
            { titulo: 'Cuenta de Ahorros', desc: 'Gana intereses desde el primer día.' },
          ].map((p) => (
            <div key={p.titulo} style={{
              background: 'white', borderRadius: 10,
              padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #00A651', textAlign: 'left'
            }}>
              <h3 style={{ color: '#007a3c', marginBottom: '0.4rem' }}>{p.titulo}</h3>
              <p style={{ color: '#636e72' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2d3436', color: '#b2bec3',
        textAlign: 'center', padding: '1.5rem', fontSize: '0.875rem'
      }}>
        Banco Internacional del Perú S.A.A. | Supervisado por la SBS | RUC: 20100053455
      </footer>

    </div>
  );
}