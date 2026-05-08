import type { ReactNode } from 'react'

export function FormGrid({ children, cols = 2 }: { children: ReactNode; cols?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px 20px' }}>
      {children}
    </div>
  )
}
