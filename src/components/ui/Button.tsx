import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'danger'
  size?: 'sm' | 'md'
  type?: 'button' | 'submit'
  disabled?: boolean
  icon?: ReactNode
  fullWidth?: boolean
}

export function Button({ children, onClick, variant = 'primary', size = 'md', type = 'button', disabled, icon, fullWidth }: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 6, border: 'none', borderRadius: 10, cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Sora, sans-serif', fontWeight: 500, transition: 'all 0.18s',
    width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.5 : 1,
    fontSize: size === 'sm' ? 12 : 13,
    padding: size === 'sm' ? '6px 12px' : '10px 18px',
  }
  const styles: Record<string, React.CSSProperties> = {
    primary: { ...base, background: 'linear-gradient(135deg,#5f87c2,#3F5A80)', color: '#fff', boxShadow: '0 4px 14px rgba(63,90,128,0.28)' },
    ghost: { ...base, background: 'rgba(139,170,213,0.12)', color: '#3F5A80', border: '1px solid rgba(139,170,213,0.25)' },
    danger: { ...base, background: 'rgba(200,60,60,0.1)', color: '#b03030', border: '1px solid rgba(200,60,60,0.2)' },
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={styles[variant]}
      onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.06)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.filter = 'none' }}
    >
      {icon}{children}
    </button>
  )
}
