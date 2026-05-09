export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: { emoji: 'text-lg',  text: 'text-lg',  gap: 'gap-1.5' },
    md: { emoji: 'text-2xl', text: 'text-xl',  gap: 'gap-2'   },
    lg: { emoji: 'text-4xl', text: 'text-4xl', gap: 'gap-3'   },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <span className={s.emoji}>🎵</span>
      <span
        className={`${s.text} font-bold tracking-widest text-white uppercase`}
        style={{ fontFamily: "'Syncopate', sans-serif" }}
      >
        Sonara
      </span>
    </div>
  )
}
