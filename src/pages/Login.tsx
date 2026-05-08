import { useNavigate } from 'react-router-dom'
import { Input, Button } from '../components/ui'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: '#c7d9f5', top: -150, left: -100 }} />
      <div className="orb" style={{ width: 380, height: 380, background: '#d4c7f5', bottom: -80, right: -80 }} />
      <div className="fglass fade-up" style={{ borderRadius: 24, padding: '48px 52px', width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
 
          <span style={{ fontFamily: 'Sora', fontSize: 16, fontWeight: 700, color: '#1e2f55', letterSpacing: '0.04em' }}>AeroCode</span>
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 400, color: '#1e2f55', marginBottom: 6 }}>Entrar</h1>
        <p style={{ fontSize: 13, color: '#8BAAD5', marginBottom: 32 }}>Tela mockada: o botão entra direto no dashboard.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Usuário" defaultValue="admin" readOnly />
          <Input label="Senha" type="password" defaultValue="123456" readOnly />
          <Button onClick={() => navigate('/app/dashboard')} fullWidth>Entrar</Button>
        </div>
        <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(139,170,213,0.1)', borderRadius: 10, border: '1px solid rgba(139,170,213,0.2)' }}>
          <p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, marginBottom: 4 }}>MODO PROTÓTIPO</p>
          <p style={{ fontSize: 12, color: '#5f87c2' }}>Sem validação, estado ou autenticação real</p>
        </div>
      </div>
    </div>
  )
}
