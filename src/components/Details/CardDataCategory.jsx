import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import { IconHeartFilled } from '@tabler/icons-react';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CardDataCategory = ({ item }) => {
  return (
    <div className="cardContainerMax2 d-flex justify-content-center container">
      <div className="cardMax card p-3">
        <div className='gifMax'>
          <img src="../src/assets/logos/system-solid-6-shopping.gif" alt="" />
        </div>
        <div className="about-product text-center">
          <div className="imgMax">
            <img src={item.image} alt={item.title} />
          </div>
          <div className='infoMax'>
            <h4 className="mt-0 text-black-50">{item.title}</h4>
            <h6>Categoría: <span className='sunny upperCase'>{item.category}</span> </h6>
          </div>
        </div>
        <div className="stats mt-2">
          <div className="priceMax">
            <p className='price'> $ {item.price}</p>
            <p className='rating'>RATING &nbsp;<IconHeartFilled className='heart' /><span>{item.rating.rate}</span></p>
          </div>
          <div className="counterProd">
            <Counter/>
          </div>
          <button className="btn btn-primary btnMax">COMPRAR AHORA<IconInfoSquareRoundedFilled /></button>
          <Link to={`/producto/${item.id}`}>
           <Button variant="primary">Ver Producto&nbsp;&nbsp;<IconInfoSquareRoundedFilled /></Button>
          </Link>
        </div>
        <h3 className="boxMax">Quedan: {item.rating.count} Unidades</h3>
      </div>
    </div>

  )
}

export default CardDataCategory
