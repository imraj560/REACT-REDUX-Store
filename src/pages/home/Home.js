import React from 'react';
import { useEffect } from 'react';
// import { APIKey } from '../../common/movieApiKey';
// import movieApi from '../../common/movieApi';
import { addMovies } from '../../features/movieSlice';
import { useDispatch } from 'react-redux';
import AuthComponent from '../../component/authNav/AuthComponent';
import './Home.css';

export const Home = () => {

  const movieText = "Harry";
  const dispatch = useDispatch();

  // This useEffect hook dispatches the action to load up the movies to be displayed later using the selector
  useEffect(()=>{

   
    fetch("utils/data.json")
    .then((response) => {
      console.log("resolved", response);
  return response.json();
    })
    .then((data) => {
      dispatch(addMovies(data));
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });

     


  

  },[])

  return (
  
      <div className='home__container'>
        
        <div className='title'>
          <h4>Stream Free Movies</h4>
        </div>
        
        <div className='movies'>
        
         
          <div className='movie__pic'>
            <img src='https://marketplace.canva.com/EAFH3hfSjxQ/1/0/1131w/canva-dark-modern-romance-movie-poster-WswsXqDPv4U.jpg' width='100%' height='500px'/>
          </div>
          <div className='movie__pic'>
          <img src='https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg' width='100%' height='500px'/>
          </div>
          <div className='movie__pic'>
          <img src='https://media.harrypotterfanzone.com/philosophers-stone-theatrical-poster.jpg' width='100%' height='500px'/>
          </div>

          
        </div>

      
        
      </div>
   
  )
}

export default Home;
