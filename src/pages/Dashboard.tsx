import { Plane, Wrench, Users, FileBadge, ArrowUpRight } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { StatusBadge } from '../components/ui'

export default function Dashboard() {
  const { state } = useApp()
  const navigate = useNavigate()
  const { aeronaves, pecas, funcionarios, testes } = state

  const kpis = [
    { label: 'Aeronaves', value: aeronaves.length, sublabel: 'registradas', icon: Plane, path: '/app/aeronaves' },
    { label: 'Peças', value: pecas.length, sublabel: 'no inventário', icon: Wrench, path: '/app/pecas' },
    { label: 'Funcionários', value: funcionarios.length, sublabel: 'ativos', icon: Users, path: '/app/funcionarios' },
    { label: 'Testes', value: testes.filter(t => t.resultado === 'reprovado').length, sublabel: 'reprovados', icon: FileBadge, path: '/app/testes' },
  ]

  const recentAero = aeronaves.slice(0, 5)

  return (
    <main style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Visão geral</p>
          <h1 style={{ fontSize: 32, fontWeight: 400, color: '#1e2f55', letterSpacing: '-0.01em' }}>
            Olá, Admin!
          </h1>
        </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {kpis.map(({ label, value, sublabel, icon: Icon, path }, i) => (
          <div key={label} className="fglass fade-up" onClick={() => navigate(path)}
            style={{ borderRadius: 18, padding: '20px 22px', animationDelay: `${i * 0.08}s`, borderTop: '5px solid #8BAAD5', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(63,90,128,0.18)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#8BAAD5' }}>{label}</span>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(139,170,213,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={14} color="#5f87c2" strokeWidth={1.8} />
              </div>
            </div>
            <p style={{ fontSize: 36, fontWeight: 400, color: '#1e2f55', lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</p>
            <p style={{ fontSize: 11, color: '#8BAAD5', marginTop: 4 }}>{sublabel}</p>
          </div>
        ))}
      </div>
      <div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: '#1e2f55' }}>Aeronaves recentes</h2>
            <a href="#" onClick={e => { e.preventDefault(); navigate('/app/aeronaves') }} style={{ fontSize: 12, color: '#8BAAD5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>Ver todas <ArrowUpRight size={12} /></a>
          </div>
          <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '11px 20px', borderBottom: '1px solid rgba(139,170,213,0.15)', background: 'rgba(139,170,213,0.06)' }}>
              {['Código', 'Modelo', 'Tipo'].map(h => <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>)}
            </div>
            {recentAero.length === 0
              ? <p style={{ padding: '20px', fontSize: 13, color: '#8BAAD5', textAlign: 'center' }}>Nenhuma aeronave cadastrada</p>
              : recentAero.map((a, i) => (
                <div key={a.codigo} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '13px 20px', borderBottom: i < recentAero.length - 1 ? '1px solid rgba(139,170,213,0.1)' : 'none', alignItems: 'center', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(139,170,213,0.07)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
                  onClick={() => navigate(`/app/aeronaves/detalhes?codigo=${a.codigo}`)}
                >
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#3F5A80', fontFamily: 'monospace' }}>{a.codigo}</span>
                  <span style={{ fontSize: 13, color: '#1e2f55' }}>{a.modelo}</span>
                  <StatusBadge label={a.tipo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
