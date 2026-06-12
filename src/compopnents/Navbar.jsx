import React  from 'react'
import Navlink from './Navlink'



const Navbar = () => {
  return (
    <header>
     <div className='fixed border-b border-b-zinc-300 
     bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4
     sm:px-8 max-w-7xl overflow-x-clip'>
      <div className="container mx-auto flex items-center 
      justify-between">

             {/* Logo*/}
              <div className="text-3xl relative uppercase
              tracking-tight text-zinc-900">
              Furniture
              </div>
        {/* Desktop Nav*/}
        <nav className='hidden lg:flex items-center space-x-8'>
          <Navlink>Home</Navlink>
          <Navlink>About</Navlink>
          <Navlink>Workd</Navlink>
          <Navlink>Gallery</Navlink>
          <Navlink>Service</Navlink>

          <button className='flex items-center space-x-2 bg-zinc-900
          text-white text-sm py-4 px-6 rounded-full cursor-pointer 
          transition-all duration-150 ease-in hover:bg-transparent 
          border border-zinc-900 hover:text-zinc-900 '>

         
            <span>Contact us</span>

          </button>
          
        </nav>


             {/* Mobile Nav*/}
              
             <div className='lg:hidden'>
   
             </div>


           
      </div>

     </div>
    </header>
  )
}

export default Navbar