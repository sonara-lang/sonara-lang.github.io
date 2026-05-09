const KEYWORDS = ['tempo', 'scale', 'section', 'melody', 'bass', 'chords', 'drums', 'import', 'transpose']
const NOTE_RE = /\b([A-G][#b]?[whe]?\d)(:\d+)?\b/g
const DRUM_RE = /\b(kick|snare|hihat|rest)\b/g
const NUMBER_RE = /\b(\d+)\b/g

function tokenizeLine(line) {
  if (line.trim().startsWith('//')) {
    return <span className="text-slate-500 italic">{line}</span>
  }

  const parts = []
  let remaining = line
  let key = 0

  const push = (text, cls) => {
    if (text) parts.push(<span key={key++} className={cls}>{text}</span>)
  }

  while (remaining.length > 0) {
    let matched = false

    for (const kw of KEYWORDS) {
      if (remaining.startsWith(kw) && !/\w/.test(remaining[kw.length] ?? '')) {
        push(kw, 'text-violet-400 font-semibold')
        remaining = remaining.slice(kw.length)
        matched = true
        break
      }
    }
    if (matched) continue

    const noteMatch = remaining.match(/^([A-G][#b]?[whe]?\d)(:\d+)?/)
    if (noteMatch) {
      push(noteMatch[1], 'text-emerald-400')
      if (noteMatch[2]) push(noteMatch[2], 'text-amber-400')
      remaining = remaining.slice(noteMatch[0].length)
      continue
    }

    const drumMatch = remaining.match(/^(kick|snare|hihat|rest)\b/)
    if (drumMatch) {
      push(drumMatch[0], 'text-sky-400')
      remaining = remaining.slice(drumMatch[0].length)
      continue
    }

    if (remaining[0] === '/' && remaining[1] === '/') {
      push(remaining, 'text-slate-500 italic')
      remaining = ''
      continue
    }

    const numMatch = remaining.match(/^\d+/)
    if (numMatch && !/[A-G]/.test(remaining[numMatch[0].length - numMatch[0].length - 1])) {
      push(numMatch[0], 'text-amber-400')
      remaining = remaining.slice(numMatch[0].length)
      continue
    }

    if ('{}|'.includes(remaining[0])) {
      push(remaining[0], 'text-slate-400')
      remaining = remaining.slice(1)
      continue
    }

    push(remaining[0], 'text-slate-200')
    remaining = remaining.slice(1)
  }

  return parts
}

export default function CodeBlock({ code, className = '' }) {
  const lines = code.split('\n')
  return (
    <pre className={`font-mono text-sm leading-relaxed overflow-x-auto ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className="min-h-[1.5em]">
          {tokenizeLine(line)}
        </div>
      ))}
    </pre>
  )
}
