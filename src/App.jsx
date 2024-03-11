import { useState } from 'react'

import './App.css'
import Buscador from './componentes/Buscador'
import Tabla from './componentes/Tabla'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h5>INICIO PROYECTO</h5>
        <Buscador />
        <Tabla />
      </div>
      
    </>
  )
}

export default App
