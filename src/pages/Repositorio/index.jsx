import React from 'react'

const Repositorio = ({props}) => {
  return (
    <h1 style={{color: "#FFF"}}>
      {props.params.repositorio} 
    </h1>
  )
}

export default Repositorio