import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import StarRating from "../rating/StarRating";
import './ProductViewCard.css'

const ProductViewCard = ({props})=>{

    const{id, title, price, description, image, rating} = props;

   

    return(
        <Card id="productView_Card" style={{ width: '100%', borderRadius:'0px'}}>
        <NavLink to={`/productView/${id}`}> {/**Reminder: you have to use back ticks in template literals */}
            <Card.Img variant="top" src={image} style={{height:"400px"}} />
        </NavLink>    
        
        <Card.Body>
          <Card.Title  style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'600'}}>{title}</Card.Title>
          <Card.Text>
           <span style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>${price}</span><br/>
           <StarRating rating={rating} totalStars={5} />
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default ProductViewCard;