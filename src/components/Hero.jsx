import { useState } from 'react'
import CodeBlock from './CodeBlock'
import Logo from './Logo'

const SNIPPET_CODE = `section verse {
  chords {
    Am | G | F | G
  }

  melody {
    Ee4:90 F#e4:75 G#e4:60
    Ae4:95 G#e4:70 F#e4:55
  }

  bass {
    Aw2 Gw2 Fw2 Gw2
  }

  drums {
    kick hihat snare hihat
  }
}`

const CMDS = {
  linux:   'curl -fsSL https://raw.githubusercontent.com/sonara-lang/sonara-lang/refs/heads/main/install.sh | bash',
  windows: 'irm https://raw.githubusercontent.com/sonara-lang/sonara-lang/refs/heads/main/install.bat -OutFile install.bat; .\\install.bat',
}

const TABS = [
  { id: 'linux',   label: 'Linux / macOS', icon: '🐧' },
  { id: 'windows', label: 'Windows',       icon: '🪟' },
]

function detectOS() {
  if (typeof navigator === 'undefined') return 'linux'
  return /Windows/i.test(navigator.userAgent) ? 'windows' : 'linux'
}

function InstallWidget() {
  const [tab, setTab] = useState(detectOS)
  const [copied, setCopied] = useState(false)
  const cmd = CMDS[tab]

  const copy = () => {
    navigator.clipboard.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-lg">
      {/* Tabs */}
      <div className="flex gap-1 mb-0 bg-[#0d0d18] border border-b-0 border-[#2a2a3f] rounded-t-xl px-2 pt-2">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              tab === t.id
                ? 'bg-[#1a1a2e] text-white border border-b-0 border-[#2a2a3f]'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Command block */}
      <div className="flex items-center gap-4 bg-[#0d0d18] border border-[#2a2a3f] rounded-b-xl rounded-tr-xl px-6 py-5">
        <code className="font-mono text-base text-white flex-1 break-all leading-relaxed select-all">
          {cmd}
        </code>
        <button
          onClick={copy}
          title="Copy to clipboard"
          className="flex-shrink-0 p-2.5 rounded-lg bg-[#1a1a2e] hover:bg-violet-600 border border-[#2a2a3f] hover:border-violet-500 text-slate-400 hover:text-white transition-all"
        >
          {copied
            ? <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
            : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          }
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#08080e]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#examples" className="hover:text-white transition-colors">Examples</a>
            <a href="#install" className="hover:text-white transition-colors">Install</a>
            <a
              href="https://github.com/sonara-lang/sonara-lang"
              className="flex items-center gap-2 px-4 py-2 border border-[#2a2a3f] rounded-lg hover:border-violet-500/50 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-20">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-950/60 border border-violet-700/40 rounded-full text-violet-300 text-xs font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Open source · Public domain examples
              </div>

              <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                Compose<br />
                music<br />
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  with code.
                </span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Sonara is a text-based music composition language.
                Write melodies, chords, and rhythms in <code className="text-violet-400 font-mono">.son</code> files
                and compile directly to MP3 or WAV.
              </p>

              <InstallWidget />

              <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Compiles to MP3 / WAV
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Modular imports
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Zero dependencies
                </span>
              </div>
            </div>

            {/* Right — code preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-[#0d0d18] border border-[#2a2a3f] rounded-2xl overflow-hidden shadow-2xl">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e2e]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">song.son</span>
                </div>
                <div className="p-6">
                  <CodeBlock code={SNIPPET_CODE} />
                </div>
                {/* Terminal output */}
                <div className="border-t border-[#1e1e2e] bg-[#080810] px-6 py-4">
                  <p className="text-xs text-slate-500 font-mono mb-2">$ sonara build song.son</p>
                  <p className="text-xs text-slate-400 font-mono">Rendering audio...</p>
                  <p className="text-xs text-slate-400 font-mono">Converting to MP3...</p>
                  <p className="text-xs text-emerald-400 font-mono">→ song.mp3  <span className="text-slate-500">Done. Sections: 1</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-8">
          <a href="#examples" className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
