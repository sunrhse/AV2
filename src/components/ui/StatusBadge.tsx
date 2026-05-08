const badgeConfig: Record<string, { bg: string; color: string }> = {
  aprovado: { bg: '#8BAAD5', color: '#fff' },
  reprovado: { bg: '#3F5A80', color: '#fff' },
  pronta: { bg: '#8BAAD5', color: '#fff' },
  'em produção': { bg: 'rgba(139,170,213,0.18)', color: '#3F5A80' },
  'em transporte': { bg: 'rgba(63,90,128,0.15)', color: '#3F5A80' },
  'em andamento': { bg: '#8BAAD5', color: '#fff' },
  pendente: { bg: 'rgba(139,170,213,0.18)', color: '#5f87c2' },
  'concluída': { bg: '#3F5A80', color: '#fff' },
  adm: { bg: '#3F5A80', color: '#fff' },
  eng: { bg: '#8BAAD5', color: '#fff' },
  op: { bg: 'rgba(139,170,213,0.18)', color: '#5f87c2' },
}

export function StatusBadge({ label }: { label: string }) {
  const cfg = badgeConfig[label.toLowerCase()] ?? { bg: 'rgba(139,170,213,0.18)', color: '#5f87c2' }
  return (
    <span style={{
      background: cfg.bg, color: cfg.color,
      padding: '3px 11px', borderRadius: 99,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.03em',
      display: 'inline-block', whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}
