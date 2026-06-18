import React from 'react'
import Navlink from './Navlink'


const Navbar = () => {
  return (
    <header className='fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg py-6 lg:py-8 px-4 sm:px-8 max-w-7xl min-w-full ovweflow-x-clip'>
     
        
        <div className=" container  mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-3xl relative uppercase tracking-tight text-zinc-900">
            Furniture
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
           <Navlink>Home</Navlink>
           <Navlink>About</Navlink>
           <Navlink>Works</Navlink>
           <Navlink>Gallery</Navlink>
           <Navlink>Service</Navlink>
           

            <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px6 rounded-full cursor-pointer transiton-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
              Contact us
            </button>
          </nav>

          {/* Mobile Nav (empty for now) */}
          <div className="lg:hidden">
            {/* You can add hamburger menu later */}
          </div>

        </div>
      
    </header>
  )
}

export default Navbar
