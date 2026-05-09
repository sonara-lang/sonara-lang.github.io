export default function Footer() {
  return (
    <footer className="bg-[#08080e] border-t border-[#1a1a2e] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-violet-400 text-lg">♪</span>
          <span className="font-semibold text-white">sonara</span>
          <span className="text-slate-600 mx-2">·</span>
          <span className="text-sm">Open source music composition language</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="https://github.com/sonara-lang/sonara-lang" className="hover:text-white transition-colors">GitHub</a>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  )
}
