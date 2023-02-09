import React from 'react';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MovieCard.css';

const MovieCard = ({movieProp}) => {

  const {id,title,price,image} = movieProp;

  return (

    <Col>
         <Card key={id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {price}
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
         </Card>
    </Col>

  )
}

export default MovieCard