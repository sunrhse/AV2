import { useApp } from '../../context/AppContext'
import { PageHeader, Card, Input, Select, Button, StatusBadge } from '../../components/ui'
import { FileText, CheckCircle, XCircle, Printer } from 'lucide-react'

export default function Relatorio() {
  const { state } = useApp()
  const aero = state.aeronaves[0]
  const etapas = state.etapas.filter(e => e.codigoAero === aero.codigo)
  const testes = state.testes.filter(t => t.codigoAero === aero.codigo)
  const cliente = 'Latam Airlines'
  const dataEntrega = '2026-08-20'

  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Relatório" subtitle="Módulo" action={(
        <button title="Impressão desabilitada no protótipo" style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(139,170,213,0.15)', border: '1px solid rgba(139,170,213,0.3)', borderRadius: 10, padding: '8px 16px', color: '#8BAAD5', fontSize: 12, fontWeight: 500, fontFamily: 'Sora', cursor: 'not-allowed', opacity: 0.7 }}>
          <Printer size={13} /> Imprimir
        </button>
      )} />

      <Card style={{ maxWidth: 520, marginBottom: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Aeronave" defaultValue={aero.codigo} options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
          <Input label="Nome do cliente" defaultValue={cliente} readOnly />
          <Input label="Data de entrega" type="date" defaultValue={dataEntrega} readOnly />
          <Button>Gerar relatório</Button>
        </div>
      </Card>

      <div className="fglass fade-up" style={{ borderRadius: 20, padding: '36px 40px', maxWidth: 680 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(139,170,213,0.2)' }}>
          <div>
            <p style={{ fontSize: 10, color: '#8BAAD5', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Relatório técnico</p>
            <h2 style={{ fontSize: 24, color: '#1e2f55', marginBottom: 4 }}>{aero.modelo}</h2>
            <p style={{ fontSize: 13, color: '#5f87c2' }}>Código: {aero.codigo}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 11, color: '#8BAAD5', marginBottom: 4 }}>Cliente</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 8 }}>{cliente}</p>
            <p style={{ fontSize: 11, color: '#8BAAD5', marginBottom: 4 }}>Entrega prevista</p>
            <p style={{ fontSize: 13, color: '#3F5A80', fontWeight: 500 }}>{new Date(dataEntrega + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Aeronave</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px 20px' }}>
            {[[ 'Código', aero.codigo ], [ 'Modelo', aero.modelo ], [ 'Tipo', aero.tipo ], [ 'Capacidade', `${aero.capacidade} pax` ], [ 'Alcance', `${aero.alcance} km` ]].map(([l, v]) => (
              <div key={l}>
                <p style={{ fontSize: 10, color: '#8BAAD5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{l}</p>
                <p style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500, textTransform: 'capitalize' }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Peças</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {state.pecas.map(p => (
              <div key={p.nome} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(139,170,213,0.07)', borderRadius: 10 }}>
                <div><span style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500, marginRight: 10 }}>{p.nome}</span><span style={{ fontSize: 11, color: '#8BAAD5' }}>{p.fornecedor} · {p.tipo}</span></div>
                <StatusBadge label={p.status} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Etapas</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {etapas.map(e => (
              <div key={e.nome} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(139,170,213,0.07)', borderRadius: 10 }}>
                <div><span style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500, marginRight: 10 }}>{e.nome}</span><span style={{ fontSize: 11, color: '#8BAAD5' }}>Prazo: {new Date(e.prazo).toLocaleDateString('pt-BR')}</span></div>
                <StatusBadge label={e.status} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#8BAAD5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Testes</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {testes.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(139,170,213,0.08)', borderRadius: 12, flex: '1 1 180px' }}>
                {t.resultado === 'aprovado' ? <CheckCircle size={16} color="#8BAAD5" /> : <XCircle size={16} color="#3F5A80" />}
                <div><p style={{ fontSize: 12, fontWeight: 600, color: '#1e2f55', textTransform: 'capitalize', marginBottom: 2 }}>{t.tipo}</p><StatusBadge label={t.resultado} /></div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(139,170,213,0.15)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <FileText size={13} color="#8BAAD5" />
          <p style={{ fontSize: 11, color: '#8BAAD5' }}>Protótipo — impressão desabilitada nesta versão</p>
        </div>
      </div>
    </main>
  )
}
