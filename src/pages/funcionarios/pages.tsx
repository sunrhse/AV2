import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { PageHeader, BackButton, Card, Input, Select, Button, FormGrid, StatusBadge } from '../../components/ui'

export function FuncionariosMenu() {
  const navigate = useNavigate()
  const { state } = useApp()
  return (
    <main style={{ padding: '36px 40px' }}>
      <PageHeader title="Funcionários" subtitle="Módulo" action={<button onClick={() => navigate('/app/funcionarios/cadastrar')} style={{ background: 'linear-gradient(135deg,#5f87c2,#3F5A80)', border: 'none', borderRadius: 10, padding: '8px 16px', color: 'white', fontSize: 12, fontWeight: 500, fontFamily: 'Sora', cursor: 'pointer', boxShadow: '0 4px 14px rgba(63,90,128,0.28)' }}>+ Cadastrar</button>} />
      <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
        {[['adm','Admins'],['eng','Engenheiros'],['op','Operadores']].map(([nivel, label]) => (
          <div key={nivel} className="fglass" style={{ borderRadius: 14, padding: '14px 20px', minWidth: 130 }}><p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, marginBottom: 4 }}>{label}</p><p style={{ fontSize: 28, color: '#1e2f55' }}>{state.funcionarios.filter(f => f.nivel === nivel).length}</p></div>
        ))}
      </div>
      <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 2fr 1.5fr 1fr', padding: '11px 24px', borderBottom: '1px solid rgba(139,170,213,0.15)', background: 'rgba(139,170,213,0.06)' }}>
          {['ID', 'Nome', 'Usuário', 'Nível'].map(h => <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>)}
        </div>
        {state.funcionarios.map((f, i) => (
          <div key={f.id} style={{ display: 'grid', gridTemplateColumns: '0.6fr 2fr 1.5fr 1fr', padding: '14px 24px', borderBottom: i < state.funcionarios.length - 1 ? '1px solid rgba(139,170,213,0.1)' : 'none', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#3F5A80', fontFamily: 'monospace' }}>{f.id}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ fontSize: 13, color: '#1e2f55', fontWeight: 500 }}>{f.nome}</span></div>
            <span style={{ fontSize: 12, color: '#5f87c2' }}>@{f.usuario}</span>
            <StatusBadge label={f.nivel} />
          </div>
        ))}
      </div>
    </main>
  )
}

export function CadastrarFuncionario() {
  const navigate = useNavigate()
  return (
    <main style={{ padding: '36px 40px' }}>
      <BackButton to="/app/funcionarios" />
      <PageHeader title="Cadastrar funcionário" subtitle="Funcionários" />
      <Card style={{ maxWidth: 560 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormGrid><Input label="ID" defaultValue="F004" readOnly /><Input label="Nome completo" defaultValue="Carlos Souza" readOnly /><Input label="Telefone" defaultValue="(11) 99999-0000" readOnly /><Input label="Endereço" defaultValue="Rua, número" readOnly /><Input label="Usuário" defaultValue="carlos.op" readOnly /><Input label="Senha" type="password" defaultValue="123456" readOnly /></FormGrid>
          <Select label="Nível de permissão" defaultValue="op" options={[{ value: 'adm', label: 'Administrador' }, { value: 'eng', label: 'Engenheiro' }, { value: 'op', label: 'Operador' }]} />
          <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}><Button onClick={() => navigate('/app/funcionarios')}>Cadastrar</Button><Button variant="ghost" onClick={() => navigate('/app/funcionarios')}>Cancelar</Button></div>
        </div>
      </Card>
    </main>
  )
}
