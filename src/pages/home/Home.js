import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { APIKey } from '../../common/movieApiKey';
// import movieApi from '../../common/movieApi';

import AuthComponent from '../../component/authNav/AuthComponent';
import './Home.css';

export const Home = () => {

  return (
  
      <div className='home__container'>

          <div className='text_div'>
            <p>Amazing Content</p>
            <p>Welcome to our Store</p>
           
          </div>
      
        
      </div>
   
  )
}

export default Home;
