import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';

const CardData = ({ item }) => {
  return (
    <Card className='card'>
      <div className='img-container'>
        <Card.Img className='card-img-top' src={item.image} />
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          $ {item.price}
        </Card.Text>
        <Link to={`/producto/${item.id}`}>
          <Button variant="primary">Ver Producto&nbsp;&nbsp;<IconInfoSquareRoundedFilled /></Button>
        </Link>
      </Card.Body>
      <Counter />
    </Card>
    

  );
}

export default CardData

