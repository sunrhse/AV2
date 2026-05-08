import { useNavigate } from 'react-router-dom'
import { GitBranch, Play, CheckSquare, UserPlus, ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { PageHeader, BackButton, Card, Input, Select, Button, FormGrid, StatusBadge } from '../../components/ui'

export function EtapasMenu() {
  const navigate = useNavigate()
  const opcoes = [
    { label: 'Cadastrar etapa', desc: 'Criar nova etapa de produção', icon: GitBranch, path: '/app/etapas/cadastrar', color: '#5f87c2' },
    { label: 'Iniciar etapa', desc: 'Marcar uma etapa como iniciada', icon: Play, path: '/app/etapas/iniciar', color: '#3F5A80' },
    { label: 'Finalizar etapa', desc: 'Concluir uma etapa em andamento', icon: CheckSquare, path: '/app/etapas/finalizar', color: '#8BAAD5' },
    { label: 'Associar funcionário', desc: 'Atribuir funcionário a uma etapa', icon: UserPlus, path: '/app/etapas/associar', color: '#5f87c2' },
  ]
  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Etapas" subtitle="Módulo" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 700 }}>
        {opcoes.map(({ label, desc, icon: Icon, path, color }) => (
          <div key={label} className="fglass fade-up" onClick={() => navigate(path)} style={{ borderRadius: 18, padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', borderTop: `5px solid ${color}`, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(139,170,213,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={18} color={color} strokeWidth={1.8} /></div>
            <div><p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 4 }}>{label}</p><p style={{ fontSize: 12, color: '#8BAAD5', lineHeight: 1.5, marginBottom: 10 }}>{desc}</p><div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color, fontWeight: 500 }}>Acessar <ArrowRight size={12} /></div></div>
          </div>
        ))}
      </div>
    </main>
  )
}

export function CadastrarEtapa() {
  const { state } = useApp()
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/etapas" />
      <PageHeader title="Cadastrar etapa" subtitle="Etapas" />
      <Card style={{ maxWidth: 520 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormGrid><Input label="Nome da etapa" defaultValue="Pintura" readOnly /><Input label="Prazo" type="date" defaultValue="2026-07-10" readOnly /></FormGrid>
          <Select label="Aeronave" defaultValue="AC001" options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
          <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}><Button onClick={() => navigate('/app/etapas')}>Cadastrar</Button><Button variant="ghost" onClick={() => navigate('/app/etapas')}>Cancelar</Button></div>
        </div>
      </Card>
    </main>
  )
}

function EtapaStatusAction({ title, subtitle, actionLabel }: { title: string; subtitle: string; actionLabel: string }) {
  const { state } = useApp()
  const navigate = useNavigate()
  const etapa = state.etapas[0]
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/etapas" />
      <PageHeader title={title} subtitle={subtitle} />
      <Card style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Aeronave" defaultValue={etapa.codigoAero} options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
          <Select label="Etapa" defaultValue={etapa.nome} options={state.etapas.map(e => ({ value: e.nome, label: e.nome }))} />
          <div style={{ background: 'rgba(139,170,213,0.08)', borderRadius: 12, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500 }}>{etapa.nome}</span>
            <StatusBadge label={etapa.status} />
          </div>
          <Button onClick={() => navigate('/app/etapas')}>{actionLabel}</Button>
        </div>
      </Card>
    </main>
  )
}

export function IniciarEtapa() { return <EtapaStatusAction title="Iniciar etapa" subtitle="Etapas" actionLabel="Iniciar etapa" /> }
export function FinalizarEtapa() { return <EtapaStatusAction title="Finalizar etapa" subtitle="Etapas" actionLabel="Finalizar etapa" /> }

export function AssociarFuncionario() {
  const { state } = useApp()
  const navigate = useNavigate()
  const etapa = state.etapas[0]
  const func = state.funcionarios[1]
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/etapas" />
      <PageHeader title="Associar funcionário" subtitle="Etapas" />
      <Card style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Aeronave" defaultValue={etapa.codigoAero} options={state.aeronaves.map(a => ({ value: a.codigo, label: `${a.codigo} — ${a.modelo}` }))} />
          <Select label="Etapa" defaultValue={etapa.nome} options={state.etapas.map(e => ({ value: e.nome, label: e.nome }))} />
          <Select label="Funcionário" defaultValue={func.id} options={state.funcionarios.map(f => ({ value: f.id, label: `${f.id} — ${f.nome}` }))} />
          <div style={{ background: 'rgba(139,170,213,0.08)', borderRadius: 12, padding: '12px 16px' }}><p style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500 }}>{func.nome}</p><p style={{ fontSize: 11, color: '#8BAAD5', textTransform: 'capitalize' }}>{func.nivel} · @{func.usuario}</p></div>
          <Button onClick={() => navigate('/app/etapas')}>Associar</Button>
        </div>
      </Card>
    </main>
  )
}
