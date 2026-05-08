import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function BackButton({ to, label = 'Voltar' }: { to: string; label?: string }) {
  const nav = useNavigate()
  return (
    <button onClick={() => nav(to)} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: 'none', border: 'none', cursor: 'pointer',
      fontSize: 12, color: '#8BAAD5', fontFamily: 'Sora, sans-serif',
      fontWeight: 500, marginBottom: 20, padding: 0,
      transition: 'color 0.15s',
    }}
      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#3F5A80'}
      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = '#8BAAD5'}
    >
      <ChevronLeft size={14} /> {label}
    </button>
  )
}
