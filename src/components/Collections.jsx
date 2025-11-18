import React from 'react'

const collections = [
  { title: 'The Luxe Escape', desc: 'Handpicked ultra-premium stays and experiences', img: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Offbeat Explorer', desc: 'Hidden trails, local gems and raw nature', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Romantic Hideaways', desc: 'Sunsets, private dinners and beach walks', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Corporate Breakouts', desc: 'Retreats that spark strategy and bonding', img: 'https://images.unsplash.com/photo-1448932252197-d19750584e56?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Solo Travel Picks', desc: 'Curated for safety, flow and discovery', img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Weekend Quick Trips', desc: 'Fast resets around you with max impact', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop' },
]

const Collections = () => {
  return (
    <section id="collections" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,230,255,0.08),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">UrbanMiles Signature Collections</h2>
          <p className="text-slate-300/80 mt-2">Meticulously curated for different travel personalities.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-colors">
              <div className="h-44 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">{c.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="inline-block rounded-xl px-4 py-2 border border-cyan-400/30 text-cyan-200 bg-white/5 hover:bg-white/10">View Trips</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections