import type { ReactNode } from 'react'

export function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="fglass" style={{ borderRadius: 18, padding: '24px', ...style }}>
      {children}
    </div>
  )
}
