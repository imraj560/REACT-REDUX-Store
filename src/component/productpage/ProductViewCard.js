import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProductViewCard = ({props})=>{

    const{id, title, price, description, thumbnail} = props;

    return(
        <Card style={{ width: '100%'}}>
        <NavLink to={`/productView/${id}`}> {/**Reminder: you have to use back ticks in template literals */}
            <Card.Img variant="top" src={thumbnail} style={{height:"400px"}} />
        </NavLink>    
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           <span style={{fontSize:"20px"}}>${price}</span><br/>
            Description:<br/>
           {description}
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default ProductViewCard;