import { useNavigate } from 'react-router-dom'
import { Package, List, RefreshCw, ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { PageHeader, BackButton, Card, Input, Select, Button, FormGrid, StatusBadge } from '../../components/ui'

export function PecasMenu() {
  const navigate = useNavigate()
  const opcoes = [
    { label: 'Cadastrar peça', desc: 'Registrar nova peça no inventário', icon: Package, path: '/app/pecas/cadastrar', color: '#5f87c2' },
    { label: 'Listar peças', desc: 'Ver todas as peças cadastradas', icon: List, path: '/app/pecas/listar', color: '#3F5A80' },
    { label: 'Atualizar status', desc: 'Alterar o status de uma peça', icon: RefreshCw, path: '/app/pecas/atualizar', color: '#8BAAD5' },
  ]
  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Peças" subtitle="Módulo" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 800 }}>
        {opcoes.map(({ label, desc, icon: Icon, path, color }) => (
          <div key={label} className="fglass fade-up" onClick={() => navigate(path)} style={{ borderRadius: 18, padding: '28px 24px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', borderTop: `5px solid ${color}` }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(139,170,213,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon size={18} color={color} strokeWidth={1.8} /></div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 6 }}>{label}</p>
            <p style={{ fontSize: 12, color: '#8BAAD5', lineHeight: 1.5, marginBottom: 16 }}>{desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color, fontWeight: 500 }}>Acessar <ArrowRight size={12} /></div>
          </div>
        ))}
      </div>
    </main>
  )
}

export function CadastrarPeca() {
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/pecas" />
      <PageHeader title="Cadastrar peça" subtitle="Peças" />
      <Card style={{ maxWidth: 560 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormGrid>
            <Input label="Nome" defaultValue="Motor CFM56" readOnly />
            <Input label="Fornecedor" defaultValue="CFM International" readOnly />
          </FormGrid>
          <FormGrid>
            <Select label="Tipo" defaultValue="importada" options={[{ value: 'nacional', label: 'Nacional' }, { value: 'importada', label: 'Importada' }]} />
            <Select label="Status" defaultValue="em produção" options={[{ value: 'em produção', label: 'Em produção' }, { value: 'em transporte', label: 'Em transporte' }, { value: 'pronta', label: 'Pronta' }]} />
          </FormGrid>
          <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}>
            <Button onClick={() => navigate('/app/pecas/listar')}>Cadastrar</Button>
            <Button variant="ghost" onClick={() => navigate('/app/pecas')}>Cancelar</Button>
          </div>
        </div>
      </Card>
    </main>
  )
}

export function ListarPecas() {
  const { state } = useApp()
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/pecas" />
      <PageHeader title="Peças" subtitle="Lista" action={<button onClick={() => navigate('/app/pecas/cadastrar')} style={{ background: 'linear-gradient(135deg,#5f87c2,#3F5A80)', border: 'none', borderRadius: 10, padding: '8px 16px', color: 'white', fontSize: 12, fontWeight: 500, fontFamily: 'Sora', cursor: 'pointer', boxShadow: '0 4px 14px rgba(63,90,128,0.28)' }}>+ Nova peça</button>} />
      <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1.2fr', padding: '11px 24px', borderBottom: '1px solid rgba(139,170,213,0.15)', background: 'rgba(139,170,213,0.06)' }}>
          {['Nome', 'Fornecedor', 'Tipo', 'Status'].map(h => <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>)}
        </div>
        {state.pecas.map((p, i) => (
          <div key={p.nome} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1.2fr', padding: '14px 24px', borderBottom: i < state.pecas.length - 1 ? '1px solid rgba(139,170,213,0.1)' : 'none', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#1e2f55' }}>{p.nome}</span>
            <span style={{ fontSize: 12, color: '#5f87c2' }}>{p.fornecedor}</span>
            <span style={{ fontSize: 12, color: '#8BAAD5', textTransform: 'capitalize' }}>{p.tipo}</span>
            <StatusBadge label={p.status} />
          </div>
        ))}
      </div>
    </main>
  )
}

export function AtualizarPeca() {
  const { state } = useApp()
  const navigate = useNavigate()
  const peca = state.pecas[0]
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/pecas" />
      <PageHeader title="Atualizar status" subtitle="Peças" />
      <Card style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Peça" defaultValue={peca.nome} options={state.pecas.map(p => ({ value: p.nome, label: p.nome }))} />
          <div style={{ background: 'rgba(139,170,213,0.08)', borderRadius: 12, padding: '14px 16px' }}>
            <p style={{ fontSize: 12, color: '#8BAAD5', marginBottom: 4 }}>Peça selecionada</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#1e2f55', marginBottom: 4 }}>{peca.nome}</p>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span style={{ fontSize: 12, color: '#5f87c2' }}>Status atual:</span><StatusBadge label={peca.status} /></div>
          </div>
          <Select label="Novo status" defaultValue="em transporte" options={[{ value: 'em produção', label: 'Em produção' }, { value: 'em transporte', label: 'Em transporte' }, { value: 'pronta', label: 'Pronta' }]} />
          <Button onClick={() => navigate('/app/pecas/listar')}>Atualizar status</Button>
        </div>
      </Card>
    </main>
  )
}
