import { useEffect, useState, useRef } from 'react';
import MovieCard from '../../component/movie/MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { Funnel, Shop } from 'react-bootstrap-icons';
import './Movie.css';
import Layout from '../../component/layout/layout';



const Movie = () => {

 const [movies, setMovies] = useState([]);//initially its an empty array
 const [searchField, setSearchField] = useState('');
 const [rangeField, setRangeField] = useState(0);
 const [filterTags, setFilterTags] = useState([]);//filter tag is an array since we can check multiple chekcboxes at ones
 const [filteredMovie, setFilterMovie] = useState(movies);


 //this is where i get the api data using fetch 
  useEffect(()=>{
    
    // fetch('utils/data.json').then((response)=>{

    //     return response.json();

    // }).then((api_data)=>{

    // setMovies(api_data);
     

    // })
    // .then((err)=>{

    //     console.log(err, "logging error");
      
    // });

    const asyncFunction = async() => {

      //let data = await fetch('https://dummyjson.com/products').then((response)=>{
      let data = await fetch('../utils/data.json').then((response)=>{  

        return response.json();

      }).then((data)=>{

          setMovies(data);
          console.log('movies',data)

      })
    }

    asyncFunction();

  },[]);

  console.log(movies);

//SEARCH FUNCTION STARTS FROM THERE

  //Implementing Search function: First i take the search string and put it inside a variable
  const onSearchChange = (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
 
   
   }


  //then i run useeffect to filter out according to search query on every key up event in the search field
  useEffect(() => {

    const newfilteredMovies = movies.filter((movie)=>{

      return movie.title.toLocaleLowerCase().includes(searchField);
      
      })  

      setFilterMovie(newfilteredMovies);

  }
, [movies, searchField]);

//FILTER TAGS FUNCTIONS STARTS FROM HERE 


//so first we need to store the checked values of the input checkboxes

const onCheckChange = (event) => {

  if(event.target.checked){

    setFilterTags((prev)=>[...prev,event.target.value]);

    
  }else{

    setFilterTags(
      filterTags.filter((filterTag) => filterTag !== event.target.value)
    )

  }

}

useEffect(() => {
  const newCheckedMovie = movies.filter((movie) =>
    filterTags.length > 0
      ? filterTags.some((filterTag) => movie.category.includes(filterTag))
      : movies
  );
  setFilterMovie(newCheckedMovie);
}, [movies, filterTags]);


//on range change filter starts from here

function onRangeChange(event){

const rangeValue = event.target.value;

setRangeField(rangeValue);

}

useEffect(()=>{

  const newPriceRange = movies.filter((movie)=>{

    if(rangeField > 0){

      return Math.floor(movie.price) <= rangeField;
    }else{
      return movies
    }
    

  })


  setFilterMovie(newPriceRange);


},[movies, rangeField])



  return (

   <Layout>

    <Container>

      <Row >

      <div id="store_banner">

        <p id='store_banner_text'>Our Store</p>
        
      </div>

      <Col md={3}>

      <Card style={{marginBottom:"20px", borderRadius:'0px'}}>
        <Card.Header style={{backgroundColor:"black", color:"white", borderRadius:'0px'}}>Filter Products </Card.Header>
        <Card.Body>
      <label for="basic-url" style={{fontSize:"18px", marginBottom:"20px"}}>Search Movies</label>
      <div class="input-group mb-3" >
        <input placeholder='search'  onChange = {onSearchChange} style={{marginBottom:"30px"}} type="text" class="form-control" id="search-box" aria-describedby="basic-addon3" />
      </div>

      <label style={{fontSize:"18px", marginBottom:"20px"}}>Sort Products</label>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" value='animation' onChange={onCheckChange}/>
      <label class="form-check-label" for="exampleCheck1">Animation</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" value="adventure" onChange={onCheckChange}/>
      <label class="form-check-label" for="exampleCheck1">Adventure</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" value="action" onChange={onCheckChange}/>
      <label class="form-check-label" for="exampleCheck1">Action</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" value="romantic" onChange={onCheckChange}/>
      <label class="form-check-label" for="exampleCheck1">Romance</label>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" value="drama" onChange={onCheckChange}/>
      <label style={{marginBottom:"30px"}} class="form-check-label" for="exampleCheck1">Drama</label>
      </div>

      <label for="customRange1" class="form-label" style={{fontSize:"18px", marginTop:"20px", marginBottom:"20px"}}>Price Range</label>

      <input type="range" value={rangeField} class="form-range" min={0} max={100} step={5} id="customRange1" onChange={onRangeChange}></input>
      <span>0</span>-<span style={{marginBottom:"35px"}}>{rangeField}</span>

        </Card.Body>
      </Card>

      </Col>

      <Col md={9}>

        <Row style={{width:"100%", margin:"0px"}}>

           {

          filteredMovie.map((movies)=>(
            
            <Col lg={4} md={6} sm={6} xs={6} style={{marginBottom:"10px"}}>
            <MovieCard movieProp={movies} />
            </Col>
            
          
            
            ))
      
      }
        </Row>

        
      </Col>

    

    </Row>
    </Container>

        
   </Layout>
   




)
}

export default Movie