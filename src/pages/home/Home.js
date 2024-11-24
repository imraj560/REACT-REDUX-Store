import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/layout';
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Paypal } from 'react-bootstrap-icons';
import { CreditCard } from 'react-bootstrap-icons';
import { Truck } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import ProductViewCard from '../../component/productpage/ProductViewCard';
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

      <Container>
      <Row>
        <Col style={{display:'flex',flexDirection:'column'}} id="home_banner" lg={12} md={12} sm={12} xs={12}>
          <h2>Latest Movie Releases</h2>
          <Button style={{width:'15%', backgroundColor:'#3b3b3b', border:"none", padding:'9px 9px'}}>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/store'}>Store</NavLink>
            </Button>
        </Col>
      </Row>

      <Row className='service__section text-center mt-5'>

        <h2 className='mb-5'>Services</h2>

          <Col  lg={4} md={12} sm={12} xs={12} className='text-center p-5'>
          <Paypal size={30}/>
          <p>Paypal Instant Payment</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} className='text-center p-5'>
          <CreditCard size={30}/>
          <p>Pay through Credit Card</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} className='text-center p-5'>
          <Truck size={30}/>
          <p>Free Shipping</p>
          </Col>

      </Row>

      <Row className="electronics__section mt-5">

        <h3>Latest Release</h3>

          {
          groceries.map((data)=>(
          <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
          </Col>

          ))
        }

      </Row>

      <Row>
      <Col id="parallex" lg={12} md={12} sm={12} xs={12}>
          <h2>We will notify you of upcoming movies</h2>
        </Col>
      </Row>

      <Row className="electronics__section">

      <h3>Kids and Family</h3>

          {

        fragrance.map((data)=>(
        <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
        </Col>

        ))
      }

      </Row>

      <Row>
        <Col id="action_message" lg={3} md={12} sm={12} xs={12}>
          <h2>Browse all our movie collection form store</h2>
          <Button variant='light'><NavLink style={{textDecoration:'none', color:'black'}} to={'/store'}>Store</NavLink></Button>
        </Col>
      </Row>

      <Row className="electronics__section">

      <h3>Popular</h3>

          {

        beauty.map((data)=>(
        <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
        </Col>

        ))
      }

      </Row>

      <Row>

      <Col id="parallex_second" lg={12} md={12} sm={12} xs={12}>
          <h2>The Amazing Spiderman is here</h2>
        </Col>
      </Row>



      <Row className="electronics__section">

      <h3>Upcoming</h3>

      {

      furniture.map((data)=>(
      <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
      <ProductViewCard props={data} />
      </Col>

      ))
      }




      </Row>


    </Container>
      


  </Layout>
     
   
  )
}

export default Home;
