import React from 'react';
import './MovieCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const MovieCard = ({movieProp}) => {

  const dispatch = useDispatch();

  const {id,title,price,image} = movieProp;

  return (

          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {price}
            </Card.Text>
            <Button variant="success"  onClick={()=>dispatch(addToCart({id,title,image,price}))}>Add To Cart</Button>
          </Card.Body>
        </Card>

  )
}

export default MovieCard