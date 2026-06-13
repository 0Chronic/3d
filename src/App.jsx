import { useState } from 'react'
import './App.css'

import Navbar from './compopnents/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-clip">
    <Navbar />
    </div>
  )
}

export default App