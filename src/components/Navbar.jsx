import React from 'react'
import { Menu, Phone, MessageSquare } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(0,230,255,0.08)]">
          <div className="flex items-center gap-3 px-5 py-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 border border-white/10 shadow-inner shadow-cyan-400/20"></div>
            <span className="text-white font-semibold tracking-wide">UrbanMiles Travel Co.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
            <a href="#builder" className="hover:text-white transition-colors">Smart Trip Builder</a>
            <a href="#collections" className="hover:text-white transition-colors">Collections</a>
            <a href="#trust" className="hover:text-white transition-colors">Reviews</a>
            <a href="#why" className="hover:text-white transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3 pr-4">
            <a href="#contact" className="hidden sm:flex items-center gap-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-4 py-2 hover:bg-cyan-500/20 transition-colors">
              <MessageSquare size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <button className="md:hidden rounded-xl p-2 text-slate-300 hover:text-white">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar