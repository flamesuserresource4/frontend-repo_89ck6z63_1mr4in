import React from 'react'

const posts = [
  { title: 'Top 10 Hidden Gems in India', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop' },
  { title: 'How to Plan an International Trip Under 50k', img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Best Time to Visit Maldives', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop' },
]

const Blog = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Insights & Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.map((p, idx) => (
            <article key={idx} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <a href="#contact" className="inline-block mt-3 text-cyan-300">Read →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog