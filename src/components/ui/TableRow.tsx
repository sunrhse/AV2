import type { ReactNode } from 'react'

export function TableRow({ cols, last }: { cols: ReactNode[]; last?: boolean }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
      padding: '14px 24px',
      borderBottom: last ? 'none' : '1px solid rgba(139,170,213,0.1)',
      alignItems: 'center',
      transition: 'background 0.15s',
      cursor: 'default',
    }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(139,170,213,0.07)'}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
    >
      {cols.map((c, i) => <div key={i} style={{ fontSize: 13, color: '#1e2f55' }}>{c}</div>)}
    </div>
  )
}
