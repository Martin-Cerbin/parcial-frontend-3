import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {

      const [show, setShow] = useState(false)
      const [error, setError] = useState(false)

      const handleSubmit = (event) => {
        event.preventDefault()
        if(usuario.nombre.length > 3 && usuario.apellido.length > 5){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    const [usuario, setUsuario] = useState({
      nombre: '', 
      apellido: ''
    })


    return (
      <div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="nombre">Nombre:</label>
          <input type="text"
            value={usuario.nombre}
            onChange={(e) => setUsuario({...usuario, nombre: e.target.value})} 
          />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text"
            value={usuario.apellido}
            onChange={(e) => setUsuario({...usuario, apellido: e.target.value})}
          />

          <button type="submit">Enviar</button>
        </form>

        
      <Card usuario={usuario}/>
      </div>
    )
  
}

export default App
