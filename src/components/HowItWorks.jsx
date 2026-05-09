const STEPS = [
  {
    number: '01',
    icon: '✍️',
    title: 'Write',
    description: 'Compose songs in plain text using the Sonara DSL. Define tempo, scale, melody, chords, bass and drums in readable .son files.',
    code: 'tempo 120\nscale C_major\n\nsection verse {\n  melody {\n    C4 E4 G4 C5\n  }\n}',
  },
  {
    number: '02',
    icon: '⚙️',
    title: 'Compile',
    description: 'Run sonara build and the compiler processes your file, renders audio through the synthesis engine and converts to MP3 or WAV.',
    code: '$ sonara build song.son\n\nRendering audio...\nConverting to MP3...\n→ song.mp3',
  },
  {
    number: '03',
    icon: '🎵',
    title: 'Listen',
    description: 'Play back your composition instantly or use sonara play to hear it without saving. Iterate and refine until it sounds right.',
    code: '$ sonara play song.son\n\nRendering audio...\nPlaying...',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#08080e] border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">How it works</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From text file to audio in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#2a2a3f] to-transparent z-0 -translate-y-1/2" style={{ width: 'calc(100% - 2rem)', left: 'calc(100% - 1rem)' }} />
              )}
              <div className="relative bg-[#0d0d18] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{step.icon}</span>
                  <div>
                    <span className="text-xs text-violet-400 font-mono font-bold">{step.number}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{step.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.description}</p>
                <div className="bg-[#08080e] border border-[#1e1e2e] rounded-xl p-4">
                  <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">{step.code}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { icon: '📦', label: 'Modular', desc: 'Split songs into sections with import' },
            { icon: '🎹', label: 'Expressive', desc: 'Per-note velocity, rests, transpose' },
            { icon: '📄', label: 'Text-based', desc: 'Version-control your compositions' },
            { icon: '⚡', label: 'Fast', desc: 'Compiles in seconds, any platform' },
          ].map(f => (
            <div key={f.label} className="bg-[#0d0d18] border border-[#1e1e2e] rounded-xl p-5 hover:border-violet-500/30 transition-colors">
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h4 className="text-white font-semibold mb-1">{f.label}</h4>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
