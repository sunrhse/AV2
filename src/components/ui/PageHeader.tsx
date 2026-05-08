import type { ReactNode } from 'react'

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
      <div>
        {subtitle && <p style={{ fontSize: 11, color: '#8BAAD5', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{subtitle}</p>}
        <h1 style={{ fontSize: 30, fontWeight: 400, color: '#1e2f55', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{title}</h1>
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
