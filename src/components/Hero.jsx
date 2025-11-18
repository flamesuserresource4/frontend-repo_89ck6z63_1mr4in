import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-12 w-full">
        <div className="max-w-3xl">
          <p className="text-cyan-300/80 mb-3 tracking-wider uppercase text-xs">UrbanMiles Travel Co.</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_20px_rgba(0,230,255,0.25)]">
            Travel Smarter with UrbanMiles.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            Your Trip. Your Story. Designed Perfectly.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="rounded-2xl px-6 py-3 bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_40px_rgba(0,230,255,0.4)] hover:shadow-[0_0_60px_rgba(0,230,255,0.55)] transition-shadow">Plan My Trip</a>
            <a href="#builder" className="rounded-2xl px-6 py-3 border border-cyan-400/30 text-cyan-200 bg-white/5 backdrop-blur-md hover:bg-white/10">Explore Picks</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero