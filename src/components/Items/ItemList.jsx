import React from 'react'
import { Col } from 'react-bootstrap'
import CardData from '../Details/CardData';


const ItemList = ({ items }) => {
  return (
    <>
      {
        items.map((item) => (
          <Col md={4} lg={4} xs={12} key={item.id}>
            <CardData item={item} />
          </Col>
        ))
      }
    </>
  )
}


export default ItemList