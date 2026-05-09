import { useState, useRef } from 'react'
import CodeBlock from './CodeBlock'

const EXAMPLES = [
  {
    title: 'Moonlight Sonata',
    author: 'Beethoven',
    year: '1801',
    audio: '/audio/moonlight_sonata.mp3',
    description: 'Op. 27 No. 2 — Adagio sostenuto in C# minor',
    code: `tempo 54
scale Csharp_minor

import movement1`,
    snippet: `section opening {
  chords {
    C#m | C#m | C#m | C#m | C#m
    F#m | G# | C#m | C#m
    C#m | C#m | C#m | C#m | C#m
    F#m | G# | C#m | C#m
    A | E | F#m | G# | C#m
  }

  bass {
    C#w2 C#w2 C#w2 C#w2 C#w2
    F#w2 G#w2 C#w2 C#w2
    C#w2 C#w2 C#w2 C#w2 C#w2
    F#w2 G#w2 C#w2 C#w2
    Aw2 Ew2 F#w2 G#w2 C#w2
  }

  melody {
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4
    G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4
    G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
    At3 C#t4 Et4 At3 C#t4 Et4 At3 C#t4 Et4 At3 C#t4 Et4
    Et3 G#t3 Bt3 Et3 G#t3 Bt3 Et3 G#t3 Bt3 Et3 G#t3 Bt3
    F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4 F#t3 At3 C#t4
    G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4 G#t3 B#t3 D#t4
    G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4 G#t3 C#t4 Et4
  }
}`,
  },
  {
    title: 'Jingle Bells',
    author: 'J. Pierpont',
    year: '1857',
    audio: '/audio/jingle_bells.mp3',
    description: 'Traditional Christmas carol in C major',
    code: `tempo 120
scale C_major

section verse { ... }
section chorus { ... }
section outro { ... }`,
    snippet: `section verse {
  chords {
    C | C | C | G
    C | C | F | G
  }

  bass {
    Cw2 Cw2 Cw2 Gw2
    Cw2 Cw2 Fw2 Gw2
  }

  melody {
    E4 E4 Eh4
    E4 G4 C4 D4
    E4 D4 C4 D4
    G4 G4 Gh4
    E4 E4 Eh4
    G4 G4 Gh4
    A4 G4 F4 E4
    Dh4 Gh3
  }

  drums {
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
  }
}

section chorus {
  chords {
    C | C | C | G
    F | C | G | C
  }

  bass {
    Cw2 Cw2 Cw2 Gw2
    Fw2 Cw2 Gw2 Cw2
  }

  melody {
    E4 E4 Eh4
    E4 E4 Eh4
    E4 G4 C4 D4
    Eh4 Rh
    F4 F4 F4 F4
    F4 E4 E4 E4
    G4 G4 F4 D4
    Ch4 Rh
  }

  drums {
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
    kick hihat snare hihat
  }
}

section outro {
  chords {
    C | F | G7 | C
  }

  bass {
    Cw2 Fw2 Gw2 Cw2
  }

  melody {
    Eh4 Gh4
    Ah4 Fh4
    Dh4 Bh4
    Cw4
  }

  drums {
    kick snare kick snare
    kick snare kick snare
    kick snare kick snare
    kick snare kick snare
  }
}`,
  },
]

function AudioPlayer({ src, title }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    setProgress((audio.currentTime / audio.duration) * 100)
  }

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0)
  }

  const onEnded = () => {
    setPlaying(false)
    setProgress(0)
  }

  const onSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = x / rect.width
    if (audioRef.current) {
      audioRef.current.currentTime = ratio * audioRef.current.duration
    }
  }

  const fmt = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex items-center gap-4 bg-[#08080e] border border-[#2a2a3f] rounded-xl px-4 py-3">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
      <button
        onClick={toggle}
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-violet-600 hover:bg-violet-500 rounded-full transition-colors"
      >
        {playing
          ? <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          : <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
        }
      </button>

      <div className="flex-1 min-w-0">
        <div
          className="h-1.5 bg-[#1e1e2e] rounded-full cursor-pointer group"
          onClick={onSeek}
        >
          <div
            className="h-full bg-violet-500 group-hover:bg-violet-400 rounded-full transition-colors relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
          </div>
        </div>
      </div>

      <span className="text-xs text-slate-500 font-mono flex-shrink-0">
        {duration > 0 ? fmt(duration) : '--:--'}
      </span>
    </div>
  )
}

function ExampleCard({ example }) {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className="bg-[#0d0d18] border border-[#1e1e2e] hover:border-[#2a2a3f] rounded-2xl overflow-hidden transition-all group">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="text-white font-bold text-lg">{example.title}</h3>
          <span className="text-xs text-slate-500 flex-shrink-0 mt-1">{example.year}</span>
        </div>
        <p className="text-violet-400 text-sm font-medium mb-1">{example.author}</p>
        <p className="text-slate-400 text-sm">{example.description}</p>
      </div>

      {/* Code */}
      <div className="px-6 pb-4">
        <div className="bg-[#08080e] border border-[#1e1e2e] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#1e1e2e]">
            <span className="text-xs text-slate-500 font-mono">
              {example.title.toLowerCase().replace(/ /g, '_')}.son
            </span>
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-xs text-slate-500 hover:text-violet-400 transition-colors"
            >
              {showFull ? 'Show less' : 'Show full'}
            </button>
          </div>
          <div className="p-4">
            <CodeBlock code={showFull ? example.snippet : example.code} />
          </div>
        </div>
      </div>

      {/* Player */}
      <div className="px-6 pb-6">
        <AudioPlayer src={example.audio} title={example.title} />
      </div>
    </div>
  )
}

export default function Examples() {
  return (
    <section id="examples" className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">
            Hear it in action
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            All examples are public domain compositions — compiled directly from <code className="text-violet-400 font-mono">.son</code> source files.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EXAMPLES.map(ex => <ExampleCard key={ex.title} example={ex} />)}
        </div>
      </div>
    </section>
  )
}
