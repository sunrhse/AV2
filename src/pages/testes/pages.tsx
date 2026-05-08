import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { PageHeader, BackButton, Card, Select, Button, FormGrid, StatusBadge } from '../../components/ui'
import { CheckCircle, XCircle } from 'lucide-react'

export function TestesMenu() {
  const navigate = useNavigate()
  const { state } = useApp()
  const aprovados = state.testes.filter(t => t.resultado === 'aprovado').length
  const reprovados = state.testes.filter(t => t.resultado === 'reprovado').length
  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Testes" subtitle="Módulo" />
      <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
        <div className="fglass" style={{ borderRadius: 14, padding: '14px 20px', borderTop: '5px solid #8BAAD5' }}><p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, marginBottom: 4 }}>Aprovados</p><p style={{ fontSize: 28, color: '#1e2f55' }}>{aprovados}</p></div>
        <div className="fglass" style={{ borderRadius: 14, padding: '14px 20px', borderTop: '5px solid #3F5A80' }}><p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, marginBottom: 4 }}>Reprovados</p><p style={{ fontSize: 28, color: '#1e2f55' }}>{reprovados}</p></div>
      </div>
      <div style={{ display: 'flex', gap: 14 }}>
        <div className="fglass fade-up" onClick={() => navigate('/app/testes/registrar')} style={{ borderRadius: 18, padding: '28px 24px', cursor: 'pointer', width: 260, borderTop: '5px solid #5f87c2', transition: 'transform 0.2s, box-shadow 0.2s' }}><CheckCircle size={24} color="#5f87c2" strokeWidth={1.5} style={{ marginBottom: 14 }} /><p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 6 }}>Registrar teste</p><p style={{ fontSize: 12, color: '#8BAAD5' }}>Registrar resultado de um teste em uma aeronave</p></div>
        <div className="fglass fade-up" onClick={() => navigate('/app/testes/listar')} style={{ borderRadius: 18, padding: '28px 24px', cursor: 'pointer', width: 260, borderTop: '5px solid #3F5A80', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.08s' }}><XCircle size={24} color="#3F5A80" strokeWidth={1.5} style={{ marginBottom: 14 }} /><p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 6 }}>Listar testes</p><p style={{ fontSize: 12, color: '#8BAAD5' }}>Consultar testes realizados em uma aeronave</p></div>
      </div>
    </main>
  )
}

export function RegistrarTeste() {
  const { state } = useApp()
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/testes" />
      <PageHeader title="Registrar teste" subtitle="Testes" />
      <Card style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Aeronave" defaultValue="AC001" options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
          <FormGrid>
            <Select label="Tipo de teste" defaultValue="elétrico" options={[{ value: 'elétrico', label: 'Elétrico' }, { value: 'hidráulico', label: 'Hidráulico' }, { value: 'aerodinâmico', label: 'Aerodinâmico' }]} />
            <Select label="Resultado" defaultValue="aprovado" options={[{ value: 'aprovado', label: 'Aprovado' }, { value: 'reprovado', label: 'Reprovado' }]} />
          </FormGrid>
          <Button onClick={() => navigate('/app/testes')}>Registrar</Button>
        </div>
      </Card>
    </main>
  )
}

export function ListarTestes() {
  const { state } = useApp()
  const testes = state.testes.filter(t => t.codigoAero === 'AC001')
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/testes" />
      <PageHeader title="Listar testes" subtitle="Testes" />
      <Card style={{ maxWidth: 560, marginBottom: 24 }}>
        <Select label="Aeronave" defaultValue="AC001" options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
      </Card>
      <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden', maxWidth: 600 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '11px 24px', borderBottom: '1px solid rgba(139,170,213,0.15)', background: 'rgba(139,170,213,0.06)' }}>
          {['Tipo', 'Data', 'Resultado'].map(h => <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>)}
        </div>
        {testes.map((t, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 24px', borderBottom: i < testes.length - 1 ? '1px solid rgba(139,170,213,0.1)' : 'none', alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500, textTransform: 'capitalize' }}>{t.tipo}</span>
            <span style={{ fontSize: 12, color: '#8BAAD5' }}>{new Date(t.data).toLocaleDateString('pt-BR')}</span>
            <StatusBadge label={t.resultado} />
          </div>
        ))}
      </div>
    </main>
  )
}
