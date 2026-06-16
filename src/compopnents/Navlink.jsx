import React from 'react'

const Navlink = ({ children, active = false }) => {
  return (
    <a
      href="#"
      className={`text-sm uppercase tracking-wider border p-2 px-4 py-2 rounded-full transition-all duration-150 hover:-translate-y-1 hover:font-bold hover:text-zinc-900  hover:border-zinc-400
      ${active
        ? "border-zinc-400 font-bold text-zinc-900"
        : "border-transparent text-zinc-600"
      }`}
    >
      {children}
    </a>
  )
}

export default Navlink