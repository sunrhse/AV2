import { LayoutDashboard, Plane, Wrench, GitBranch, Users, FileBadge, FileText, LogOut } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

const allNav = [
  { group: 'Principal', items: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard', roles: ['adm','eng','op'] },
  ]},
  { group: 'Operações', items: [
    { label: 'Aeronaves',    icon: Plane,         path: '/app/aeronaves',    roles: ['adm','eng'] },
    { label: 'Peças',        icon: Wrench,         path: '/app/pecas',        roles: ['adm','eng','op'] },
    { label: 'Etapas',       icon: GitBranch,      path: '/app/etapas',       roles: ['adm','eng','op'] },
    { label: 'Testes',       icon: FileBadge,   path: '/app/testes',       roles: ['adm','eng','op'] },
  ]},
  { group: 'Gestão', items: [
    { label: 'Funcionários', icon: Users,          path: '/app/funcionarios', roles: ['adm'] },
    { label: 'Relatórios',   icon: FileText,       path: '/app/relatorio',    roles: ['adm','eng'] },
  ]},
]

export default function Sidebar() {
  const { state, logout } = useApp()
  const navigate = useNavigate()
  const location = useLocation()
  const nivel = state.usuarioLogado?.nivel ?? 'adm'

  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <aside className="fglass" style={{
      width: 220, minWidth: 220, minHeight: 'calc(100vh - 64px)',
      borderRight: '1px solid rgba(139,170,213,0.18)', borderRadius: 20,
      padding: '24px 14px', display: 'flex', flexDirection: 'column',
      gap: 8, position: 'sticky', top: 64, height: 'calc(100vh - 64px)',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {allNav.map(({ group, items }) => {
            const filtered = items.filter(i => i.roles.includes(nivel))
            if (!filtered.length) return null
            return (
              <div key={group}>
                <p style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5', marginBottom: 6, paddingLeft: 10, fontWeight: 600 }}>{group}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {filtered.map(({ label, icon: Icon, path }) => {
                    const active = location.pathname.startsWith(path)
                    return (
                      <li key={label}>
                        <a href="#" onClick={e => { e.preventDefault(); navigate(path) }} style={{
                          display: 'flex', alignItems: 'center', gap: 9,
                          padding: '8px 10px', borderRadius: 10,
                          fontSize: 13, fontWeight: active ? 600 : 400,
                          color: active ? '#3F5A80' : '#5f87c2',
                          background: active ? 'rgba(139,170,213,0.2)' : 'transparent',
                          textDecoration: 'none', transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,170,213,0.1)'; (e.currentTarget as HTMLAnchorElement).style.color = '#3F5A80' } }}
                          onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#5f87c2' } }}
                        >
                          <Icon size={14} strokeWidth={active ? 2.5 : 1.8} />{label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </nav>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 10, fontSize: 13, color: '#b03030', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Sora', width: '100%', transition: 'all 0.15s' }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = 'rgba(180,60,60,0.08)'}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = 'transparent'}
        >
          <LogOut size={14} strokeWidth={1.8} /> Sair
        </button>
      </div>
    </aside>
  )
}
