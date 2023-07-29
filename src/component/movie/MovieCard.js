import React from 'react';
import './MovieCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const MovieCard = ({movieProp}) => {

  const dispatch = useDispatch();

  const {id,title,price,image} = movieProp;

  return (

            <div className='column'>
              <img src={image} width="100%" height="80%"  />
              <h3>{title} : RM {price}</h3>
              <button
               onClick={()=>dispatch(addToCart({id,title,image,price}))}>
                Add to Cart</button>
            </div>
  )
}

export default MovieCard