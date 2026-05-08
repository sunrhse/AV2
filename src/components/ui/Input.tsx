import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {label && <label style={{ fontSize: 11, fontWeight: 600, color: '#5f87c2', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</label>}
      <input
        {...props}
        style={{
          width: '100%', fontFamily: 'Sora, sans-serif', fontSize: 13,
          background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)',
          border: `1px solid ${error ? 'rgba(180,60,60,0.4)' : 'rgba(139,170,213,0.3)'}`,
          borderRadius: 10, padding: '10px 14px', color: '#1e2f55', outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          ...props.style,
        }}
        onFocus={e => { e.currentTarget.style.borderColor = '#8BAAD5'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,170,213,0.15)' }}
        onBlur={e => { e.currentTarget.style.borderColor = error ? 'rgba(180,60,60,0.4)' : 'rgba(139,170,213,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
      />
      {error && <span style={{ fontSize: 11, color: '#b03030' }}>{error}</span>}
    </div>
  )
}
