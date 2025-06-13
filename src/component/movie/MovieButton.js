import React from 'react';
import './MovieCard.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BagPlus } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { addToCart } from '../../features/cartSlice';
import { toast} from 'react-toastify';

const MovieButton = ({movieProp}) => {


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

         
            <BagPlus style={{borderRadius:"0px", fontSize:"30PX", border:'2px solid black', color:'white', cursor:"pointer", marginLeft:'10PX'}} variant="default"  onClick={cartVerification} />
         

  )
}

export default MovieButton