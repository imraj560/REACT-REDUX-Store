import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/layout';
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Amazon, BoxArrowInLeft, CreditCard, Facebook, RSquare, Alarm, Calendar, CalendarDayFill  } from 'react-bootstrap-icons';
import { Tv, CollectionPlayFill, DoorOpenFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import ProductViewCard from '../../component/productpage/ProductViewCard';
import batman from '../../assets/images/batman.jpeg'
import bond from '../../assets/images/bond.jpg'
import ironman from '../../assets/images/ironman.jpg'
import ambulance from '../../assets/images/ambulance.jpg'
import gladiator from '../../assets/images/gladiator.jpg'
import dune from '../../assets/images/dune.jpg'
import './Home.css';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [groceries, setgroceries] = useState([]);
  const [fragrance, setFragrance] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [furniture, setFurniture] = useState([]);

 
  {/**Getting the API Data */}
  useEffect(()=>{

    const asyncFunction = async() =>{

      //let data = await fetch('https://dummyjson.com/products').then((response)=>{
        let data = await fetch('utils/data.json').then((response)=>{

      
        return response.json();

      }).then((data)=>{

        setProducts(data);
        console.log(products)
      })

    }

    asyncFunction();

    console.log(products);

  },[]);


  {/**Taking the first 3 items from array */}
 useEffect(()=>{

  const groceriesData = products.filter((product)=>{
    
  return product.category.toLowerCase().includes('animation');

  })



  setgroceries(groceriesData.slice(0 ,4));

  const fragranceData = products.filter((product)=>{
    
    return product.category.toLowerCase().includes('action');
  
    })
  
    setFragrance(fragranceData.slice(0 ,4));


    const beautyData = products.filter((product)=>{
    
      return product.category.toLowerCase().includes('romantic');
    
      })
    
      setBeauty(beautyData.slice(0 ,4));


      const furnitureData = products.filter((product)=>{
    
        return product.category.toLowerCase().includes('drama');
      
        })
      
        setFurniture(furnitureData.slice(0 ,4));



  

 },[products])

  

  

  return (

    <Layout>

      <Container fluid>
        
      </Container>

     

      <Container>
      <Row id='banner_row'>
          
          <Col id="text_banner" md={6} sm={6}>
          <h1 style={{fontFamily:'Poppins', fontWeight:'600', marginBottom:'20px'}}>Discover Your Next Favourite Movie Collection</h1>
          <p style={{fontFamily:'Poppins', fontWeight:'300'}}>
          Welcome to our movie store, where you can explore the latest and greatest films.
          </p>
         
          <Button id="banner_button" variant='secondary'>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/store'}>Store</NavLink>
          </Button>
          
        </Col>



        </Row>

      <Row id="service_heading">

          <p>Discover the Latest Hits</p> 

      </Row>

      <Row id='services'>


          <Col  lg={4} md={12} sm={12} xs={12} style={{textAlign:'left', padding:'40px 20px'}}>
          <Tv size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Explore the Best of Cinema</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Stay ahead with our curated selection of films</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} style={{textAlign:'left', padding:'40px 20px'}}>
          <CreditCard size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Unlock Amazing Savings</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Don’t miss out on limited-time offers for your favorite films.</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} style={{textAlign:'left', padding:'40px 20px'}}>
          <CollectionPlayFill size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Enjoy a Curated Collection</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Find your next favorite film with our collection</p>
          </Col>
         

      </Row>

      <Row id="store_title">

          <Col md={6} sm={12}>
          <p style={{fontSize:'13PX'}}>Discover</p>

          <p style={{fontFamily:'Poppins', fontSize:'32PX', fontWeight:'600', textAlign:'left', width:'50%', marginBottom:'20px'}}>
            Movies
            </p>

            <p style={{fontSize:'13PX', marginBottom:'0PX'}}>Explore our extensive collection of movies for everyone!</p>   
          </Col>

          <Col md={6} sm={12} id="store_button_div">
            <Button id='store_button' variant='secondary'>
            <NavLink style={{textDecoration:'none', color:'WHITE'}} to={'/store'}>Store</NavLink>
            </Button>
          </Col>
          

          
        </Row>

      <Row id="movie">
      

          {
          groceries.map((data)=>(
          <Col lg={3} md={4} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
          </Col>

          ))
        }
     

          {

        fragrance.map((data)=>(
        <Col lg={3} md={4} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
        </Col>

        ))
      }

      </Row>

      
      <Row id="soon_title">
        <h2>Coming Soon</h2>
      </Row>

      <Row id="soon">

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={ambulance} />
            <Card.Body>
              <Card.Title class="cart_title">Ambulance</Card.Title>
              <Card.Text>
              This movie blends high-octane action sequences with emotional drama, set against the backdrop of a bank heist gone wrong.
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 2/5/2024</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 30 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={gladiator} />
            <Card.Body>
              <Card.Title class="cart_title">Gladiator 2</Card.Title>
              <Card.Text>
              The exiled Prince of Rome, alongside Denzel Washington as Macrinus, a former slave plotting to overthrow the twin emperors Geta.
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 2/5/2022</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 40 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={dune} />
            <Card.Body>
              <Card.Title class="cart_title">Dune</Card.Title>
              <Card.Text>
              The protagonist, Paul Atreides (Timothée Chalamet), is the heir to House Atreides. His family is given control of Arrakis.
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 15/5/2021</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 10 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row id="favourites_title">
        <h2>Most Popular</h2>
      </Row>

      <Row id="favourites">

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={batman} />
            <Card.Body>
              <Card.Title class="cart_title">Batman</Card.Title>
              <Card.Text>
              The movie stands apart from previous films by focusing on Batman's detective skills, a defining characteristic of the comic book character.
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 2/5/2020</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 30 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={bond} />
            <Card.Body>
              <Card.Title class="cart_title">James Bond</Card.Title>
              <Card.Text>
              This movie was released in 2021 after several delays and concludes the narrative arc that began with Casino Royale
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 2/5/2019</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 15 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={ironman} />
            <Card.Body>
              <Card.Title class="cart_title">Avengers</Card.Title>
              <Card.Text>
              The combined efforts of iconic heroes to combat powerful threats. Below is an overview of the four main Avengers films:
              <p style={{marginTop:'10px'}}><CalendarDayFill/> Release: 2/5/2024</p>
              <p style={{marginTop:'10px'}}><Alarm/> Time: 2 Hr 15 min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>





      <Row id="community">

        <Col md={6} id="community_text">
        <p style={{fontFamily:'Poppins', fontSize:'32PX', fontWeight:'600', textAlign:'left', marginBottom:'10px'}}>
          Join Our Movie Lovers Community
          </p>

        <p style={{fontSize:'13PX', marginBottom:'0PX'}}>Explore our extensive collection of movies for everyone!</p>   

        </Col>
        
       
        <Col md={6} id="community_button">
            <Button id="button_one" variant='secondary'>
            <NavLink style={{textDecoration:'none', color:'WHITE'}} to={'/store'}>Store</NavLink>
            </Button>
            <Button id="button_two" variant='secondary'>
            <NavLink style={{textDecoration:'none', color:'black'}} to={'/login'}>Register</NavLink>
            </Button>
            
        </Col>
      </Row>


      




     

    </Container>
      


  </Layout>
     
   
  )
}

export default Home;
