import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-200 text-amber-800 font-bold shadow-inner">ⵙ</span>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">Pottery Journal</div>
            <div className="text-xs text-slate-500 -mt-0.5">Handmade clay stories</div>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="text-slate-700 hover:text-slate-900">Home</Link>
          <a href="/test" className="text-slate-500 hover:text-slate-700">System</a>
        </nav>
      </div>
    </header>
  )
}
