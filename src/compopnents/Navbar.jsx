import React from 'react'
import Navlink from './Navlink'

const Navbar = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full border-b border-zinc-300 bg-white/50 backdrop-blur-lg py-6 px-4 sm:px-8">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-3xl uppercase tracking-tight text-zinc-900">
            Furniture
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Navlink active>Home</Navlink>
            <Navlink>About</Navlink>
            <Navlink>Work</Navlink>
            <Navlink>Gallery</Navlink>
            <Navlink>Service</Navlink>

            <button className="ml-4 bg-zinc-900 text-white text-sm py-3 px-5 rounded-full border border-zinc-900 hover:bg-transparent hover:text-zinc-900 transition">
              Contact us
            </button>
          </nav>

          {/* Mobile Nav (empty for now) */}
          <div className="lg:hidden">
            {/* You can add hamburger menu later */}
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
