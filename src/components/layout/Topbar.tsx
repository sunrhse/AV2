import { Search } from 'lucide-react'

export default function Topbar() {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: 64,
    }}>
      <span style={{ fontFamily: 'Sora', fontSize: 20, fontWeight: 600, letterSpacing: '0.04em', color: '#1e2f55' }}>AeroCode</span>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 8,
        width: 320, background: 'rgba(139,170,213,0.12)',
        border: '1px solid rgba(139,170,213,0.25)', borderRadius: 99,
        padding: '7px 14px', cursor: 'text', boxSizing: 'border-box',
      }}>
        <Search size={13} color="#8BAAD5" />
        <span style={{ fontSize: 12, color: '#8BAAD5', textAlign: 'left' }}>Pesquisar...</span>
      </div>
    </header>
  )
}
