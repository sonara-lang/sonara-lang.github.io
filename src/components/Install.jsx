import { useState } from 'react'

const LINUX_CMD = 'curl -fsSL https://raw.githubusercontent.com/sonara-lang/sonara-lang/refs/heads/main/install.sh | bash'
const WINDOWS_CMD = 'irm https://raw.githubusercontent.com/sonara-lang/sonara-lang/refs/heads/main/install.bat -OutFile install.bat; .\\install.bat'

function CopyBlock({ cmd }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative flex items-center bg-[#08080e] border border-[#2a2a3f] rounded-xl px-5 py-4 gap-3">
      <code className="font-mono text-sm text-emerald-400 flex-1 break-all">{cmd}</code>
      <button
        onClick={copy}
        className="flex-shrink-0 px-3 py-1.5 text-xs bg-[#1a1a2e] hover:bg-[#2a2a3f] text-slate-300 rounded-lg transition-colors border border-[#2a2a3f] whitespace-nowrap"
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  )
}

const DSL_REFERENCE = [
  { syntax: 'tempo 120', desc: 'Set BPM' },
  { syntax: 'scale C_major', desc: 'Set key scale' },
  { syntax: 'transpose -2', desc: 'Shift semitones (signed)' },
  { syntax: 'import verse', desc: 'Include verse.son' },
  { syntax: 'C4', desc: 'C, quarter note, octave 4' },
  { syntax: 'G#e3', desc: 'G# eighth note, octave 3' },
  { syntax: 'Bbw2', desc: 'Bb whole note, octave 2' },
  { syntax: 'A4:80', desc: 'A4 with velocity 80 (0–127)' },
  { syntax: 'R / Re', desc: 'Rest (quarter / eighth)' },
  { syntax: 'kick snare hihat', desc: 'Drum hits' },
]

export default function Install() {
  return (
    <section id="install" className="py-24 bg-[#0a0a12] border-t border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Get started</h2>
          <p className="text-slate-400 text-lg">One command. No dependencies to manage manually.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Linux */}
          <div className="bg-[#0d0d18] border border-[#1e1e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🐧</span>
              <div>
                <h3 className="text-white font-bold text-xl">Linux & macOS</h3>
                <p className="text-slate-500 text-sm">bash / zsh / fish</p>
              </div>
            </div>
            <CopyBlock cmd={LINUX_CMD} />
            <p className="text-slate-500 text-xs mt-4">
              Installs audio engine, ffmpeg, and copies the binary to <code className="text-violet-400">~/.local/bin</code>
            </p>
          </div>

          {/* Windows */}
          <div className="bg-[#0d0d18] border border-[#1e1e2e] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🪟</span>
              <div>
                <h3 className="text-white font-bold text-xl">Windows</h3>
                <p className="text-slate-500 text-sm">PowerShell</p>
              </div>
            </div>
            <CopyBlock cmd={WINDOWS_CMD} />
            <p className="text-slate-500 text-xs mt-4">
              Installs via winget/scoop, copies binary to <code className="text-violet-400">%USERPROFILE%\.local\bin</code>
            </p>
          </div>
        </div>

        {/* CLI reference */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#0d0d18] border border-[#1e1e2e] rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6">CLI commands</h3>
            <div className="space-y-3">
              {[
                { cmd: 'sonara build song.son', desc: 'Compile to song.mp3' },
                { cmd: 'sonara build song.son --to=wav', desc: 'Compile to song.wav' },
                { cmd: 'sonara play song.son', desc: 'Compile and play, no file saved' },
                { cmd: 'sonara test song.son', desc: 'Validate syntax only' },
                { cmd: 'sonara --help', desc: 'Show all commands' },
              ].map(({ cmd, desc }) => (
                <div key={cmd} className="flex items-start gap-4 py-2 border-b border-[#1a1a2e] last:border-0">
                  <code className="font-mono text-sm text-violet-300 flex-shrink-0">{cmd}</code>
                  <span className="text-slate-500 text-sm">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d0d18] border border-[#1e1e2e] rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6">DSL quick reference</h3>
            <div className="space-y-3">
              {DSL_REFERENCE.map(({ syntax, desc }) => (
                <div key={syntax} className="flex items-start gap-4 py-2 border-b border-[#1a1a2e] last:border-0">
                  <code className="font-mono text-sm text-emerald-400 flex-shrink-0 w-36">{syntax}</code>
                  <span className="text-slate-500 text-sm">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
