import React from 'react'
import { Send, Phone, MessageCircle } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white text-2xl font-semibold">Plan My Trip Quickly</h3>
            <p className="text-slate-300/80 mt-1">Share a few details and our team will reach out instantly.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400" placeholder="Name" />
              <input className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400" placeholder="Email" />
              <input className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400" placeholder="Phone" />
              <input className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400" placeholder="Destination" />
              <input className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400 sm:col-span-2" placeholder="Budget (e.g., 50k)" />
              <button type="button" className="sm:col-span-2 rounded-2xl px-6 py-3 bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_40px_rgba(0,230,255,0.4)] hover:shadow-[0_0_60px_rgba(0,230,255,0.55)] transition-shadow flex items-center justify-center gap-2">
                <Send size={18} /> Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://wa.me/1234567890" target="_blank" className="rounded-2xl p-4 bg-green-500/15 text-green-300 border border-green-400/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-400/20 border border-green-400/30 flex items-center justify-center"><MessageCircle size={18} /></div>
                <div>
                  <div className="text-white font-medium">WhatsApp Us</div>
                  <div className="text-slate-300/80 text-sm">Fastest response</div>
                </div>
              </div>
              <span className="text-white">Chat →</span>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h4 className="text-white font-semibold">Prefer a call?</h4>
              <p className="text-slate-300/80">Our travel experts can call you back in minutes.</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900/60 border border-white/10 text-slate-200">
                <Phone size={16} /> +91-90000-00000
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-slate-400">© {new Date().getFullYear()} UrbanMiles Travel Co.</div>
      </div>
    </section>
  )
}

export default ContactCTA