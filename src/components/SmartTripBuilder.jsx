import React, { useState } from 'react'
import { Compass, Gem, Waves, Moon, Users, Wallet } from 'lucide-react'

const moods = [
  { key: 'adventure', label: 'Adventure', icon: Compass },
  { key: 'luxury', label: 'Luxury', icon: Gem },
  { key: 'calm', label: 'Calm', icon: Waves },
  { key: 'nightlife', label: 'Nightlife', icon: Moon },
  { key: 'family', label: 'Family', icon: Users },
  { key: 'budget', label: 'Budget', icon: Wallet },
]

const suggestions = {
  adventure: [
    { title: 'Bali Volcano Trails', desc: 'Hike, surf, and hidden waterfalls', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Leh-Ladakh Road Odyssey', desc: 'Epic Himalayan passes & starry skies', img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b8?q=80&w=1600&auto=format&fit=crop' },
    { title: 'New Zealand Fjord Quest', desc: 'Kayak, trek, and glacier heli-rides', img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1600&auto=format&fit=crop' },
  ],
  luxury: [
    { title: 'Maldives Overwater Bliss', desc: 'Private villa, ocean view dining', img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Swiss Alpine Retreat', desc: 'First-class trains & spa resorts', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Dubai Platinum Weekender', desc: 'Skyline suites & fine dining', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop' },
  ],
  calm: [
    { title: 'Ubud Slow Living', desc: 'Rice fields, yoga, forest temples', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Kerala Backwater Drift', desc: 'Houseboats & coconut lagoons', img: 'https://images.unsplash.com/photo-1503919275943-1f34b19f8e41?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Kyoto Zen Walks', desc: 'Shrines, tea houses, bamboo groves', img: 'https://images.unsplash.com/photo-1558980664-10ea65b2c2b8?q=80&w=1600&auto=format&fit=crop' },
  ],
  nightlife: [
    { title: 'Bangkok Neon Nights', desc: 'Rooftops, night markets & clubs', img: 'https://images.unsplash.com/photo-1518544881788-4e2a778dd3ea?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Seoul After Hours', desc: 'K-district bars & late eats', img: 'https://images.unsplash.com/photo-1517991104123-1d56a6e84f36?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Berlin Techno Pilgrimage', desc: 'Underground scene & galleries', img: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1600&auto=format&fit=crop' },
  ],
  family: [
    { title: 'Singapore Fun Trail', desc: 'Universal, safari & gardens', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Dubai Family Edition', desc: 'Theme parks & desert safari', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Bali With Kids', desc: 'Beaches, swings & chill cafes', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop' },
  ],
  budget: [
    { title: 'Vietnam Under 40k', desc: 'Street food & bays on a budget', img: 'https://images.unsplash.com/photo-1507568237455-03298cd16adf?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Sri Lanka Circuit', desc: 'Trains, tea fields & beaches', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Himachal Hostels', desc: 'Buses, bonfires & mountain stays', img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b8?q=80&w=1600&auto=format&fit=crop' },
  ],
}

const Card = ({ item }) => (
  <div className="group rounded-2xl border border-cyan-400/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-colors">
    <div className="h-40 w-full overflow-hidden">
      <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-4">
      <h4 className="text-white font-semibold">{item.title}</h4>
      <p className="text-slate-300/80 text-sm mt-1">{item.desc}</p>
    </div>
  </div>
)

const SmartTripBuilder = () => {
  const [active, setActive] = useState('adventure')

  return (
    <section id="builder" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Smart Trip Builder – Mood Based Travel Picks</h2>
          <p className="text-slate-300/80 mt-2">Tap a mood, we’ll curate destinations instantly.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {moods.map(({ key, label, icon: Icon }) => (
            <button key={key} onClick={() => setActive(key)} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 border transition-all backdrop-blur-md ${active===key ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(0,230,255,0.2)]' : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/20'}`}>
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions[active].map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmartTripBuilder