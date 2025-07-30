import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <section className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center text-white min-h-screen">
    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Taste the Best <span className="text-yellow-400">Delights</span> in Town
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Experience our hand-crafted dishes made from the freshest ingredients. 
          Whether you dine in or order online, satisfaction is guaranteed.
        </p>

        {/* CTA Buttons */}
        <div className="space-x-4">
         
          <Link
  to="/products"
  className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
>
  View Menu
</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
