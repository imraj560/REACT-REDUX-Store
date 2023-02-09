
import './Movie.css';
import { getAllMovies } from '../../features/movieSlice';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../../component/movie/MovieCard';
import Login from '../login/Login';
import AuthComponent from '../../component/authNav/AuthComponent';


const Movie = () => {

  const user_redux_data = useSelector(selectUser);

  const getMovies = useSelector(getAllMovies);


  return (
    <AuthComponent>
         <div className='movie__Div'>

          {getMovies.map((data)=>(
            <MovieCard data={data} />
          ))}

         </div>
        

    </AuthComponent>
   
   
  )
}

export default Movie