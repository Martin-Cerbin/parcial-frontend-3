import { useState } from 'react'
import './App.css'
import {Card} from './Componentes/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <form></form>
      <Card/>
    </div>
  )
}

export default App
