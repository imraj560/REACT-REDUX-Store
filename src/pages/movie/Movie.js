
import './Movie.css';
import { getAllMovies } from '../../features/movieSlice';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../../component/movie/MovieCard';
import Login from '../login/Login';
import AuthComponent from '../../component/authNav/AuthComponent';


const Movie = () => {

  const movies = useSelector(getAllMovies);
  return movies;
  const user = useSelector(selectUser);


  let renderMovies = " ";

  renderMovies = movies.Response === "True" ? (

    movies.Search.map((movie, index)=>(

      <MovieCard key={index} data={movie} />

    ))

 

  ):(<div><h3>No movies</h3></div>);

  return (
    <AuthComponent>
    <div className='movie__Div'>

          <h3>Harry Potter Series</h3>

          <div className='movie__Page'>
              {renderMovies}
            

          </div>
        </div>

    </AuthComponent>
   
   
  )
}

export default Movie