import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'

const Producto = () => {
  const { id } = useParams()
    
  return (
    <>
      <ItemDetailContainer id={id}/>
    </>
  )
}

export default Producto