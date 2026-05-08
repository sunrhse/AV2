import { useNavigate } from 'react-router-dom'
import { Input, Select, Button, FormGrid, SuccessMessage } from '../components/ui'

export default function PrimeiraVez() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: '#c7d9f5', top: -150, left: -100 }} />
      <div className="orb" style={{ width: 380, height: 380, background: '#d4c7f5', bottom: -80, right: -80 }} />
      <div className="fglass fade-up" style={{ borderRadius: 24, padding: '48px 52px', width: '100%', maxWidth: 560, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
          <span style={{ fontFamily: 'Sora', fontSize: 16, fontWeight: 700, color: '#1e2f55', letterSpacing: '0.04em' }}>AeroCode</span>
        </div>
        <p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Configuração inicial</p>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: '#1e2f55', marginBottom: 8 }}>Criar administrador</h1>
        <p style={{ fontSize: 13, color: '#8BAAD5', marginBottom: 20 }}>Tela mockada com dados fixos. O botão leva para o login.</p>
        <div style={{ marginBottom: 20 }}><SuccessMessage message="Pré-visualização estática do cadastro inicial" /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormGrid>
            <Input label="ID" defaultValue="F001" readOnly /> {/*sera que reescreve o id?*/}
            <Input label="Nome completo" defaultValue="Ana Silva" readOnly />
            <Input label="Telefone" defaultValue="(11) 99999-1000" readOnly />
            <Input label="Endereço" defaultValue="Av. Paulista, 1000" readOnly />
            <Input label="Usuário" defaultValue="admin" readOnly />
            <Input label="Senha" type="password" defaultValue="123456" readOnly />
          </FormGrid>
          <Select label="Nível de permissão" defaultValue="adm" options={[{ value: 'adm', label: 'Administrador' }]} />
          <Button onClick={() => navigate('/login')} fullWidth>Cadastrar</Button>
        </div>
      </div>
    </div>
  )
}
