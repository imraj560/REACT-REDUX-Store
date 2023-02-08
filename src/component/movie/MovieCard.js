import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {

  const {data} = props;

  return (

    <div className='movie__Card'>
      <div className='card__Inner'>
        <div className='card__Top'>
          
            <img src={data.image} alt="movie_poster"/>
        </div>
        <span className='title'>{data.title}</span>
        <button className='purchase_button'>Add to Cart</button>
      </div>
    </div> 

  )
}

export default MovieCard