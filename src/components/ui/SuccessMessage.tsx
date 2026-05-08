export function SuccessMessage({ message }: { message: string }) {
  return (
    <div style={{
      background: 'rgba(139,170,213,0.15)',
      border: '1px solid rgba(139,170,213,0.3)',
      borderRadius: 12, padding: '12px 18px',
      fontSize: 13, color: '#3F5A80', fontWeight: 500,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ fontSize: 16 }}>✓</span> {message}
    </div>
  )
}
