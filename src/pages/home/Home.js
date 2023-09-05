import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/layout';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { Paypal } from 'react-bootstrap-icons';
import { CreditCard } from 'react-bootstrap-icons';
import { Truck } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import ProductViewCard from '../../component/productpage/ProductViewCard';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [fragrance, setFragrance] = useState([]);
  const [skincare, setSkincare] = useState([]);

 
  {/**Getting the API Data */}
  useEffect(()=>{

    const asyncFunction = async() =>{

      let data = await fetch('https://dummyjson.com/products').then((response)=>{

      
        return response.json();

      }).then((data)=>{

        setProducts(data.products);
      })

    }

    asyncFunction();

    console.log(products);

  },[]);


  {/**Taking the first 3 items from array */}
 useEffect(()=>{

  const mobileData = products.filter((product)=>{
    
  return product.category.toLowerCase().includes('smartphones');

  })

  setMobile(mobileData.slice(0 ,4));

  const fragranceData = products.filter((product)=>{
    
    return product.category.toLowerCase().includes('fragrances');
  
    })
  
    setFragrance(fragranceData.slice(0 ,4));


    const skincareData = products.filter((product)=>{
    
      return product.category.toLowerCase().includes('skincare');
    
      })
    
      setSkincare(skincareData.slice(0 ,4));



  

 },[products])

  

  

  return (

      <Layout>
      
       <Row className='home__banner g-0'>
        <div className='banner__text'>
          <p>Quality products with affordable prices<br/> Check our Store</p>
          <Button variant='secondary' style={{width:"120px", borderRadius:"3px"}}><NavLink to='/movie' style={{textDecoration:"none",color:"white"}}>Store</NavLink></Button>
        </div>
       </Row>

       

        <Row className='service__section'>

          <h3>Services</h3>

          <Col  lg={4} md={12} sm={12} xs={12}>
          <Paypal size={40}/>
          <p>Paypal Instant Payment</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12}>
          <CreditCard size={40}/>
          <p>Pay through Credit Card</p>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12}>
          <Truck size={40}/>
          <p>Free Shipping</p>
          </Col>

        </Row>

        <Row className="electronics__section">

          <h3>Mobile Phones</h3>

              {
            mobile.map((data)=>(
            <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
            <ProductViewCard props={data} />
            </Col>

            ))
          }
          

        

        </Row>

        <Row className='parallex'>
          <p>Beautiful and premium accessories</p>
        </Row>


        <Row className="electronics__section">

          <h3>Fragrances</h3>

              {
          
            fragrance.map((data)=>(
            <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
              <ProductViewCard props={data} />
            </Col>

            ))
          }
          

        

        </Row>

        <Row className='parallex__second'>

         <div className='textbox__second'>
          <p>Black Friday sales around the corner</p>
          <Button variant='secondary' style={{width:"150px", backgroundColor:"#3e4449", borderRadius:"3px"}}><NavLink to='/movie' style={{textDecoration:"none",color:"white"}}>Store</NavLink></Button>

          
         </div>
         
        </Row>

        

        
        <Row className="electronics__section">

          <h3>Skincare</h3>

              {
          
            skincare.map((data)=>(
            <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
              <ProductViewCard props={data} />
            </Col>

            ))
          }
          

        

        </Row>

        

        

       

       


      

       
       


   




      </Layout>
     
   
  )
}

export default Home;
