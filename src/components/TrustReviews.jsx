import React from 'react'
import { ShieldCheck, Star, Globe2, Plane } from 'lucide-react'

const TrustReviews = () => {
  return (
    <section id="trust" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by travelers worldwide</h2>
            <p className="text-slate-300/80 mt-2">Trusted by thousands. Powered by passion.</p>

            <div className="mt-6 space-y-3">
              {[
                {name: 'Aarav (Verified Traveler)', text: 'UrbanMiles planned our Maldives honeymoon like magic. Zero stress, only memories!', time: '2 days ago'},
                {name: 'Meera (Verified Traveler)', text: 'Their price match and 24x7 manager made our Japan trip so smooth.', time: '1 week ago'},
                {name: 'Rahul (Verified Traveler)', text: 'Got custom itinerary in 10 minutes on WhatsApp. Unreal speed and quality!', time: '3 weeks ago'},
              ].map((r, idx) => (
                <div key={idx} className="max-w-md rounded-2xl p-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <ShieldCheck size={16} /> {r.name}
                  </div>
                  <p className="text-slate-200 mt-2">“{r.text}”</p>
                  <p className="text-xs text-slate-400 mt-2">{r.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-white">3500+</div>
              <div className="text-slate-300/80 text-sm mt-1">Happy Travelers</div>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-slate-300/80 text-sm mt-1">Rating</div>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-white">7+</div>
              <div className="text-slate-300/80 text-sm mt-1">Countries</div>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-white">600+</div>
              <div className="text-slate-300/80 text-sm mt-1">Custom Trips Planned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustReviews