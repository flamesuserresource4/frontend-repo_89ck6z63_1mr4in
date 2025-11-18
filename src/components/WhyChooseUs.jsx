import React from 'react'
import { Shield, FileClock, Headphones, BadgeCheck, Sparkles, LifeBuoy } from 'lucide-react'

const items = [
  { icon: Shield, title: 'No Hidden Charges' },
  { icon: FileClock, title: 'Custom Itinerary in 15 Minutes' },
  { icon: Headphones, title: '24×7 Trip Manager Support' },
  { icon: BadgeCheck, title: 'Best Flight + Hotel Price Match' },
  { icon: Sparkles, title: 'Safe & Smooth Experience' },
  { icon: LifeBuoy, title: 'Emergency Backup Team' },
]

const WhyChooseUs = () => {
  return (
    <section id="why" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Travel DNA</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                  <it.icon size={18} />
                </div>
                <div className="text-white font-medium">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs