import React from 'react'

function Card(usuario){

  const usuarioArray = usuario.usuario

  console.log(usuarioArray)

  return(
    <h1>bienvenido {usuarioArray.nombre} {usuarioArray.apellido}</h1>
  )

}

export default Card

