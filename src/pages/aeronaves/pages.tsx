import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { PageHeader, BackButton, Card, Input, Select, Button, FormGrid, StatusBadge } from '../../components/ui'

export function CadastrarAeronave() {
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/aeronaves" />
      <PageHeader title="Cadastrar aeronave" subtitle="Aeronaves" />
      <Card style={{ maxWidth: 600 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormGrid>
            <Input label="Código" defaultValue="AC004" readOnly />
            <Input label="Modelo" defaultValue="Boeing 747" readOnly />
            <Input label="Capacidade (passageiros)" type="number" defaultValue="200" readOnly />
            <Input label="Alcance (km)" type="number" defaultValue="8000" readOnly />
          </FormGrid>
          <Select label="Tipo" defaultValue="comercial" options={[{ value: 'comercial', label: 'Comercial' }, { value: 'militar', label: 'Militar' }]} />
          <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}>
            <Button onClick={() => navigate('/app/aeronaves/listar')}>Cadastrar</Button>
            <Button variant="ghost" onClick={() => navigate('/app/aeronaves')}>Cancelar</Button>
          </div>
        </div>
      </Card>
    </main>
  )
}

export function ListarAeronaves() {
  const { state } = useApp()
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/aeronaves" />
      <PageHeader title="Aeronaves" subtitle="Lista" action={<button onClick={() => navigate('/app/aeronaves/cadastrar')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'linear-gradient(135deg,#5f87c2,#3F5A80)', border: 'none', borderRadius: 10, padding: '8px 16px', color: 'white', fontSize: 12, fontWeight: 500, fontFamily: 'Sora', cursor: 'pointer', boxShadow: '0 4px 14px rgba(63,90,128,0.28)' }}>+ Nova aeronave</button>} />
      <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: '11px 24px', borderBottom: '1px solid rgba(139,170,213,0.15)', background: 'rgba(139,170,213,0.06)' }}>
          {['Código', 'Modelo', 'Tipo'].map(h => <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>)}
        </div>
        {state.aeronaves.map((a, i) => (
          <div key={a.codigo} onClick={() => navigate(`/app/aeronaves/detalhes?codigo=${a.codigo}`)} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: '14px 24px', borderBottom: i < state.aeronaves.length - 1 ? '1px solid rgba(139,170,213,0.1)' : 'none', alignItems: 'center', cursor: 'pointer', transition: 'background 0.15s' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#3F5A80', fontFamily: 'monospace' }}>{a.codigo}</span>
            <span style={{ fontSize: 13, color: '#1e2f55' }}>{a.modelo}</span>
            <span style={{ fontSize: 12, color: '#5f87c2', textTransform: 'capitalize' }}>{a.tipo}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export function DetalhesAeronave() {
  const { state } = useApp()
  const aero = state.aeronaves[0]
  const etapas = state.etapas.filter(e => e.codigoAero === aero.codigo)
  const testes = state.testes.filter(t => t.codigoAero === aero.codigo)

  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/aeronaves" />
      <PageHeader title="Detalhes da aeronave" subtitle="Aeronaves" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card style={{ maxWidth: 420 }}>
          <Select label="Aeronave" defaultValue={aero.codigo} options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
        </Card>
        <Card>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Informações gerais</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px 24px' }}>
            {[[ 'Código', aero.codigo ], [ 'Modelo', aero.modelo ], [ 'Tipo', aero.tipo ], [ 'Capacidade', `${aero.capacidade} passageiros` ], [ 'Alcance', `${aero.alcance} km` ]].map(([l, v]) => (
              <div key={l}>
                <p style={{ fontSize: 10, color: '#8BAAD5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{l}</p>
                <p style={{ fontSize: 14, color: '#1e2f55', fontWeight: 500, textTransform: 'capitalize' }}>{v}</p>
              </div>
            ))}
          </div>
        </Card>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Peças ({state.pecas.length})</p>
            {state.pecas.map(p => (
              <div key={p.nome} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(139,170,213,0.1)' }}>
                <div><p style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500 }}>{p.nome}</p><p style={{ fontSize: 11, color: '#8BAAD5' }}>{p.fornecedor}</p></div>
                <StatusBadge label={p.status} />
              </div>
            ))}
          </Card>
          <Card>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Etapas ({etapas.length})</p>
            {etapas.map(e => (
              <div key={e.nome} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(139,170,213,0.1)' }}>
                <div><p style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500 }}>{e.nome}</p><p style={{ fontSize: 11, color: '#8BAAD5' }}>Prazo: {new Date(e.prazo).toLocaleDateString('pt-BR')}</p></div>
                <StatusBadge label={e.status} />
              </div>
            ))}
          </Card>
        </div>
        <Card>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Testes ({testes.length})</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {testes.map((t, i) => (
              <div key={i} style={{ background: 'rgba(139,170,213,0.08)', borderRadius: 12, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6, minWidth: 160 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#1e2f55', textTransform: 'capitalize' }}>{t.tipo}</p>
                <p style={{ fontSize: 11, color: '#8BAAD5' }}>{new Date(t.data).toLocaleDateString('pt-BR')}</p>
                <StatusBadge label={t.resultado} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
