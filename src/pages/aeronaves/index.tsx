import { Plane, List, Eye, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../../components/ui'

const opcoes = [
  { label: 'Cadastrar aeronave', desc: 'Registrar nova aeronave no sistema', icon: Plane, path: '/app/aeronaves/cadastrar', color: '#5f87c2' },
  { label: 'Listar aeronaves', desc: 'Ver todas as aeronaves cadastradas', icon: List, path: '/app/aeronaves/listar', color: '#3F5A80' },
  { label: 'Ver detalhes', desc: 'Consultar informações completas de uma aeronave', icon: Eye, path: '/app/aeronaves/detalhes', color: '#8BAAD5' },
]

export default function AeronaveMenu() {
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Aeronaves" subtitle="Módulo" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 800 }}>
        {opcoes.map(({ label, desc, icon: Icon, path, color }) => (
          <div key={label} className="fglass fade-up" onClick={() => navigate(path)}
            style={{ borderRadius: 18, padding: '28px 24px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', borderTop: `5px solid ${color}` }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(63,90,128,0.18)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 12, background: `rgba(139,170,213,0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Icon size={18} color={color} strokeWidth={1.8} />
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 6 }}>{label}</p>
            <p style={{ fontSize: 12, color: '#8BAAD5', lineHeight: 1.5, marginBottom: 16 }}>{desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: color, fontWeight: 500 }}>
              Acessar <ArrowRight size={12} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
