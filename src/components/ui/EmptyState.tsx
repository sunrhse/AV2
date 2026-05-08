import { Inbox } from 'lucide-react'

export function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '40px 0', color: '#8BAAD5' }}>
      <Inbox size={32} strokeWidth={1.2} />
      <p style={{ fontSize: 13, fontWeight: 400 }}>{message}</p>
    </div>
  )
}
