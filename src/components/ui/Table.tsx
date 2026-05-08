import type { ReactNode } from 'react'
import { EmptyState } from './EmptyState'

export function Table({ headers, children, empty }: { headers: string[]; children: ReactNode; empty?: boolean }) {
  return (
    <div className="fglass" style={{ borderRadius: 18, overflow: 'hidden' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
        padding: '11px 24px',
        borderBottom: '1px solid rgba(139,170,213,0.15)',
        background: 'rgba(139,170,213,0.06)',
      }}>
        {headers.map(h => (
          <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAAD5' }}>{h}</span>
        ))}
      </div>
      {empty ? <EmptyState message="Nenhum registro encontrado" /> : children}
    </div>
  )
}
