import { useEffect, useState } from 'react';
import MovieCard from '../../component/movie/MovieCard';
import './Movie.css';


const Movie = () => {

 const [movie, setMovie] = useState([]);//initially its an empty array

  useEffect(()=>{
    

    fetch('utils/data.json').then((response)=>{

        return response.json();

    }).then((api_data)=>{

    setMovie(api_data);
     

    })
    .then((err)=>{

        console.log(err, "logging error");
      
    });

  },[]);


  return (
   
            <div className='row'>

             {
              

             movie.map((api_data)=>(

              
             <MovieCard movieProp={api_data} />
              
              ))
              
              }

          </div>

   
   
  )
}

export default Movie