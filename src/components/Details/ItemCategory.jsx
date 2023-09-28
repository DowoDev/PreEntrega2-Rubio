import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import CardDataCategory from './CardDataCategory';

const ItemCategory = () => {
  const { categoria } = useParams();
  const [productos] = useFetch(`https://fakestoreapi.com/products/category/${categoria}`);

  return (
    <>
      <h1 className='titleMax'>Estas viendo la Categoría: <br /><span className='upperCase'>{categoria}</span></h1>
      <div className="container">
        <div className='row'>
          {productos !== null && productos.map((producto) => (
          <CardDataCategory key={producto.id} item={producto} />
        ))}
        </div>
        
      </div>
    </>
  );
};

export default ItemCategory;
