
import './Movie.css';
import { getAllMovies } from '../../features/movieSlice';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../../component/movie/MovieCard';
import Login from '../login/Login';
import AuthComponent from '../../component/authNav/AuthComponent';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Movie = () => {

  const user_redux_data = useSelector(selectUser);

  const getMovies = useSelector(getAllMovies);


  return (
    <AuthComponent>
         <Container>
          <Row>

             {
              
             getMovies.map((data)=>(
               <MovieCard movieProp={data} />
              ))
              
              }

          </Row>

         

         </Container>
        

    </AuthComponent>
   
   
  )
}

export default Movie