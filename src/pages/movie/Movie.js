import { useEffect, useState } from 'react';
import MovieCard from '../../component/movie/MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Search } from 'react-bootstrap-icons';
import { Filter } from 'react-bootstrap-icons';
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

   
   
    <Row style={{width:"100%", padding:"0", margin:"0px 50px 5px 5px", marginBottom:"50px"}}>

      <div className='banner'>

        <p className='banner_text'>Our Store</p>
        
      </div>

      <Col md={2}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Search size={22}/>&nbsp;
        <Form.Label style={{fontSize:"18px"}}>Search Movie</Form.Label>
        <Form.Control style={{marginBottom:"30px"}} type="text" placeholder="Movie Name" />
      </Form.Group>

      <Filter size={22}/>&nbsp;
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Action</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Animation</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Adventure</label>
      </div>
      </Col>

      <Col md={10}>
        <Row style={{width:"100%", margin:"0px"}}>
           {

          movie.map((api_data)=>(
            
            <Col lg={4} md={4} sm={4} xs={4} style={{marginBottom:"10px"}}>
            <MovieCard movieProp={api_data} />
            </Col>
            
          
            
            ))
      
      }
        </Row>

        
      </Col>

    

  </Row>



)
}

export default Movie