import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import { IconHeartFilled } from '@tabler/icons-react';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';

const ItemDetail = ({ item }) => {

  return (
    <div className="cardContainerMax d-flex justify-content-center container">
      <div className="cardMax card p-3">
        <div className='gifMax'>
          <img src="../src/assets/logos/system-solid-6-shopping.gif" alt="" />
        </div>
        <div className="about-product text-center mt-2">
          <div className="imgMax">
            <img src={item.image} alt={item.title} />
          </div>
          <div className='infoMax'>
            <h4 className="mt-0 text-black-50">{item.title}</h4>
            <h6>Categoría: <span className='sunny upperCase'>{item.category}</span> </h6>
          </div>
        </div>
        <div className="stats mt-2">
          <div className="descriptionMax">
            <p>&nbsp;&nbsp;&nbsp;DESCRIPCION </p>{item.description}
          </div>
          <div className="priceMax">
            <p className='price'> $ {item.price}</p>
            <p className='rating'>RATING &nbsp;<IconHeartFilled className='heart' /><span>{item.rating.rate}</span></p>
          </div>
          <div className="counterProd">
            <Counter/>
          </div>
          <button className="btn btn-primary btnMax">COMPRAR AHORA<IconInfoSquareRoundedFilled /></button>
        </div>
        <h3 className="boxMax">Quedan: {item.rating.count} Unidades</h3>        
      </div>
    </div>

  )
}

export default ItemDetail