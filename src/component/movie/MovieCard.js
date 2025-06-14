import React from 'react';
import './MovieCard.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { addToCart } from '../../features/cartSlice';
import { toast} from 'react-toastify';

const MovieCard = ({movieProp}) => {


  const {id,title,price,image, description, category} = movieProp;
  
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  

  const cartVerification = ()=>{

    if(user){

      dispatch(addToCart({id,title,price,image,description}));

    }else{

      toast.warning("Please Login");

    }

  }

  return (

          <Card style={{ width: '100%', borderRadius:'0px'}}>
             <NavLink to={`/productView/${category}/${id}`}> {/**Reminder: you have to use back ticks in template literals */}
               <Card.Img variant="top" src={image} style={{height:"400px"}} />
            </NavLink>  
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {price}
            </Card.Text>
            <Button style={{borderRadius:"0px", border:'2px solid black', background:"white", color:'black'}} variant="default"  onClick={cartVerification}>Add To Cart</Button>
          </Card.Body>
        </Card>

  )
}

export default MovieCard