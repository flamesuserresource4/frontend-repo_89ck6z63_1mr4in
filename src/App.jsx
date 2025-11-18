import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmartTripBuilder from './components/SmartTripBuilder'
import Collections from './components/Collections'
import TrustReviews from './components/TrustReviews'
import WhyChooseUs from './components/WhyChooseUs'
import ContactCTA from './components/ContactCTA'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <main>
        <SmartTripBuilder />
        <Collections />
        <TrustReviews />
        <WhyChooseUs />
        <ContactCTA />
        <Blog />
      </main>
    </div>
  )
}

export default App