import React, { Children } from 'react'

const Navlink = ({active = false}) => {
  return (
    <a href='#' className={`text-sm hover:font-bold 
    transition-all duration-150 ease-in hover:translate-y-1
    hover:border-zinc-400 uppercase tracking-wider border p-2
    px-4 rounded-full hover:text-zinc-900 ${active ?
         "border-zinc-400 font-bold text-zinx-900"
    : " border-transparent text-zinc-600"}`}
    
    >

    </a>
  )
}

export default Navlink